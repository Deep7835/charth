"use client";

import { forwardRef, useEffect, useMemo, useRef, useState } from "react";
import { downloadSvgAsPng } from "@/components/board/exportPng";
import { headsForHeight, smoothClosed } from "@/components/board/figures";
import { HeightInput } from "@/components/board/HeightInput";
import { palette } from "@/components/board/types";
import { useElementSize } from "@/components/board/useElementSize";
import type { HugMessages } from "@/i18n/hug";
import { fmt } from "@/lib/fmt";
import { formatHeight, type Unit } from "@/lib/units";
import { reachLandmark } from "./DifferenceCalculator";

type Gender = "male" | "female";
type Person = { name: string; heightCm: number; kind: Gender };
type Pt = [number, number];

/** Key body heights (cm above the ground) for a side-view adult figure. */
function bodyOf(H: number, gender: Gender) {
  const heads = H >= 150 ? 7.5 : H >= 140 ? 7 : headsForHeight(H);
  const hh = H / heads;
  const childish = Math.max(0, Math.min(1, (7.5 - heads) / 3.5));
  const crotch = (0.48 - childish * 0.08) * H;
  const shoulder = H - hh * 1.35;
  return {
    H,
    hh,
    crotch,
    shoulder,
    waist: crotch + (shoulder - crotch) * 0.42,
    chin: H - hh,
    eye: H - hh * 0.47,
    depth: (gender === "female" ? 0.118 : 0.128) * H,
  };
}
type Body = ReturnType<typeof bodyOf>;

/** Two-bone IK: elbow position for an arm reaching from `s` towards `t` (elbow bends downward). */
function solveArm(s: Pt, t: Pt, l1: number, l2: number): { elbow: Pt; hand: Pt } {
  const dx = t[0] - s[0];
  const dy = t[1] - s[1];
  const dist = Math.hypot(dx, dy) || 1e-6;
  const ux = dx / dist;
  const uy = dy / dist;
  const d = Math.min(Math.max(dist, Math.abs(l1 - l2) + 1e-3), l1 + l2 - 1e-3);
  const hand: Pt = [s[0] + ux * d, s[1] + uy * d];
  const a = (l1 * l1 - l2 * l2 + d * d) / (2 * d);
  const h = Math.sqrt(Math.max(0, l1 * l1 - a * a));
  const px = s[0] + ux * a;
  const py = s[1] + uy * a;
  const e1: Pt = [px - uy * h, py + ux * h];
  const e2: Pt = [px + uy * h, py - ux * h];
  return { elbow: e1[1] < e2[1] ? e1 : e2, hand };
}

type Figure = {
  fill: string[];
  strokes: { d: string; w: number }[];
  head: { cx: number; cy: number; rx: number; ry: number };
  shoulderJoint: Pt;
};

/** World coordinates: x in cm, y in cm above ground (flipped to SVG space when drawn). */
function figure(b: Body, x0: number, f: 1 | -1, gender: Gender): Figure {
  const { H, hh, depth: d } = b;
  const Y = (y: number) => -y;
  const torso: Pt[] = [
    [x0 + f * d * 0.18, b.shoulder + 0.03 * H],
    [x0 + f * d * 0.42, b.shoulder - 0.01 * H],
    [x0 + f * d * (gender === "female" ? 0.64 : 0.52), b.shoulder - 0.08 * H],
    [x0 + f * d * 0.42, b.shoulder - 0.14 * H],
    [x0 + f * d * 0.36, b.waist],
    [x0 + f * d * 0.44, b.crotch + 0.05 * H],
    [x0 + f * d * 0.25, b.crotch - 0.005 * H],
    [x0 - f * d * 0.35, b.crotch - 0.005 * H],
    [x0 - f * d * (gender === "female" ? 0.62 : 0.52), b.crotch + 0.06 * H],
    [x0 - f * d * 0.42, b.waist],
    [x0 - f * d * 0.52, b.shoulder - 0.08 * H],
    [x0 - f * d * 0.4, b.shoulder + 0.01 * H],
    [x0 - f * d * 0.15, b.shoulder + 0.035 * H],
  ];
  const fill = [smoothClosed(torso.map(([x, y]) => [x, Y(y)]), 0.8)];
  if (gender === "female") {
    // Long hair falling behind the head.
    fill.unshift(
      smoothClosed(
        [
          [x0 + f * hh * 0.1, Y(H + hh * 0.02)],
          [x0 - f * hh * 0.42, Y(H - hh * 0.2)],
          [x0 - f * hh * 0.55, Y(H - hh * 1.1)],
          [x0 - f * hh * 0.3, Y(b.shoulder - hh * 0.2)],
          [x0 - f * hh * 0.05, Y(H - hh * 0.9)],
        ],
        0.8,
      ),
    );
  }
  // Nose
  fill.push(smoothClosed([
    [x0 + f * hh * 0.36, Y(H - hh * 0.45)],
    [x0 + f * hh * 0.5, Y(H - hh * 0.6)],
    [x0 + f * hh * 0.36, Y(H - hh * 0.66)],
  ], 0.5));

  const line = (a: Pt, c: Pt) => `M${a[0]},${Y(a[1])}L${c[0]},${Y(c[1])}`;
  const neckTop: Pt = [x0 - f * 0.005 * H, b.chin + hh * 0.1];
  const neckBottom: Pt = [x0 - f * 0.01 * H, b.shoulder];
  const hip: Pt = [x0, b.crotch + 0.03 * H];
  const knee: Pt = [x0 + f * 0.012 * H, 0.27 * H];
  const ankle: Pt = [x0 - f * 0.005 * H, 0.045 * H];
  const toe: Pt = [x0 + f * 0.1 * H, 0.014 * H];
  const back: Pt = [-f * 0.025 * H, 0];
  const shift = (p: Pt): Pt => [p[0] + back[0], p[1]];
  const strokes = [
    // Far leg (slightly behind), then near leg
    { d: line(shift(hip), shift(knee)), w: 0.075 * H },
    { d: line(shift(knee), shift(ankle)), w: 0.052 * H },
    { d: line(shift(ankle), shift(toe)), w: 0.03 * H },
    { d: line(hip, knee), w: 0.078 * H },
    { d: line(knee, ankle), w: 0.055 * H },
    { d: line(ankle, toe), w: 0.032 * H },
    { d: line(neckTop, neckBottom), w: 0.05 * H },
  ];
  return {
    fill,
    strokes,
    head: { cx: x0 + f * hh * 0.06, cy: Y(H - hh * 0.5), rx: hh * 0.42, ry: hh * 0.5 },
    shoulderJoint: [x0 - f * d * 0.05, b.shoulder - 0.015 * H],
  };
}

function armStrokes(b: Body, from: Pt, target: Pt) {
  const l1 = 0.188 * b.H;
  const l2 = 0.245 * b.H;
  const { elbow, hand } = solveArm(from, target, l1, l2);
  const Y = (y: number) => -y;
  return [
    { d: `M${from[0]},${Y(from[1])}L${elbow[0]},${Y(elbow[1])}`, w: 0.05 * b.H },
    { d: `M${elbow[0]},${Y(elbow[1])}L${hand[0]},${Y(hand[1])}`, w: 0.042 * b.H },
  ];
}

type Scene = {
  layers: { color: string; fig?: Figure; arms?: { d: string; w: number }[] }[];
  labels: { x: number; y: number; name: string; h: number; color: string }[];
  eyes: { y: number; color: string }[];
  bounds: { minX: number; maxX: number; maxH: number };
  armsKey: keyof HugMessages["arms"];
  chinRest: boolean;
  hugger: Person;
  other: Person;
};

function buildScene(people: [Person, Person], type: "front" | "back", behind: 0 | 1): Scene {
  const bodies = people.map((p) => bodyOf(p.heightCm, p.kind)) as [Body, Body];
  const colors = [palette[0], palette[1]];
  const maxH = Math.max(bodies[0].H, bodies[1].H);

  if (type === "front") {
    const xs = [0, (bodies[0].depth + bodies[1].depth) * 0.5 * 0.92];
    const facing: [1, -1] = [1, -1];
    const figs = [0, 1].map((i) => figure(bodies[i], xs[i], facing[i], people[i].kind));
    const tallIdx = bodies[0].H >= bodies[1].H ? 0 : 1;
    const shortIdx = 1 - tallIdx;
    const T = bodies[tallIdx];
    const S = bodies[shortIdx];
    const even = T.H - S.H < 6;
    const tallTarget: Pt = [xs[shortIdx] - facing[shortIdx] * S.depth * 0.45, S.shoulder - 0.06 * S.H];
    const shortTarget: Pt = even
      ? [xs[tallIdx] - facing[tallIdx] * T.depth * 0.45, (T.waist + T.shoulder) / 2]
      : [xs[tallIdx] - facing[tallIdx] * T.depth * 0.42, T.waist + 0.02 * T.H];
    return {
      layers: [
        { color: colors[tallIdx], fig: figs[tallIdx] },
        { color: colors[shortIdx], fig: figs[shortIdx] },
        { color: colors[shortIdx], arms: armStrokes(S, figs[shortIdx].shoulderJoint, shortTarget) },
        { color: colors[tallIdx], arms: armStrokes(T, figs[tallIdx].shoulderJoint, tallTarget) },
      ],
      labels: [0, 1].map((i) => ({ x: xs[i], y: bodies[i].H, name: people[i].name, h: bodies[i].H, color: colors[i] })),
      eyes: [0, 1].map((i) => ({ y: bodies[i].eye, color: colors[i] })),
      bounds: { minX: -maxH * 0.32, maxX: xs[1] + maxH * 0.32, maxH },
      armsKey: even ? "even" : "tallOver",
      chinRest: false,
      hugger: people[tallIdx],
      other: people[shortIdx],
    };
  }

  const h = behind;
  const o = (1 - behind) as 0 | 1;
  const Hb = bodies[h];
  const Ob = bodies[o];
  const xs: number[] = [];
  xs[o] = 0;
  xs[h] = -(Hb.depth + Ob.depth) * 0.5 * 0.85;
  const figO = figure(Ob, xs[o], 1, people[o].kind);
  const figH = figure(Hb, xs[h], 1, people[h].kind);
  const overShoulders = Hb.chin >= Ob.shoulder - 2;
  const target: Pt = overShoulders
    ? [xs[o] + Ob.depth * 0.35, Ob.shoulder - 0.07 * Ob.H]
    : [xs[o] + Ob.depth * 0.35, Ob.waist];
  const restTarget: Pt = [xs[o] + 0.01 * Ob.H, Ob.shoulder - 0.4 * Ob.H];
  return {
    layers: [
      { color: colors[h], fig: figH },
      { color: colors[o], fig: figO },
      { color: colors[o], arms: armStrokes(Ob, figO.shoulderJoint, restTarget) },
      { color: colors[h], arms: armStrokes(Hb, figH.shoulderJoint, target) },
    ],
    labels: [0, 1].map((i) => ({ x: xs[i], y: bodies[i].H, name: people[i].name, h: bodies[i].H, color: colors[i] })),
    eyes: [0, 1].map((i) => ({ y: bodies[i].eye, color: colors[i] })),
    bounds: { minX: xs[h] - maxH * 0.32, maxX: maxH * 0.36, maxH },
    armsKey: overShoulders ? "backShoulders" : "backWaist",
    chinRest: Hb.chin >= Ob.shoulder - 2 && Hb.chin <= Ob.shoulder + 25,
    hugger: people[h],
    other: people[o],
  };
}

const HugCanvas = forwardRef<SVGSVGElement, { scene: Scene; unit: Unit; width: number; height: number; title: string }>(
  function HugCanvas({ scene, unit, width, height, title }, ref) {
    const { minX, maxX, maxH } = scene.bounds;
    const top = -maxH * 1.2;
    const bottom = maxH * 0.05;
    const viewH = bottom - top;
    // Keep the aspect ratio by widening the view to the container.
    const viewW = Math.max(maxX - minX, (viewH * width) / Math.max(height, 1));
    const left = (minX + maxX) / 2 - viewW / 2;
    const u = viewH / Math.max(height, 1); // world units per pixel
    return (
      <svg
        ref={ref}
        width={width}
        height={height}
        viewBox={`${left} ${top} ${viewW} ${viewH}`}
        role="img"
        aria-label={title}
        direction="ltr"
        fontFamily="system-ui, -apple-system, 'Segoe UI', Roboto, 'Noto Sans', sans-serif"
      >
        <line x1={left} x2={left + viewW} y1={0} y2={0} stroke="#94a3b8" strokeWidth={u} />
        {scene.eyes.map((e, i) => (
          <line
            key={i}
            x1={left}
            x2={left + viewW}
            y1={-e.y}
            y2={-e.y}
            stroke={e.color}
            strokeOpacity={0.45}
            strokeDasharray={`${u * 6} ${u * 5}`}
            strokeWidth={u * 1.2}
          />
        ))}
        {scene.layers.map((layer, i) => (
          <g key={i} fill={layer.color} stroke={layer.color} strokeLinecap="round" opacity={0.96}>
            {layer.fig && (
              <>
                {layer.fig.strokes.map((s, j) => (
                  <path key={j} d={s.d} strokeWidth={s.w} fill="none" />
                ))}
                {layer.fig.fill.map((d, j) => (
                  <path key={`f${j}`} d={d} stroke="none" />
                ))}
                <ellipse {...layer.fig.head} stroke="none" />
              </>
            )}
            {layer.arms?.map((s, j) => <path key={j} d={s.d} strokeWidth={s.w} fill="none" />)}
          </g>
        ))}
        {(() => {
          // Left figure's label hangs to the left, right figure's to the right, so they never collide.
          const sorted = [...scene.labels].sort((a, b) => a.x - b.x);
          return sorted.map((l, i) => {
            const left = i === 0;
            const x = l.x + (left ? -1 : 1) * maxH * 0.1;
            return (
              <g key={l.name + i} textAnchor={left ? "end" : "start"} stroke="#fff" strokeWidth={u * 3} paintOrder="stroke" strokeLinejoin="round">
                <text x={x} y={-l.y - u * 16} fontSize={u * 13} fontWeight={700} fill="#0f172a">
                  {l.name}
                </text>
                <text x={x} y={-l.y} fontSize={u * 12} fontWeight={600} fill={l.color}>
                  {formatHeight(l.h, unit)} · {formatHeight(l.h, unit === "cm" ? "ft" : "cm")}
                </text>
              </g>
            );
          });
        })()}
      </svg>
    );
  },
);

const field =
  "w-full rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-sm font-normal normal-case tracking-normal text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100";
const seg = (on: boolean) => `rounded-md px-3 py-1 text-sm font-semibold ${on ? "bg-white shadow-sm" : "text-slate-500"}`;

export function HugSimulator({ t, defaultUnit, brand }: { t: HugMessages; defaultUnit: Unit; brand: string }) {
  const [unit, setUnit] = useState<Unit>(defaultUnit);
  const [type, setType] = useState<"front" | "back">("front");
  const [behind, setBehind] = useState<0 | 1>(0);
  const [people, setPeople] = useState<[Person, Person]>([
    { name: t.personA, heightCm: 183, kind: "male" },
    { name: t.personB, heightCm: 163, kind: "female" },
  ]);
  const [toast, setToast] = useState<string | null>(null);
  const [box, size] = useElementSize<HTMLDivElement>();
  const svgRef = useRef<SVGSVGElement>(null);
  // Bumped after restoring from the URL so height fields re-read their values.
  const [restored, setRestored] = useState(0);

  // Restore from / sync to the URL (?a=183&ak=m&b=163&bk=f&t=front&w=0).
  useEffect(() => {
    const q = new URLSearchParams(window.location.search);
    const num = (k: string) => {
      const n = parseFloat(q.get(k) ?? "");
      return n > 30 && n < 300 ? n : null;
    };
    const a = num("a");
    const b = num("b");
    /* eslint-disable react-hooks/set-state-in-effect -- one-time sync from the URL */
    if (a || b) {
      setPeople((p) => [
        { ...p[0], heightCm: a ?? p[0].heightCm, kind: q.get("ak") === "f" ? "female" : q.get("ak") === "m" ? "male" : p[0].kind, name: q.get("an")?.slice(0, 30) || p[0].name },
        { ...p[1], heightCm: b ?? p[1].heightCm, kind: q.get("bk") === "m" ? "male" : q.get("bk") === "f" ? "female" : p[1].kind, name: q.get("bn")?.slice(0, 30) || p[1].name },
      ]);
    }
    if (q.get("t") === "back") setType("back");
    if (q.get("w") === "1") setBehind(1);
    setRestored((n) => n + 1);
    /* eslint-enable react-hooks/set-state-in-effect */
  }, []);

  const shareUrl = () => {
    const url = new URL(window.location.href);
    url.search = "";
    const q = url.searchParams;
    q.set("a", String(Math.round(people[0].heightCm * 10) / 10));
    q.set("ak", people[0].kind[0]);
    q.set("an", people[0].name);
    q.set("b", String(Math.round(people[1].heightCm * 10) / 10));
    q.set("bk", people[1].kind[0]);
    q.set("bn", people[1].name);
    q.set("t", type);
    q.set("w", String(behind));
    return url.toString();
  };

  useEffect(() => {
    if (!toast) return;
    const id = setTimeout(() => setToast(null), 1800);
    return () => clearTimeout(id);
  }, [toast]);

  const scene = useMemo(() => buildScene(people, type, behind), [people, type, behind]);

  const set = (i: 0 | 1, patch: Partial<Person>) =>
    setPeople((p) => {
      const next: [Person, Person] = [p[0], p[1]];
      next[i] = { ...next[i], ...patch };
      return next;
    });

  const [tall, short] = people[0].heightCm >= people[1].heightCm ? people : [people[1], people[0]];
  const tb = bodyOf(tall.heightCm, tall.kind);
  const sb = bodyOf(short.heightCm, short.kind);
  const eyeGap = Math.max(0, tb.eye - sb.eye);
  const tilt = Math.round((Math.atan(eyeGap / 30) * 180) / Math.PI);
  const part = t.parts[reachLandmark(short.heightCm / tall.heightCm)];

  const armsText = fmt(t.arms[scene.armsKey], {
    tall: tall.name,
    short: short.name,
    hugger: scene.hugger.name,
    other: scene.other.name,
  });

  return (
    <div className="grid gap-4 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
      <div className="flex flex-col gap-4 rounded-3xl border border-slate-200 bg-slate-50 p-4 sm:p-5">
        <div className="flex flex-wrap gap-2">
          <div className="inline-flex rounded-lg border border-slate-200 bg-slate-100 p-0.5" role="group" aria-label={t.hugType}>
            <button type="button" aria-pressed={type === "front"} className={seg(type === "front")} onClick={() => setType("front")}>
              {t.front}
            </button>
            <button type="button" aria-pressed={type === "back"} className={seg(type === "back")} onClick={() => setType("back")}>
              {t.back}
            </button>
          </div>
          <div className="inline-flex rounded-lg border border-slate-200 bg-slate-100 p-0.5">
            {(["cm", "ft"] as const).map((u) => (
              <button key={u} type="button" aria-pressed={unit === u} className={seg(unit === u)} onClick={() => setUnit(u)}>
                {u === "cm" ? "cm" : "ft/in"}
              </button>
            ))}
          </div>
        </div>
        {([0, 1] as const).map((i) => (
          <fieldset key={i} className="rounded-2xl border border-slate-200 bg-white p-4">
            <legend className="px-1 text-sm font-bold" style={{ color: palette[i] }}>
              {i === 0 ? t.personA : t.personB}
            </legend>
            <div className="grid gap-3 sm:grid-cols-2">
              <label className="flex flex-col gap-1 text-xs font-semibold uppercase tracking-wide text-slate-500">
                {t.name}
                <input className={field} value={people[i].name} maxLength={30} onChange={(e) => set(i, { name: e.target.value })} />
              </label>
              <div className="flex flex-col gap-1">
                <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">cm / ft</span>
                <HeightInput
                  key={`${unit}-${restored}`}
                  valueCm={people[i].heightCm}
                  unit={unit}
                  onChange={(heightCm) => set(i, { heightCm: Math.min(Math.max(heightCm, 60), 260) })}
                  labels={{ feet: "ft", inches: "in", unitMetric: "cm" }}
                />
              </div>
            </div>
            <div className="mt-3 grid grid-cols-2 gap-1">
              {(["male", "female"] as const).map((k) => (
                <button
                  key={k}
                  type="button"
                  onClick={() => set(i, { kind: k })}
                  className={`rounded-md px-2 py-1 text-lg ${people[i].kind === k ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-600"}`}
                  aria-pressed={people[i].kind === k}
                  aria-label={k}
                >
                  {k === "male" ? "♂" : "♀"}
                </button>
              ))}
            </div>
          </fieldset>
        ))}
        {type === "back" && (
          <div className="flex flex-col gap-1">
            <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">{t.behind}</span>
            <div className="inline-flex self-start rounded-lg border border-slate-200 bg-slate-100 p-0.5">
              {([0, 1] as const).map((i) => (
                <button key={i} type="button" aria-pressed={behind === i} className={seg(behind === i)} onClick={() => setBehind(i)}>
                  {people[i].name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-col gap-3">
        <div ref={box} className="relative h-[440px] overflow-hidden rounded-2xl border border-slate-200 bg-white">
          {size.width > 0 && <HugCanvas ref={svgRef} scene={scene} unit={unit} width={size.width} height={size.height} title={t.h1} />}
          {toast && (
            <div role="status" className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-slate-900 px-4 py-1.5 text-xs font-medium text-white">
              {toast}
            </div>
          )}
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium shadow-sm hover:bg-slate-50"
            onClick={async () => {
              const url = shareUrl();
              try {
                if (navigator.share && window.matchMedia("(pointer: coarse)").matches) await navigator.share({ url, title: document.title });
                else {
                  await navigator.clipboard.writeText(url);
                  setToast(t.linkCopied);
                }
              } catch {
                /* share sheet dismissed */
              }
            }}
          >
            ⤴ {t.share}
          </button>
          <button
            type="button"
            className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium shadow-sm hover:bg-slate-50"
            onClick={() => svgRef.current && void downloadSvgAsPng(svgRef.current, "hug-simulator.png", brand)}
          >
            ⤓ {t.download}
          </button>
        </div>
        <dl className="grid gap-3 rounded-3xl bg-slate-900 p-5 text-sm text-white sm:grid-cols-2" aria-live="polite">
          <div className="sm:col-span-2">
            <dt className="text-slate-400">{fmt(t.headLands, { a: tall.name, b: short.name })}</dt>
            <dd className="text-xl font-bold">{part}</dd>
          </div>
          <div>
            <dt className="text-slate-400">{t.eyeGap}</dt>
            <dd className="text-lg font-semibold tabular-nums">
              <bdi dir="ltr">{formatHeight(eyeGap, unit)}</bdi>
            </dd>
          </div>
          <div>
            <dt className="text-slate-400">
              {t.tilt} <span className="text-slate-500">({t.tiltNote})</span>
            </dt>
            <dd className="text-lg font-semibold tabular-nums">{tilt}°</dd>
          </div>
          <div className="sm:col-span-2">
            <dt className="text-slate-400">{t.armsTitle}</dt>
            <dd className="font-semibold">{armsText}</dd>
            {type === "back" && scene.chinRest && (
              <dd className="mt-1 text-slate-300">{fmt(t.chinRest, { hugger: scene.hugger.name, other: scene.other.name })}</dd>
            )}
          </div>
          <p className="text-xs text-slate-400 sm:col-span-2">{t.note}</p>
        </dl>
      </div>
    </div>
  );
}

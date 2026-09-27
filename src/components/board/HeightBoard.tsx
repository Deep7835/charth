"use client";

import dynamic from "next/dynamic";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { LibraryItem } from "@/data/library";
import { libraryName } from "@/data/libraryNames";
import type { Messages } from "@/i18n/messages/en";
import { fmt } from "@/lib/fmt";
import { formatHeight, type Unit } from "@/lib/units";
import { BoardCanvas } from "./BoardCanvas";
import { downloadSvgAsPng } from "./exportPng";
import { HeightInput } from "./HeightInput";
import { LibraryPicker } from "./LibraryPicker";
import { decodeSubjects, encodeSubjects } from "./share";
import type { BasicObjectKind, Build, ObjectKind } from "./figures";
import { palette, type Subject, type SubjectKind } from "./types";
import { useElementSize } from "./useElementSize";

// Three.js only loads when someone switches to 3D.
const Board3D = dynamic(() => import("./Board3D"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full items-center justify-center" role="progressbar" aria-busy="true">
      <span className="h-9 w-9 animate-spin rounded-full border-[3px] border-slate-200 border-t-blue-600" />
    </div>
  ),
});

export type BoardUi = {
  confirmResetTitle: string;
  confirmResetBody: string;
  confirmReset: string;
  cancel: string;
  invalidHeight: string;
  copyFailed: string;
};

type Props = {
  locale: string;
  ui: BoardUi;
  /** Start in the 3D view (used by the 3D landing page). */
  initialMode?: "2d" | "3d";
  t: Messages["board"];
  defaultUnit: Unit;
  brand: string;
  /** Starting chart when there is no share link, e.g. on a “X vs Y” page. */
  initialSubjects?: Omit<Subject, "id">[];
};

let idCounter = 0;
const newId = () => `s${Date.now().toString(36)}${(idCounter++).toString(36)}`;

function defaultSubjects(t: Messages["board"]): Subject[] {
  return [
    { id: "d1", name: t.defaultMan, heightCm: 178, kind: "male", color: palette[0] },
    { id: "d2", name: t.defaultWoman, heightCm: 165, kind: "female", color: palette[1] },
  ];
}

const btn =
  "inline-flex items-center justify-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50 active:scale-[0.98]";

export function HeightBoard({ locale, ui, t, defaultUnit, brand, initialSubjects, initialMode = "2d" }: Props) {
  const initial = useMemo(
    () => (initialSubjects?.length ? initialSubjects.map((s) => ({ ...s, id: newId() })) : defaultSubjects(t)),
    [initialSubjects, t],
  );
  const [subjects, setSubjects] = useState<Subject[]>(initial);
  const [unit, setUnit] = useState<Unit>(defaultUnit);
  const [selectedId, setSelectedId] = useState<string | null>(initial[0]?.id ?? null);
  const [panel, setPanel] = useState<"subjects" | "library">("subjects");
  const [view, setView] = useState<"fit" | "focus">("fit");
  const [mode, setMode] = useState<"2d" | "3d">(initialMode);
  const canvas3d = useRef<HTMLCanvasElement | null>(null);
  const resetDialog = useRef<HTMLDialogElement>(null);
  // Bumped after a drag so the editor's height field re-reads the new value.
  const [resizeNonce, setResizeNonce] = useState(0);
  const [toast, setToast] = useState<string | null>(null);
  const [hydrated, setHydrated] = useState(false);
  const [canvasBox, size] = useElementSize<HTMLDivElement>();
  const svgRef = useRef<SVGSVGElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  // Restore a shared chart and unit from the URL once on load.
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const shared = params.get("c");
    const decoded = shared ? decodeSubjects(shared) : null;
    const sharedUnit = params.get("u");
    /* eslint-disable react-hooks/set-state-in-effect -- one-time sync from the URL */
    if (decoded?.length) {
      setSubjects(decoded);
      setSelectedId(decoded[0].id);
    }
    if (sharedUnit === "cm" || sharedUnit === "ft") setUnit(sharedUnit);
    setHydrated(true);
    /* eslint-enable react-hooks/set-state-in-effect */
  }, []);

  const shareUrl = useCallback(() => {
    const url = new URL(window.location.href);
    url.search = "";
    url.searchParams.set("c", encodeSubjects(subjects));
    url.searchParams.set("u", unit);
    return url.toString();
  }, [subjects, unit]);

  /** Share links carry UTM tags so analytics can attribute visits from shared charts. */
  const trackedShareUrl = (medium: "native" | "copy") => {
    const url = new URL(shareUrl());
    url.searchParams.set("utm_source", "share");
    url.searchParams.set("utm_medium", medium);
    url.searchParams.set("utm_campaign", "chart");
    return url.toString();
  };

  // Keep the address bar in sync so a refresh keeps the chart; untouched defaults keep a clean URL.
  const pristine = useRef(encodeSubjects(initial));
  useEffect(() => {
    if (!hydrated) return;
    if (!window.location.search && encodeSubjects(subjects) === pristine.current) return;
    const handle = setTimeout(() => window.history.replaceState(null, "", shareUrl()), 400);
    return () => clearTimeout(handle);
  }, [hydrated, shareUrl, subjects]);

  useEffect(() => {
    if (!toast) return;
    const handle = setTimeout(() => setToast(null), 1800);
    return () => clearTimeout(handle);
  }, [toast]);

  const nextColor = (list: Subject[]) => palette[list.length % palette.length];

  const add = (subject: Omit<Subject, "id" | "color"> & { color?: string }) => {
    const id = newId();
    setSubjects((list) => [...list, { color: nextColor(list), ...subject, id }]);
    setSelectedId(id);
  };

  const update = (id: string, patch: Partial<Subject>) =>
    setSubjects((list) => list.map((s) => (s.id === id ? { ...s, ...patch } : s)));

  const remove = (id: string) => {
    setSubjects((list) => list.filter((s) => s.id !== id));
    setSelectedId((current) => (current === id ? null : current));
  };

  const move = (id: string, delta: number) =>
    setSubjects((list) => {
      const i = list.findIndex((s) => s.id === id);
      const j = i + delta;
      if (i < 0 || j < 0 || j >= list.length) return list;
      const next = [...list];
      [next[i], next[j]] = [next[j], next[i]];
      return next;
    });

  const addFromLibrary = (item: LibraryItem) => {
    add({
      name: libraryName(item.id, item.name, locale),
      heightCm: item.heightCm,
      kind: item.kind,
      build: item.build,
      adult: item.adult,
      object: item.object,
      aspect: item.aspect,
      ...(item.color ? { color: item.color } : {}),
    });
    setPanel("subjects");
  };

  const onImage = (file: File) => {
    const reader = new FileReader();
    reader.onload = () => {
      const src = String(reader.result);
      const img = new Image();
      img.onload = () => {
        add({
          name: file.name.replace(/\.[^.]+$/, "").slice(0, 40) || t.defaultImage,
          heightCm: 170,
          kind: "image",
          image: src,
          aspect: img.naturalWidth / img.naturalHeight,
        });
        setToast(t.imageNote);
      };
      img.src = src;
    };
    reader.readAsDataURL(file);
  };

  const share = async () => {
    if (navigator.share && window.matchMedia("(pointer: coarse)").matches) {
      try {
        await navigator.share({ url: trackedShareUrl("native"), title: document.title });
      } catch {
        /* user dismissed the share sheet */
      }
      return;
    }
    try {
      await navigator.clipboard.writeText(trackedShareUrl("copy"));
      setToast(t.linkCopied);
    } catch {
      setToast(ui.copyFailed);
    }
  };

  const reset = () => {
    const d = defaultSubjects(t);
    setSubjects(d);
    setSelectedId(d[0].id);
    resetDialog.current?.close();
  };

  const download = () => {
    const names = subjects.map((s) => s.name).slice(0, 3).join("-vs-");
    const slug = names.toLowerCase().replace(/[^\p{L}\p{N}]+/gu, "-").replace(/^-|-$/g, "") || "height-comparison";
    if (mode === "3d") {
      canvas3d.current?.toBlob((blob) => {
        if (!blob) return;
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = `${slug}-3d.png`;
        link.click();
        setTimeout(() => URL.revokeObjectURL(link.href), 1000);
      }, "image/png");
      return;
    }
    if (svgRef.current) void downloadSvgAsPng(svgRef.current, `${slug}.png`, brand);
  };

  const selected = subjects.find((s) => s.id === selectedId) ?? null;

  const comparisons = useMemo(() => {
    if (subjects.length < 2) return [];
    const base = selected ?? subjects[0];
    return subjects
      .filter((s) => s.id !== base.id)
      .slice(0, 6)
      .map((other) => {
        const [tall, short] = base.heightCm >= other.heightCm ? [base, other] : [other, base];
        const diff = tall.heightCm - short.heightCm;
        if (diff < 0.05) return fmt(t.sameHeight, { a: tall.name, b: short.name });
        const ratio = tall.heightCm / short.heightCm;
        return fmt(t.tallerBy, {
          a: tall.name,
          b: short.name,
          diff: formatHeight(diff, unit),
          pct: ratio >= 3 ? `${ratio.toFixed(ratio >= 100 ? 0 : 1)}×` : `${((ratio - 1) * 100).toFixed(1)}%`,
        });
      });
  }, [subjects, selected, unit, t]);

  const quickAdd: { kind: SubjectKind; label: string; icon: string }[] = [
    { kind: "male", label: t.addMan, icon: "♂" },
    { kind: "female", label: t.addWoman, icon: "♀" },
    { kind: "object", label: t.addObject, icon: "▭" },
    { kind: "image", label: t.addImage, icon: "🖼" },
  ];

  const onQuickAdd = (kind: SubjectKind) => {
    if (kind === "image") return fileRef.current?.click();
    if (kind === "male") add({ name: t.defaultMan, heightCm: 175, kind });
    else if (kind === "female") add({ name: t.defaultWoman, heightCm: 162, kind });
    else add({ name: t.defaultObject, heightCm: 100, kind, object: "block", aspect: 0.5 });
    setPanel("subjects");
  };

  return (
    <div className="grid gap-3 lg:grid-cols-[300px_minmax(0,1fr)]">
      {/* Canvas column (first on mobile) */}
      <div className="order-1 flex min-w-0 flex-col gap-2 lg:order-2">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap gap-2">
          <div className="inline-flex rounded-lg border border-slate-200 bg-slate-100 p-0.5" role="group">
            {(["2d", "3d"] as const).map((m) => (
              <button
                key={m}
                type="button"
                onClick={() => setMode(m)}
                aria-pressed={mode === m}
                className={`rounded-md px-3 py-1 text-sm font-bold uppercase transition ${
                  mode === m ? "bg-slate-900 text-white shadow-sm" : "text-slate-500 hover:text-slate-700"
                }`}
              >
                {m}
              </button>
            ))}
          </div>
          <div className="inline-flex rounded-lg border border-slate-200 bg-slate-100 p-0.5" role="group">
            {(["cm", "ft"] as const).map((u) => (
              <button
                key={u}
                type="button"
                onClick={() => setUnit(u)}
                aria-pressed={unit === u}
                className={`rounded-md px-3 py-1 text-sm font-semibold transition ${
                  unit === u ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-700"
                }`}
              >
                {u === "cm" ? t.unitMetric : t.unitImperial}
              </button>
            ))}
          </div>
          <div className={`${mode === "3d" ? "hidden" : "inline-flex"} rounded-lg border border-slate-200 bg-slate-100 p-0.5`} role="group">
            {(["fit", "focus"] as const).map((v) => (
              <button
                key={v}
                type="button"
                onClick={() => setView(v)}
                aria-pressed={view === v}
                disabled={v === "focus" && !selectedId}
                className={`rounded-md px-3 py-1 text-sm font-semibold transition disabled:opacity-40 ${
                  view === v ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-700"
                }`}
              >
                {v === "fit" ? t.fitAll : t.focus}
              </button>
            ))}
          </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <button type="button" className={btn} onClick={share}>
              ⤴ {t.share}
            </button>
            <button type="button" className={btn} onClick={download}>
              ⤓ {t.download}
            </button>
            <button type="button" className={btn} onClick={() => resetDialog.current?.showModal()}>
              ↺ {t.reset}
            </button>
            <dialog
              ref={resetDialog}
              aria-labelledby="reset-title"
              className="m-auto w-[min(92vw,420px)] rounded-2xl border border-slate-200 bg-white p-5 text-slate-900 shadow-2xl backdrop:bg-slate-900/40"
            >
              <h2 id="reset-title" className="text-lg font-bold">
                {ui.confirmResetTitle}
              </h2>
              <p className="mt-2 text-sm text-slate-600">{ui.confirmResetBody}</p>
              <div className="mt-5 flex justify-end gap-2">
                <button type="button" className={btn} onClick={() => resetDialog.current?.close()} autoFocus>
                  {ui.cancel}
                </button>
                <button type="button" className="rounded-lg bg-red-600 px-3 py-1.5 text-sm font-semibold text-white hover:bg-red-700" onClick={reset}>
                  {ui.confirmReset}
                </button>
              </div>
            </dialog>
          </div>
        </div>

        <div
          ref={canvasBox}
          className="relative h-[420px] overflow-x-auto overflow-y-hidden overscroll-x-contain rounded-2xl border border-slate-200 bg-white shadow-sm sm:h-[500px] lg:h-[560px]"
          // Scroll shadows: edge shading appears only when there is more board to scroll to.
          style={{
            background:
              "linear-gradient(to right, #fff 40%, rgba(255,255,255,0)) left / 40px 100% no-repeat local, linear-gradient(to left, #fff 40%, rgba(255,255,255,0)) right / 40px 100% no-repeat local, radial-gradient(farthest-side at 0 50%, rgba(15,23,42,.14), transparent) left / 14px 100% no-repeat scroll, radial-gradient(farthest-side at 100% 50%, rgba(15,23,42,.14), transparent) right / 14px 100% no-repeat scroll, #fff",
          }}
        >
          {mode === "3d" ? (
            subjects.length ? (
              <div className="absolute inset-0">
                <Board3D
                  subjects={subjects}
                  unit={unit}
                  selectedId={selectedId}
                  onSelect={(id) => {
                    setSelectedId(id);
                    setPanel("subjects");
                  }}
                  onCanvas={(c) => (canvas3d.current = c)}
                />
                <p className="pointer-events-none absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-white/80 px-3 py-1 text-xs text-slate-500">
                  {t.orbitHint}
                </p>
              </div>
            ) : (
              <p className="p-6 text-center text-sm text-slate-500">{t.empty}</p>
            )
          ) : (
          <BoardCanvas
              ref={svgRef}
              subjects={subjects}
              unit={unit}
              selectedId={selectedId}
              onSelect={(id) => {
                setSelectedId(id);
                setPanel("subjects");
              }}
              width={size.width}
              height={size.height}
              emptyText={t.empty}
              title={t.title}
              view={view}
              onResize={(id, heightCm) => update(id, { heightCm })}
              onResizeEnd={() => setResizeNonce((n) => n + 1)}
              resizeLabel={t.resize}
            />
          )}
          {toast && (
            <div
              role="status"
              className="absolute bottom-3 left-1/2 max-w-[90%] -translate-x-1/2 rounded-full bg-slate-900 px-4 py-1.5 text-center text-xs font-medium text-white shadow-lg"
            >
              {toast}
            </div>
          )}
        </div>

        {comparisons.length > 0 && (
          <ul className="flex flex-col gap-1 rounded-xl bg-slate-50 px-4 py-3 text-sm text-slate-700">
            {comparisons.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        )}
      </div>

      {/* Controls column */}
      <aside className="order-2 flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm lg:order-1">
        <div className="grid grid-cols-4 gap-1.5">
          {quickAdd.map((q) => (
            <button
              key={q.kind}
              type="button"
              onClick={() => onQuickAdd(q.kind)}
              className="flex flex-col items-center gap-0.5 rounded-xl border border-slate-200 bg-slate-50 px-1 py-2 text-xs font-semibold text-slate-700 transition hover:border-blue-300 hover:bg-blue-50"
            >
              <span aria-hidden className="text-lg leading-none">
                {q.icon}
              </span>
              {q.label}
            </button>
          ))}
          <input
            ref={fileRef}
            type="file"
            accept="image/png,image/webp,image/jpeg,image/svg+xml"
            className="hidden"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) onImage(file);
              e.target.value = "";
            }}
          />
        </div>

        <div className="grid grid-cols-2 rounded-lg bg-slate-100 p-0.5 text-sm font-semibold">
          {(["subjects", "library"] as const).map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => setPanel(p)}
              className={`rounded-md py-1.5 transition ${panel === p ? "bg-white shadow-sm" : "text-slate-500"}`}
            >
              {p === "subjects" ? `${t.subjects} (${subjects.length})` : t.library}
            </button>
          ))}
        </div>

        {panel === "library" ? (
          <LibraryPicker locale={locale} unit={unit} t={t} onPick={addFromLibrary} />
        ) : (
          <ul className="flex max-h-[430px] flex-col gap-1.5 overflow-y-auto">
            {subjects.length === 0 && <li className="p-2 text-sm text-slate-500">{t.empty}</li>}
            {subjects.map((s, index) => {
              const open = s.id === selectedId;
              return (
                <li key={s.id} className={`rounded-xl border ${open ? "border-blue-200 bg-blue-50/40" : "border-slate-100"}`}>
                  <button
                    type="button"
                    onClick={() => setSelectedId(open ? null : s.id)}
                    className="flex w-full items-center gap-2 px-2.5 py-2 text-start"
                    aria-expanded={open}
                  >
                    <span className="h-3 w-3 shrink-0 rounded-full" style={{ background: s.color }} />
                    <span className="min-w-0 flex-1 truncate text-sm font-medium text-slate-800">{s.name}</span>
                    <bdi dir="ltr" className="text-xs tabular-nums text-slate-500">
                      {formatHeight(s.heightCm, unit)}
                    </bdi>
                  </button>
                  {open && (
                    <SubjectEditor
                      subject={s}
                      unit={unit}
                      t={t}
                      canMoveLeft={index > 0}
                      canMoveRight={index < subjects.length - 1}
                      onChange={(patch) => update(s.id, patch)}
                      onRemove={() => remove(s.id)}
                      onDuplicate={() => add({ ...s, name: `${s.name} 2` })}
                      onMove={(d) => move(s.id, d)}
                      resizeNonce={resizeNonce}
                      invalidHeight={ui.invalidHeight}
                    />
                  )}
                </li>
              );
            })}
          </ul>
        )}
      </aside>
    </div>
  );
}

type EditorProps = {
  subject: Subject;
  unit: Unit;
  t: Messages["board"];
  canMoveLeft: boolean;
  canMoveRight: boolean;
  onChange: (patch: Partial<Subject>) => void;
  onRemove: () => void;
  onDuplicate: () => void;
  onMove: (delta: number) => void;
  resizeNonce: number;
  invalidHeight: string;
};

const label = "text-[11px] font-semibold uppercase tracking-wide text-slate-500";
const field =
  "w-full rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100";
const smallBtn =
  "rounded-md border border-slate-200 bg-white px-2 py-1 text-xs font-medium text-slate-600 hover:bg-slate-50 disabled:opacity-40";

function SubjectEditor({ subject: s, unit, t, canMoveLeft, canMoveRight, onChange, onRemove, onDuplicate, onMove, resizeNonce, invalidHeight }: EditorProps) {
  const human = s.kind === "male" || s.kind === "female";
  return (
    <div className="flex flex-col gap-2.5 border-t border-slate-100 px-2.5 pb-3 pt-2.5">
      <label className="flex flex-col gap-1">
        <span className={label}>{t.name}</span>
        <input className={field} value={s.name} maxLength={60} onChange={(e) => onChange({ name: e.target.value })} />
      </label>
      <div className="flex flex-col gap-1">
        <span className={label}>{t.height}</span>
        <HeightInput
          key={`${s.id}-${unit}-${resizeNonce}`}
          valueCm={s.heightCm}
          unit={unit}
          onChange={(heightCm) => onChange({ heightCm })}
          labels={{ feet: t.feet, inches: t.inches, unitMetric: t.unitMetric }}
          errorText={invalidHeight}
        />
      </div>

      {s.kind !== "image" && (
        <div className="flex flex-col gap-1">
          <span className={label}>{t.type}</span>
          <div className="grid grid-cols-3 gap-1">
            {(["male", "female", "object"] as const).map((k) => (
              <button
                key={k}
                type="button"
                onClick={() => onChange({ kind: k, object: k === "object" ? (s.object ?? "block") : s.object })}
                className={`rounded-md px-2 py-1 text-xs font-semibold ${
                  s.kind === k ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {t.kinds[k]}
              </button>
            ))}
          </div>
        </div>
      )}

      {human && (
        <>
          <div className="flex flex-col gap-1">
            <span className={label}>{t.build}</span>
            <div className="grid grid-cols-3 gap-1">
              {(["slim", "average", "broad"] as Build[]).map((b) => (
                <button
                  key={b}
                  type="button"
                  onClick={() => onChange({ build: b })}
                  className={`rounded-md px-2 py-1 text-xs font-semibold ${
                    (s.build ?? "average") === b ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {t.builds[b]}
                </button>
              ))}
            </div>
          </div>
          <label className="flex items-center gap-2 text-sm text-slate-700">
            <input type="checkbox" checked={!!s.adult} onChange={(e) => onChange({ adult: e.target.checked || undefined })} />
            {t.adultProportions}
          </label>
        </>
      )}

      {s.kind === "object" && (
        <label className="flex flex-col gap-1">
          <span className={label}>{t.shape}</span>
          <select className={field} value={s.object ?? "block"} onChange={(e) => onChange({ object: e.target.value as ObjectKind })}>
            {s.object && !(s.object in t.shapes) && <option value={s.object}>{s.name}</option>}
            {(Object.keys(t.shapes) as BasicObjectKind[]).map((k) => (
              <option key={k} value={k}>
                {t.shapes[k]}
              </option>
            ))}
          </select>
        </label>
      )}

      <div className="flex flex-col gap-1">
        <span className={label}>{t.color}</span>
        <div className="flex flex-wrap gap-1.5">
          {palette.map((c) => (
            <button
              key={c}
              type="button"
              aria-label={c}
              onClick={() => onChange({ color: c })}
              className={`h-6 w-6 rounded-full ring-offset-2 transition ${s.color === c ? "ring-2 ring-slate-900" : ""}`}
              style={{ background: c }}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-wrap gap-1.5 pt-1">
        <button type="button" className={smallBtn} disabled={!canMoveLeft} onClick={() => onMove(-1)}>
          ← {t.moveLeft}
        </button>
        <button type="button" className={smallBtn} disabled={!canMoveRight} onClick={() => onMove(1)}>
          {t.moveRight} →
        </button>
        <button type="button" className={smallBtn} onClick={onDuplicate}>
          {t.duplicate}
        </button>
        <button type="button" className={`${smallBtn} text-red-600`} onClick={onRemove}>
          {t.remove}
        </button>
      </div>
    </div>
  );
}

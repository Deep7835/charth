"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { HeightInput } from "@/components/board/HeightInput";
import { MiniBoard } from "@/components/board/MiniBoard";
import { palette, type Subject } from "@/components/board/types";
import type { ToolsMessages } from "@/i18n/tools";
import { boardLink } from "@/lib/boardLink";
import { fmt } from "@/lib/fmt";
import { formatImperial, formatMetric, type Unit } from "@/lib/units";

type Person = { name: string; heightCm: number; kind: "male" | "female" };

type Reach = keyof ToolsMessages["difference"]["reach"];

/** Where a head of relative height `ratio` lands on a taller adult (7.5-head canon). */
export function reachLandmark(ratio: number): Reach {
  if (ratio >= 0.93) return "eyes";
  if (ratio >= 0.895) return "nose";
  if (ratio >= 0.855) return "chin";
  if (ratio >= 0.79) return "shoulders";
  if (ratio >= 0.69) return "chest";
  if (ratio >= 0.56) return "waist";
  return "below";
}

function gapCategory(diffCm: number): keyof ToolsMessages["difference"]["categories"] {
  if (diffCm < 3) return "tiny";
  if (diffCm < 8) return "small";
  if (diffCm < 15) return "medium";
  if (diffCm < 25) return "large";
  return "huge";
}

const field =
  "w-full rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-sm font-normal normal-case tracking-normal text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100";

type Props = {
  t: ToolsMessages["difference"];
  common: ToolsMessages["common"];
  locale: string;
  defaultUnit: Unit;
};

export function DifferenceCalculator({ t, common, locale, defaultUnit }: Props) {
  const [unit, setUnit] = useState<Unit>(defaultUnit);
  const [people, setPeople] = useState<[Person, Person]>([
    { name: t.personA, heightCm: 180, kind: "male" },
    { name: t.personB, heightCm: 165, kind: "female" },
  ]);

  const set = (i: 0 | 1, patch: Partial<Person>) =>
    setPeople((p) => {
      const next: [Person, Person] = [p[0], p[1]];
      next[i] = { ...next[i], ...patch };
      return next;
    });

  const [tall, short] = people[0].heightCm >= people[1].heightCm ? people : [people[1], people[0]];
  const diff = tall.heightCm - short.heightCm;
  const ratio = short.heightCm / tall.heightCm;
  const pct = `${((tall.heightCm / short.heightCm - 1) * 100).toFixed(1)}%`;

  const subjects: Subject[] = useMemo(
    () => people.map((p, i) => ({ id: String(i), name: p.name, heightCm: p.heightCm, kind: p.kind, color: palette[i] })),
    [people],
  );

  return (
    <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
      <div className="flex flex-col gap-4 rounded-3xl border border-slate-200 bg-slate-50 p-4 sm:p-5">
        <div className="inline-flex self-start rounded-lg border border-slate-200 bg-slate-100 p-0.5">
          {(["cm", "ft"] as const).map((u) => (
            <button
              key={u}
              type="button"
              aria-pressed={unit === u}
              onClick={() => setUnit(u)}
              className={`rounded-md px-3 py-1 text-sm font-semibold ${unit === u ? "bg-white shadow-sm" : "text-slate-500"}`}
            >
              {u === "cm" ? "cm" : "ft/in"}
            </button>
          ))}
        </div>
        {([0, 1] as const).map((i) => (
          <fieldset key={i} className="rounded-2xl border border-slate-200 bg-white p-4">
            <legend className="px-1 text-sm font-bold" style={{ color: palette[i] }}>
              {i === 0 ? t.personA : t.personB}
            </legend>
            <div className="grid gap-3 sm:grid-cols-2">
              <label className="flex flex-col gap-1 text-xs font-semibold uppercase tracking-wide text-slate-500">
                {t.name}
                <input className={field} value={people[i].name} maxLength={40} onChange={(e) => set(i, { name: e.target.value })} />
              </label>
              <div className="flex flex-col gap-1">
                <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">{common.height}</span>
                <HeightInput
                  key={unit}
                  valueCm={people[i].heightCm}
                  unit={unit}
                  onChange={(heightCm) => set(i, { heightCm })}
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
                  className={`rounded-md px-2 py-1 text-xs font-semibold ${
                    people[i].kind === k ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-600"
                  }`}
                >
                  {k === "male" ? common.man : common.woman}
                </button>
              ))}
            </div>
          </fieldset>
        ))}
      </div>

      <div className="flex flex-col gap-4">
        <div className="rounded-3xl bg-slate-900 p-5 text-white" aria-live="polite">
          <p className="text-sm text-slate-300">{t.difference}</p>
          <p className="mt-1 text-4xl font-extrabold tabular-nums" dir="ltr">
            {unit === "cm" ? formatMetric(diff) : formatImperial(diff)}
            <span className="ms-2 text-lg font-semibold text-slate-400">
              {unit === "cm" ? formatImperial(diff) : formatMetric(diff)}
            </span>
          </p>
          <p className="mt-2 text-slate-200">
            {diff < 0.05 ? t.sameHeight : fmt(t.percentTaller, { a: tall.name, b: short.name, pct })}
          </p>
          <dl className="mt-4 grid gap-3 border-t border-white/10 pt-4 text-sm sm:grid-cols-2">
            <div>
              <dt className="text-slate-400">{fmt(t.reachTitle, { a: tall.name, b: short.name })}</dt>
              <dd className="mt-0.5 font-semibold">{t.reach[reachLandmark(ratio)]}</dd>
            </div>
            <div>
              <dt className="text-slate-400">{t.categoryTitle}</dt>
              <dd className="mt-0.5 font-semibold">{t.categories[gapCategory(diff)]}</dd>
            </div>
          </dl>
          <p className="mt-3 text-xs text-slate-400">{t.reachNote}</p>
        </div>
        <MiniBoard subjects={subjects} unit={unit} title={t.difference} />
        <Link
          href={boardLink(locale, subjects, unit)}
          className="self-start rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-blue-700 hover:bg-blue-50"
        >
          {common.openInBoard} →
        </Link>
      </div>
    </div>
  );
}

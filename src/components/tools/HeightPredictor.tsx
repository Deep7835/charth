"use client";

import { useState } from "react";
import { HeightInput } from "@/components/board/HeightInput";
import { MiniBoard } from "@/components/board/MiniBoard";
import { palette, type Subject } from "@/components/board/types";
import type { MoreMessages } from "@/i18n/more";
import { fmt } from "@/lib/fmt";
import { meanAtAge, midParental, projectFromCurrent, type Sex } from "@/lib/growth";
import { formatHeight, type Unit } from "@/lib/units";

export type CountryOption = { code: string; name: string };

type Props = {
  t: MoreMessages["predictor"];
  c: MoreMessages["common"];
  labels: { country: string; unitMetric: string; man: string; woman: string };
  countries: CountryOption[];
  defaultCountry: string;
  defaultUnit: Unit;
};

const field =
  "w-full rounded-lg border border-slate-200 bg-white px-2.5 py-2 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100";
const lbl = "text-xs font-semibold uppercase tracking-wide text-slate-500";
const seg = (on: boolean) => `rounded-md px-3 py-1 text-sm font-semibold ${on ? "bg-white shadow-sm" : "text-slate-500"}`;

export function HeightPredictor({ t, c, labels, countries, defaultCountry, defaultUnit }: Props) {
  const [unit, setUnit] = useState<Unit>(defaultUnit);
  const [sex, setSex] = useState<Sex>("male");
  const [father, setFather] = useState(178);
  const [mother, setMother] = useState(164);
  const [age, setAge] = useState(10);
  const [child, setChild] = useState<number | null>(null);
  const [country, setCountry] = useState(defaultCountry);

  const parents = midParental(father, mother, sex);
  const current = child ? projectFromCurrent(country, sex, age, child) : null;
  const both = current ? (parents.target + current) / 2 : parents.target;

  const subjects: Subject[] = [
    { id: "f", name: labels.man, heightCm: father, kind: "male", color: palette[5] },
    { id: "m", name: labels.woman, heightCm: mother, kind: "female", color: palette[1] },
    ...(child ? [{ id: "c", name: c.years.replace("{n}", String(age)), heightCm: child, kind: sex, color: palette[3] } satisfies Subject] : []),
    { id: "p", name: `≈ ${formatHeight(both, unit)}`, heightCm: both, kind: sex, color: palette[2], adult: true },
  ];

  const heightLabels = { feet: "ft", inches: "in", unitMetric: labels.unitMetric };

  return (
    <div className="grid gap-4 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
      <div className="flex flex-col gap-4 rounded-3xl border border-slate-200 bg-slate-50 p-4 sm:p-5">
        <div className="flex flex-wrap gap-2">
          <div className="inline-flex rounded-lg border border-slate-200 bg-slate-100 p-0.5">
            {(["male", "female"] as const).map((s) => (
              <button key={s} type="button" aria-pressed={sex === s} className={seg(sex === s)} onClick={() => setSex(s)}>
                {s === "male" ? c.boy : c.girl}
              </button>
            ))}
          </div>
          <div className="inline-flex rounded-lg border border-slate-200 bg-slate-100 p-0.5">
            {(["cm", "ft"] as const).map((u) => (
              <button key={u} type="button" aria-pressed={unit === u} className={seg(unit === u)} onClick={() => setUnit(u)}>
                {u === "cm" ? "cm" : "ft/in"}
              </button>
            ))}
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="flex flex-col gap-1">
            <span className={lbl}>{c.father}</span>
            <HeightInput key={`f-${unit}`} valueCm={father} unit={unit} onChange={setFather} labels={heightLabels} />
          </div>
          <div className="flex flex-col gap-1">
            <span className={lbl}>{c.mother}</span>
            <HeightInput key={`m-${unit}`} valueCm={mother} unit={unit} onChange={setMother} labels={heightLabels} />
          </div>
        </div>
        <hr className="border-slate-200" />
        <div className="grid gap-3 sm:grid-cols-2">
          <label className="flex flex-col gap-1">
            <span className={lbl}>{c.age}</span>
            <select className={field} value={age} onChange={(e) => setAge(Number(e.target.value))}>
              {Array.from({ length: 13 }, (_, i) => i + 5).map((a) => (
                <option key={a} value={a}>
                  {c.years.replace("{n}", String(a))}
                </option>
              ))}
            </select>
          </label>
          <label className="flex flex-col gap-1">
            <span className={lbl}>{labels.country}</span>
            <select className={field} value={country} onChange={(e) => setCountry(e.target.value)}>
              {countries.map((o) => (
                <option key={o.code} value={o.code}>
                  {o.name}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div className="flex flex-col gap-1">
          <span className={lbl}>
            {c.childHeight} <span className="normal-case text-slate-400">({c.optional})</span>
          </span>
          {child === null ? (
            <button
              type="button"
              onClick={() => setChild(Math.round(meanAtAge(country, sex, age) ?? 140))}
              className="self-start rounded-lg border border-dashed border-slate-300 px-3 py-2 text-sm font-medium text-blue-700 hover:bg-blue-50"
            >
              + {c.childHeight}
            </button>
          ) : (
            <HeightInput key={`c-${unit}`} valueCm={child} unit={unit} onChange={setChild} labels={heightLabels} />
          )}
        </div>
        <p className="text-xs leading-relaxed text-slate-500">{c.estimateNote}</p>
      </div>

      <div className="flex flex-col gap-4">
        <dl className="grid gap-4 rounded-3xl bg-slate-900 p-5 text-white sm:grid-cols-2" aria-live="polite">
          <div>
            <dt className="text-sm text-slate-300">{t.parentsResult}</dt>
            <dd className="mt-1 text-3xl font-extrabold tabular-nums">
              <bdi dir="ltr">{formatHeight(parents.target, unit)}</bdi>
            </dd>
            <dd className="mt-1 text-sm text-slate-300">
              {fmt(t.range, { low: formatHeight(parents.low, unit), high: formatHeight(parents.high, unit) })}
            </dd>
          </div>
          <div>
            <dt className="text-sm text-slate-300">{t.currentResult}</dt>
            {current ? (
              <dd className="mt-1 text-3xl font-extrabold tabular-nums">
                <bdi dir="ltr">{formatHeight(current, unit)}</bdi>
              </dd>
            ) : (
              <dd className="mt-1 text-sm text-slate-300">{t.currentUnavailable}</dd>
            )}
          </div>
        </dl>
        <MiniBoard subjects={subjects} unit={unit} title={t.h1} className="h-80" />
      </div>
    </div>
  );
}

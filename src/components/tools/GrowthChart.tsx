"use client";

import { useState } from "react";
import { HeightInput } from "@/components/board/HeightInput";
import { CHILD_AGES } from "@/data/heightByAge";
import type { MoreMessages } from "@/i18n/more";
import { fmt } from "@/lib/fmt";
import { meanAtAge, type Sex } from "@/lib/growth";
import { formatHeight, formatImperial, type Unit } from "@/lib/units";
import type { CountryOption } from "./HeightPredictor";

type Props = {
  t: MoreMessages["growth"];
  c: MoreMessages["common"];
  labels: { country: string; unitMetric: string };
  countries: CountryOption[];
  defaultCountry: string;
  defaultUnit: Unit;
};

const BOYS = "#1d4ed8";
const GIRLS = "#be185d";
const W = 640;
const H = 340;
const M = { top: 16, right: 16, bottom: 32, left: 48 };

const field =
  "w-full rounded-lg border border-slate-200 bg-white px-2.5 py-2 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100";
const lbl = "text-xs font-semibold uppercase tracking-wide text-slate-500";
const seg = (on: boolean) => `rounded-md px-3 py-1 text-sm font-semibold ${on ? "bg-white shadow-sm" : "text-slate-500"}`;

export function GrowthChart({ t, c, labels, countries, defaultCountry, defaultUnit }: Props) {
  const [country, setCountry] = useState(defaultCountry);
  const [unit, setUnit] = useState<Unit>(defaultUnit);
  const [sex, setSex] = useState<Sex>("male");
  const [age, setAge] = useState(10);
  const [child, setChild] = useState<number | null>(null);

  const ages = [...CHILD_AGES];
  const boys = ages.map((a) => meanAtAge(country, "male", a) ?? 0);
  const girls = ages.map((a) => meanAtAge(country, "female", a) ?? 0);
  // Gridlines on round numbers of the chosen unit: 10/20 cm, or 6 in / 1 ft.
  const rawLo = Math.min(...girls, ...boys, child ?? Infinity) - 5;
  const rawHi = Math.max(...boys, ...girls, child ?? 0) + 5;
  const gridStep = unit === "cm" ? (rawHi - rawLo > 120 ? 20 : 10) : (rawHi - rawLo > 120 ? 30.48 : 15.24);
  const lo = Math.floor(rawLo / gridStep) * gridStep;
  const hi = Math.ceil(rawHi / gridStep) * gridStep;
  const x = (a: number) => M.left + ((a - ages[0]) / (ages[ages.length - 1] - ages[0])) * (W - M.left - M.right);
  const y = (cm: number) => M.top + (1 - (cm - lo) / (hi - lo)) * (H - M.top - M.bottom);
  const path = (vals: number[]) => vals.map((v, i) => `${i ? "L" : "M"}${x(ages[i]).toFixed(1)},${y(v).toFixed(1)}`).join("");
  const grid = Array.from({ length: Math.round((hi - lo) / gridStep) + 1 }, (_, i) => lo + i * gridStep);

  const avg = meanAtAge(country, sex, age);
  const diff = child && avg ? child - avg : null;
  const countryName = countries.find((o) => o.code === country)?.name ?? country;

  return (
    <div className="flex flex-col gap-4">
      <div className="grid gap-4 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
        <div className="flex flex-col gap-4 rounded-3xl border border-slate-200 bg-slate-50 p-4 sm:p-5">
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
          <label className="flex flex-col gap-1">
            <span className={lbl}>{c.age}</span>
            <select className={field} value={age} onChange={(e) => setAge(Number(e.target.value))}>
              {ages.map((a) => (
                <option key={a} value={a}>
                  {c.years.replace("{n}", String(a))}
                </option>
              ))}
            </select>
          </label>
          <div className="flex flex-col gap-1">
            <span className={lbl}>
              {c.childHeight} <span className="normal-case text-slate-400">({c.optional})</span>
            </span>
            {child === null ? (
              <button
                type="button"
                onClick={() => setChild(Math.round(avg ?? 140))}
                className="self-start rounded-lg border border-dashed border-slate-300 px-3 py-2 text-sm font-medium text-blue-700 hover:bg-blue-50"
              >
                + {c.childHeight}
              </button>
            ) : (
              <HeightInput key={`c-${unit}`} valueCm={child} unit={unit} onChange={setChild} labels={{ feet: "ft", inches: "in", unitMetric: labels.unitMetric }} />
            )}
          </div>
          {diff !== null && (
            <p className="rounded-xl bg-white px-3 py-2 text-sm font-semibold text-slate-900" aria-live="polite">
              {Math.abs(diff) < 0.5
                ? fmt(t.atAverage, { age })
                : fmt(diff > 0 ? t.above : t.below, { diff: formatHeight(Math.abs(diff), unit), age })}
            </p>
          )}
          <p className="text-xs leading-relaxed text-slate-500">{c.estimateNote}</p>
        </div>

        <figure className="rounded-2xl border border-slate-200 bg-white p-2">
          <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full" direction="ltr" role="img" aria-label={fmt(t.tableTitle, { country: countryName })}>
            {grid.map((v) => (
              <g key={v}>
                <line x1={M.left} x2={W - M.right} y1={y(v)} y2={y(v)} stroke="#e2e8f0" />
                <text x={M.left - 6} y={y(v) + 4} textAnchor="end" fontSize={11} fill="#64748b">
                  {unit === "cm" ? v : formatImperial(v)}
                </text>
              </g>
            ))}
            {ages.map((a) => (
              <text key={a} x={x(a)} y={H - 10} textAnchor="middle" fontSize={11} fill="#64748b">
                {a}
              </text>
            ))}
            <path d={path(boys)} fill="none" stroke={BOYS} strokeWidth={2.5} />
            <path d={path(girls)} fill="none" stroke={GIRLS} strokeWidth={2.5} />
            {child && (
              <g>
                <circle cx={x(age)} cy={y(child)} r={6} fill={sex === "male" ? BOYS : GIRLS} stroke="#fff" strokeWidth={2} />
                <text x={x(age) + 9} y={y(child) - 8} fontSize={12} fontWeight={700} fill="#0f172a">
                  {t.childPoint}
                </text>
              </g>
            )}
          </svg>
          <figcaption className="flex justify-center gap-4 pb-1 text-xs font-semibold">
            <span style={{ color: BOYS }}>━ {t.chartBoys}</span>
            <span style={{ color: GIRLS }}>━ {t.chartGirls}</span>
          </figcaption>
        </figure>
      </div>

      <section>
        <h2 className="mb-3 text-xl font-bold tracking-tight">{fmt(t.tableTitle, { country: countryName })}</h2>
        <div className="overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 text-start text-xs uppercase tracking-wide text-slate-500">
              <tr>
                <th className="px-3 py-2 text-start font-semibold">{c.age}</th>
                <th className="px-3 py-2 text-start font-semibold">{t.chartBoys}</th>
                <th className="px-3 py-2 text-start font-semibold">{t.chartGirls}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {ages.map((a, i) => (
                <tr key={a} className={a === age ? "bg-blue-50/60" : ""}>
                  <td className="px-3 py-1.5 font-medium">{c.years.replace("{n}", String(a))}</td>
                  <td className="whitespace-nowrap px-3 py-1.5 tabular-nums">
                    <bdi dir="ltr">
                      {boys[i].toFixed(1)} cm · {formatImperial(boys[i])}
                    </bdi>
                  </td>
                  <td className="whitespace-nowrap px-3 py-1.5 tabular-nums">
                    <bdi dir="ltr">
                      {girls[i].toFixed(1)} cm · {formatImperial(girls[i])}
                    </bdi>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

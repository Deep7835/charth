"use client";

import { useState } from "react";
import { HeightInput } from "@/components/board/HeightInput";
import type { MoreMessages } from "@/i18n/more";
import { fmt } from "@/lib/fmt";
import { bmiCategory, formatWeight, healthyWeightKg, LB_PER_KG, type BmiCategory } from "@/lib/bmi";
import { formatHeight, type Unit } from "@/lib/units";

type Category = BmiCategory;

const colors: Record<Category, string> = {
  underweight: "#0ea5e9",
  normal: "#16a34a",
  overweight: "#f59e0b",
  obese: "#dc2626",
};

const input =
  "w-full rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-sm tabular-nums outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100";
const lbl = "text-xs font-semibold uppercase tracking-wide text-slate-500";
const seg = (on: boolean) => `rounded-md px-3 py-1 text-sm font-semibold ${on ? "bg-white shadow-sm" : "text-slate-500"}`;

type Props = { t: MoreMessages["bmi"]; heightLabel: string; defaultUnit: Unit; invalidText: string };

export function BmiCalculator({ t, heightLabel, defaultUnit, invalidText }: Props) {
  const [unit, setUnit] = useState<Unit>(defaultUnit);
  const [height, setHeight] = useState(175);
  const [kg, setKg] = useState(70);
  const [weightText, setWeightText] = useState(() => (defaultUnit === "cm" ? "70" : String(Math.round(70 * LB_PER_KG))));

  const bmi = kg / (height / 100) ** 2;
  const cat = bmiCategory(bmi);
  const range = healthyWeightKg(height);
  const weightValid = parseFloat(weightText) > 0;
  // Position on a 15–40 scale for the indicator bar.
  const pos = Math.min(100, Math.max(0, ((bmi - 15) / 25) * 100));

  return (
    <div className="grid gap-4 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
      <div className="flex flex-col gap-4 rounded-3xl border border-slate-200 bg-slate-50 p-4 sm:p-5">
        <div className="inline-flex self-start rounded-lg border border-slate-200 bg-slate-100 p-0.5">
          {(["cm", "ft"] as const).map((u) => (
            <button
              key={u}
              type="button"
              aria-pressed={unit === u}
              className={seg(unit === u)}
              onClick={() => {
                setUnit(u);
                setWeightText(u === "cm" ? kg.toFixed(1).replace(/\.0$/, "") : String(Math.round(kg * LB_PER_KG)));
              }}
            >
              {u === "cm" ? "kg · cm" : "lb · ft/in"}
            </button>
          ))}
        </div>
        <div className="flex flex-col gap-1">
          <span className={lbl}>{heightLabel}</span>
          <HeightInput key={unit} valueCm={height} unit={unit} onChange={setHeight} labels={{ feet: "ft", inches: "in", unitMetric: "cm" }} errorText={invalidText} />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="bmi-weight" className={lbl}>
            {t.weight}
          </label>
          <div className="flex items-center gap-1.5">
            <input
              id="bmi-weight"
              type="number"
              inputMode="decimal"
              min={1}
              step="any"
              value={weightText}
              aria-invalid={!weightValid}
              className={`${input} ${weightValid ? "" : "border-red-500"}`}
              onChange={(e) => {
                setWeightText(e.target.value);
                const n = parseFloat(e.target.value);
                if (n > 0) setKg(unit === "cm" ? n : n / LB_PER_KG);
              }}
            />
            <span className="text-xs text-slate-500">{unit === "cm" ? "kg" : "lb"}</span>
          </div>
          {!weightValid && (
            <p role="alert" className="text-xs font-medium text-red-600">
              {t.weight} &gt; 0
            </p>
          )}
        </div>
        <p className="text-xs leading-relaxed text-slate-500">{t.note}</p>
      </div>

      <div className="rounded-3xl bg-slate-900 p-5 text-white" aria-live="polite">
        <p className="text-sm text-slate-300">{t.yourBmi}</p>
        <p className="mt-1 text-5xl font-extrabold tabular-nums">
          <bdi dir="ltr">{bmi.toFixed(1)}</bdi>
        </p>
        <p className="mt-1 text-lg font-semibold" style={{ color: colors[cat] === "#16a34a" ? "#4ade80" : colors[cat] }}>
          {t.categories[cat]}
        </p>
        <div className="relative mt-5 h-3 rounded-full" dir="ltr" style={{ background: "linear-gradient(to right, #0ea5e9 0% 14%, #16a34a 14% 40%, #f59e0b 40% 60%, #dc2626 60% 100%)" }}>
          <span className="absolute -top-1 h-5 w-1.5 -translate-x-1/2 rounded-full bg-white shadow" style={{ left: `${pos}%` }} />
        </div>
        <div className="relative mt-1 h-4 text-[11px] tabular-nums text-slate-400" dir="ltr">
          {[15, 18.5, 25, 30, 40].map((v) => (
            <span key={v} className="absolute -translate-x-1/2" style={{ left: `${((v - 15) / 25) * 100}%` }}>
              {v}
            </span>
          ))}
        </div>
        <p className="mt-5 border-t border-white/10 pt-4 text-sm text-slate-200">
          {fmt(t.healthyRange, {
            height: formatHeight(height, unit),
            low: formatWeight(range.low, unit),
            high: formatWeight(range.high, unit),
          })}
        </p>
      </div>
    </div>
  );
}

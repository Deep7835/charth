"use client";

import { useEffect, useMemo, useState } from "react";
import { HeightInput } from "@/components/board/HeightInput";
import type { ToolsMessages } from "@/i18n/tools";
import { fmt } from "@/lib/fmt";
import { formatPercent, normalCdf } from "@/lib/stats";
import { formatHeight, type Unit } from "@/lib/units";

export type PercentileCountry = { code: string; name: string; male: number; female: number };

type Props = {
  t: ToolsMessages["percentile"];
  common: ToolsMessages["common"];
  locale: string;
  countries: PercentileCountry[];
  world: { male: number; female: number; name: string };
  sd: { male: number; female: number };
  defaultCountry: string;
  defaultUnit: Unit;
};

const SHOWCASE = ["US", "GB", "IN", "CN", "JP", "BR", "MX", "ID", "DE", "NL"];

export function PercentileCalculator({ t, common, locale, countries, world, sd, defaultCountry, defaultUnit }: Props) {
  const [unit, setUnit] = useState<Unit>(defaultUnit);
  const [sex, setSex] = useState<"male" | "female">("male");
  const [heightCm, setHeightCm] = useState(175);
  const [code, setCode] = useState(defaultCountry);

  // Prefer the visitor's own region (en-GB → GB) when the browser language matches the page language.
  useEffect(() => {
    const pageLang = locale.split("-")[0];
    const region = navigator.languages
      ?.filter((l) => l.split("-")[0].toLowerCase() === pageLang)
      .map((l) => l.split("-")[1]?.toUpperCase())
      .find((r) => r && countries.some((c) => c.code === r));
    // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time default from the browser
    if (region) setCode(region);
  }, [countries, locale]);

  const country = countries.find((c) => c.code === code) ?? countries[0];
  const s = sd[sex];
  const mean = country[sex];
  const z = (heightCm - mean) / s;
  const pct = normalCdf(z) * 100;
  const worldPct = normalCdf((heightCm - world[sex]) / s) * 100;
  const tallerShare = 1 - pct / 100;
  const oneIn = tallerShare > 0 ? Math.max(1, Math.round(1 / tallerShare)) : Infinity;
  const group = sex === "male" ? t.groupMen : t.groupWomen;

  const showcase = useMemo(() => {
    const codes = [code, ...SHOWCASE.filter((c) => c !== code)];
    return codes
      .map((c) => countries.find((x) => x.code === c))
      .filter((c): c is PercentileCountry => !!c)
      .slice(0, 10);
  }, [code, countries]);

  const signedZ = `${z >= 0 ? "+" : "−"}${Math.abs(z).toFixed(2)}`;

  return (
    <div className="grid gap-4 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
      <div className="flex flex-col gap-4 rounded-3xl border border-slate-200 bg-slate-50 p-4 sm:p-5">
        <div className="flex flex-wrap gap-2">
          <div className="inline-flex rounded-lg border border-slate-200 bg-slate-100 p-0.5">
            {(["male", "female"] as const).map((k) => (
              <button
                key={k}
                type="button"
                aria-pressed={sex === k}
                onClick={() => setSex(k)}
                className={`rounded-md px-3 py-1 text-sm font-semibold ${sex === k ? "bg-white shadow-sm" : "text-slate-500"}`}
              >
                {k === "male" ? common.man : common.woman}
              </button>
            ))}
          </div>
          <div className="inline-flex rounded-lg border border-slate-200 bg-slate-100 p-0.5">
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
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">{t.yourHeight}</span>
          <HeightInput key={unit} valueCm={heightCm} unit={unit} onChange={setHeightCm} labels={{ feet: "ft", inches: "in", unitMetric: "cm" }} />
        </div>
        <label className="flex flex-col gap-1">
          <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">{common.country}</span>
          <select
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full rounded-lg border border-slate-200 bg-white px-2.5 py-2 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          >
            {countries.map((c) => (
              <option key={c.code} value={c.code}>
                {c.name}
              </option>
            ))}
          </select>
        </label>
        <p className="text-xs leading-relaxed text-slate-500">{t.note}</p>
      </div>

      <div className="flex flex-col gap-4">
        <div className="rounded-3xl bg-slate-900 p-5 text-white" aria-live="polite">
          <p className="text-sm text-slate-300">{t.percentile}</p>
          <p className="mt-1 text-5xl font-extrabold tabular-nums">
            <bdi dir="ltr">{formatPercent(pct, locale)}</bdi>
          </p>
          <p className="mt-3 text-lg">{fmt(t.result, { pct: formatPercent(pct, locale), group, country: country.name })}</p>
          {Number.isFinite(oneIn) && oneIn > 1 && <p className="mt-1 text-slate-300">{fmt(t.oneIn, { n: oneIn.toLocaleString(locale) })}</p>}
          <p className="mt-1 text-sm text-slate-400">{fmt(t.zScore, { sd: signedZ, avg: formatHeight(mean, unit) })}</p>
          <div className="mt-4 h-2.5 overflow-hidden rounded-full bg-white/10">
            <div className="h-full rounded-full bg-blue-400 transition-all" style={{ width: `${Math.min(100, Math.max(0, pct))}%` }} />
          </div>
          <p className="mt-4 border-t border-white/10 pt-3 text-sm text-slate-300">
            {world.name}:{" "}
            <strong className="text-white">
              <bdi dir="ltr">{formatPercent(worldPct, locale)}</bdi>
            </strong>
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-slate-200">
          <h2 className="bg-slate-50 px-4 py-2.5 text-sm font-bold">{t.otherCountries}</h2>
          <table className="w-full text-sm">
            <thead>
              <tr className="text-start text-xs uppercase tracking-wide text-slate-500">
                <th className="px-4 py-2 font-semibold">{common.country}</th>
                <th className="px-4 py-2 font-semibold">{t.average}</th>
                <th className="px-4 py-2 font-semibold">{t.percentile}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {showcase.map((c) => {
                const p = normalCdf((heightCm - c[sex]) / s) * 100;
                return (
                  <tr key={c.code} className={c.code === code ? "bg-blue-50/60 font-semibold" : ""}>
                    <td className="px-4 py-2">{c.name}</td>
                    <td className="px-4 py-2 tabular-nums">
                      <bdi dir="ltr">{formatHeight(c[sex], unit)}</bdi>
                    </td>
                    <td className="px-4 py-2 tabular-nums">
                      <bdi dir="ltr">{formatPercent(p, locale)}</bdi>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

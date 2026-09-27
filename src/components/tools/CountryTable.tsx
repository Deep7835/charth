"use client";

import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import type { ToolsMessages } from "@/i18n/tools";
import { boardLink } from "@/lib/boardLink";
import { formatImperial } from "@/lib/units";

export type CountryRow = {
  code: string;
  name: string;
  male: number;
  female: number;
  dMale: number;
  dFemale: number;
};

type SortKey = "male" | "female" | "name";

function flag(code: string) {
  return String.fromCodePoint(...[...code.toUpperCase()].map((c) => 0x1f1e6 + c.charCodeAt(0) - 65));
}

const signed = (n: number) => `${n > 0 ? "+" : ""}${n.toFixed(1)}`;

export function CountryTable({ rows, t, common, locale }: { rows: CountryRow[]; t: ToolsMessages["countries"]; common: ToolsMessages["common"]; locale: string }) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<SortKey>("male");

  const ranks = useMemo(() => {
    const byMale = [...rows].sort((a, b) => b.male - a.male).map((r) => r.code);
    const byFemale = [...rows].sort((a, b) => b.female - a.female).map((r) => r.code);
    return {
      male: new Map(byMale.map((c, i) => [c, i + 1])),
      female: new Map(byFemale.map((c, i) => [c, i + 1])),
    };
  }, [rows]);

  const visible = useMemo(() => {
    const q = query.trim().toLocaleLowerCase(locale);
    const filtered = q ? rows.filter((r) => r.name.toLocaleLowerCase(locale).includes(q) || r.code.toLowerCase() === q) : rows;
    return [...filtered].sort((a, b) =>
      sort === "name" ? a.name.localeCompare(b.name, locale) : b[sort] - a[sort],
    );
  }, [rows, query, sort, locale]);

  const compare = (r: CountryRow) =>
    router.push(
      boardLink(locale, [
        { name: `${r.name} – ${common.men}`, heightCm: r.male, kind: "male", color: "#1e3a8a" },
        { name: `${r.name} – ${common.women}`, heightCm: r.female, kind: "female", color: "#be185d" },
      ]),
    );

  const header = (key: SortKey, labelText: string, className = "") => (
    <th className={`px-3 py-2.5 text-start text-xs font-semibold uppercase tracking-wide text-slate-500 ${className}`} aria-sort={sort === key ? (key === "name" ? "ascending" : "descending") : "none"}>
      <button type="button" onClick={() => setSort(key)} className={`inline-flex items-center gap-1 ${sort === key ? "text-slate-900" : ""}`}>
        {labelText}
        {sort === key && <span aria-hidden>{key === "name" ? "↑" : "↓"}</span>}
      </button>
    </th>
  );

  return (
    <div className="flex flex-col gap-3">
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={t.search}
        className="w-full rounded-xl border border-slate-200 px-3 py-2.5 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 sm:max-w-sm"
      />
      <div className="overflow-x-auto rounded-2xl border border-slate-200">
        <table className="w-full min-w-[640px] text-sm">
          <thead className="bg-slate-50">
            <tr>
              <th className="w-12 px-3 py-2.5 text-start text-xs font-semibold text-slate-500">{t.rank}</th>
              {header("name", common.country)}
              {header("male", common.men)}
              {header("female", common.women)}
              <th className="px-3 py-2.5 text-start text-xs font-semibold uppercase tracking-wide text-slate-500">{t.change}</th>
              <th className="px-3 py-2.5">
                <span className="sr-only">{t.compare}</span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {visible.map((r) => (
              <tr key={r.code} className="hover:bg-slate-50/70">
                <td className="px-3 py-2 tabular-nums text-slate-500">{sort === "female" ? ranks.female.get(r.code) : ranks.male.get(r.code)}</td>
                <td className="px-3 py-2 font-medium text-slate-900">
                  <span aria-hidden className="me-2">
                    {flag(r.code)}
                  </span>
                  {r.name}
                </td>
                <td className="whitespace-nowrap px-3 py-2 tabular-nums">
                  <bdi dir="ltr">
                    <span className="font-semibold">{r.male.toFixed(1)} cm</span>
                    <span className="ms-1.5 text-slate-500">{formatImperial(r.male)}</span>
                  </bdi>
                </td>
                <td className="whitespace-nowrap px-3 py-2 tabular-nums">
                  <bdi dir="ltr">
                    <span className="font-semibold">{r.female.toFixed(1)} cm</span>
                    <span className="ms-1.5 text-slate-500">{formatImperial(r.female)}</span>
                  </bdi>
                </td>
                <td className="whitespace-nowrap px-3 py-2 tabular-nums text-slate-500">
                  <bdi dir="ltr">
                    <span className={r.dMale >= 0 ? "text-emerald-700" : "text-red-600"}>{signed(r.dMale)}</span>
                    {" / "}
                    <span className={r.dFemale >= 0 ? "text-emerald-700" : "text-red-600"}>{signed(r.dFemale)}</span>
                  </bdi>
                </td>
                <td className="px-3 py-2 text-end">
                  <button
                    type="button"
                    onClick={() => compare(r)}
                    className="rounded-lg border border-slate-200 px-2.5 py-1 text-xs font-semibold text-blue-700 hover:bg-blue-50"
                  >
                    {t.compare}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

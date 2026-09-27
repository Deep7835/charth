"use client";

import { useMemo, useState } from "react";
import { library, type LibraryCategory, type LibraryItem } from "@/data/library";
import { libraryName, libraryNames } from "@/data/libraryNames";
import { formatHeight, type Unit } from "@/lib/units";
import type { Messages } from "@/i18n/messages/en";

type Props = {
  locale: string;
  unit: Unit;
  t: Messages["board"];
  onPick: (item: LibraryItem) => void;
};

const categories: Exclude<LibraryCategory, "generic">[] = ["athlete", "celebrity", "character", "animal", "record", "object"];

function normalize(text: string) {
  return text
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase();
}

export function LibraryPicker({ locale, unit, t, onPick }: Props) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<LibraryCategory | "all">("all");

  const results = useMemo(() => {
    const q = normalize(query.trim());
    return library.filter(
      (item) => (category === "all" || item.category === category) && (!q ||
          [item.name, ...(item.aliases ?? []), ...Object.values(libraryNames[item.id] ?? {})].some((n) => normalize(n).includes(q))),
    );
  }, [query, category]);

  return (
    <div className="flex h-full flex-col gap-2">
      <input
        type="search"
        autoFocus
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={t.searchPlaceholder}
        className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
      />
      <div className="flex flex-wrap gap-1.5">
        {(["all", ...categories] as const).map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setCategory(c)}
            className={`rounded-full px-2.5 py-1 text-xs font-medium transition ${
              category === c ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            {c === "all" ? "★" : t.categories[c]}
          </button>
        ))}
      </div>
      <ul className="-mx-1 max-h-72 flex-1 overflow-y-auto">
        {results.length === 0 && <li className="px-2 py-3 text-sm text-slate-500">{t.noResults}</li>}
        {results.map((item) => (
          <li key={item.id}>
            <button
              type="button"
              onClick={() => onPick(item)}
              className="flex w-full items-center justify-between gap-3 rounded-lg px-2 py-1.5 text-start text-sm hover:bg-blue-50"
            >
              <span className="truncate text-slate-800">{libraryName(item.id, item.name, locale)}</span>
              <bdi dir="ltr" className="shrink-0 text-xs tabular-nums text-slate-500">
                {formatHeight(item.heightCm, unit)}
              </bdi>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

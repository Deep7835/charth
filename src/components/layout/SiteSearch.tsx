"use client";

import { useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";

type Index = typeof import("./searchIndex");

export type SearchPage = { href: string; title: string; description?: string };

type Props = {
  locale: string;
  pages: SearchPage[];
  defaultPerson: string;
  t: { search: string; searchPlaceholder: string; searchEmpty: string; searchPages: string; searchLibrary: string; close: string };
};

function normalize(text: string) {
  return text.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
}

/** Header search: pages/tools plus every library subject (opens the chart with it next to an average person). */
export function SiteSearch({ locale, pages, defaultPerson, t }: Props) {
  const router = useRouter();
  const dialog = useRef<HTMLDialogElement>(null);
  const input = useRef<HTMLInputElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const [index, setIndex] = useState<Index | null>(null);

  const preload = () => {
    if (!index) void import("./searchIndex").then(setIndex);
  };

  const open = () => {
    setQuery("");
    setActive(0);
    dialog.current?.showModal();
    requestAnimationFrame(() => input.current?.focus());
    preload();
  };

  // "/" or Cmd/Ctrl+K opens search from anywhere (except while typing in a field).
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const typing = e.target instanceof HTMLElement && e.target.closest("input, textarea, select, [contenteditable]");
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || (e.key === "/" && !typing)) {
        e.preventDefault();
        trigger.current?.click();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const results = useMemo(() => {
    const q = normalize(query.trim());
    const pageHits = pages
      .filter((p) => !q || normalize(`${p.title} ${p.description ?? ""}`).includes(q))
      .slice(0, q ? 6 : 8)
      .map((p) => ({ key: p.href, group: "pages" as const, title: p.title, sub: p.description, href: p.href }));
    const libHits = q && index
      ? index.library
          .filter((item) =>
            [item.name, ...(item.aliases ?? []), ...Object.values(index.libraryNames[item.id] ?? {})].some((n) => normalize(n).includes(q)),
          )
          .slice(0, 8)
          .map((item) => {
            const name = index.libraryName(item.id, item.name, locale);
            return {
              key: item.id,
              group: "library" as const,
              title: name,
              sub: `${Math.round(item.heightCm)} cm`,
              href: index.boardLink(locale, [
                { name: defaultPerson, heightCm: 175, kind: "male", color: index.palette[0] },
                { name, heightCm: item.heightCm, kind: item.kind, object: item.object, aspect: item.aspect, build: item.build, adult: item.adult, color: item.color ?? index.palette[1] },
              ]),
            };
          })
      : [];
    return [...pageHits, ...libHits];
  }, [query, pages, locale, defaultPerson, index]);

  const go = (href: string) => {
    dialog.current?.close();
    // Chart links reuse the current page with a new ?c=…; the board reads it on load, so do a full navigation.
    if (href.includes("?c=")) window.location.assign(href);
    else router.push(href);
  };

  return (
    <>
      <button
        ref={trigger}
        type="button"
        onClick={open}
        onPointerEnter={preload}
        onFocus={preload}
        className="flex h-9 items-center gap-2 rounded-lg border border-slate-200 bg-white px-2.5 text-sm text-slate-500 hover:bg-slate-50"
        aria-label={t.search}
      >
        <span aria-hidden>⌕</span>
        <span className="hidden md:inline">{t.search}</span>
        <kbd aria-hidden className="hidden rounded border border-slate-200 px-1 text-[10px] lg:inline">
          /
        </kbd>
      </button>
      <dialog
        ref={dialog}
        className="m-auto mt-[12vh] w-[min(92vw,560px)] rounded-2xl border border-slate-200 bg-white p-0 text-slate-900 shadow-2xl backdrop:bg-slate-900/40"
        onClick={(e) => e.target === dialog.current && dialog.current?.close()}
      >
        <div className="flex items-center gap-2 border-b border-slate-200 px-4">
          <span aria-hidden className="text-slate-500">
            ⌕
          </span>
          <input
            ref={input}
            type="search"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setActive(0);
            }}
            onKeyDown={(e) => {
              if (e.key === "ArrowDown") {
                e.preventDefault();
                setActive((a) => Math.min(a + 1, results.length - 1));
              } else if (e.key === "ArrowUp") {
                e.preventDefault();
                setActive((a) => Math.max(a - 1, 0));
              } else if (e.key === "Enter" && results[active]) {
                e.preventDefault();
                go(results[active].href);
              }
            }}
            placeholder={t.searchPlaceholder}
            aria-label={t.search}
            aria-controls="site-search-results"
            aria-activedescendant={results[active] ? `sr-${results[active].key}` : undefined}
            className="h-12 w-full bg-transparent text-base outline-none"
          />
          <button type="button" onClick={() => dialog.current?.close()} className="rounded-md px-2 py-1 text-xs text-slate-500 hover:bg-slate-100">
            {t.close}
          </button>
        </div>
        <ul id="site-search-results" role="listbox" className="max-h-[55vh] overflow-y-auto p-2">
          {results.length === 0 && <li className="px-3 py-6 text-center text-sm text-slate-500">{t.searchEmpty}</li>}
          {results.map((r, i) => (
            <li key={r.key} id={`sr-${r.key}`} role="option" aria-selected={i === active}>
              {(i === 0 || results[i - 1].group !== r.group) && (
                <p className="px-3 pb-1 pt-2 text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                  {r.group === "pages" ? t.searchPages : t.searchLibrary}
                </p>
              )}
              <button
                type="button"
                onMouseEnter={() => setActive(i)}
                onClick={() => go(r.href)}
                className={`flex w-full items-center justify-between gap-3 rounded-lg px-3 py-2 text-start ${i === active ? "bg-blue-50" : ""}`}
              >
                <span className="min-w-0">
                  <span className="block truncate text-sm font-medium text-slate-900">{r.title}</span>
                  {r.sub && r.group === "pages" && <span className="block truncate text-xs text-slate-500">{r.sub}</span>}
                </span>
                {r.group === "library" && (
                  <bdi dir="ltr" className="shrink-0 text-xs tabular-nums text-slate-500">
                    {r.sub}
                  </bdi>
                )}
              </button>
            </li>
          ))}
        </ul>
      </dialog>
    </>
  );
}

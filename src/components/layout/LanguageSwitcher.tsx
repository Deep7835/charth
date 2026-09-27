"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { localeMeta, locales, type Locale } from "@/i18n/config";

export function LanguageSwitcher({ locale, label }: { locale: Locale; label: string }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const rest = pathname.replace(/^\/[^/]+/, "");

  useEffect(() => {
    if (!open) return;
    const close = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-label={label}
        className="flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
      >
        <span aria-hidden>🌐</span>
        <span className="uppercase">{locale}</span>
      </button>
      {open && (
        <ul className="absolute end-0 z-30 mt-1 w-52 rounded-xl border border-slate-200 bg-white p-1 shadow-lg">
          {locales.map((l) => (
            <li key={l}>
              <Link
                href={`/${l}${rest}`}
                hrefLang={localeMeta[l].hreflang}
                onClick={() => setOpen(false)}
                className={`flex items-center justify-between rounded-lg px-3 py-1.5 text-sm hover:bg-slate-50 ${
                  l === locale ? "font-semibold text-blue-700" : "text-slate-700"
                }`}
              >
                {localeMeta[l].label}
                {l === locale && <span aria-hidden>✓</span>}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

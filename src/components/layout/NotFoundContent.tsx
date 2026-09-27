"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { defaultLocale, hasLocale } from "@/i18n/config";
import { getSiteMessages, type SiteMessages } from "@/i18n/site";
import en from "@/i18n/site/en";

/**
 * Static 404 body: reads the locale from the URL in the browser, so no request
 * headers are needed and every page under [lang] stays statically generated.
 */
export function NotFoundContent() {
  const first = usePathname()?.split("/")[1] ?? "";
  const locale = hasLocale(first) ? first : defaultLocale;
  const [t, setT] = useState<SiteMessages>(en);

  useEffect(() => {
    let active = true;
    void getSiteMessages(locale).then((m) => active && setT(m));
    return () => {
      active = false;
    };
  }, [locale]);

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 text-center">
      <p className="text-6xl font-extrabold text-blue-600">404</p>
      <h1 className="mt-4 text-2xl font-bold tracking-tight">{t.notFoundTitle}</h1>
      <p className="mt-2 text-slate-600">{t.notFoundBody}</p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <Link href={`/${locale}`} className="rounded-xl bg-blue-600 px-5 py-2.5 font-semibold text-white hover:bg-blue-700">
          {t.notFoundCta}
        </Link>
        <Link href={`/${locale}/tools`} className="rounded-xl border border-slate-200 px-5 py-2.5 font-semibold text-slate-700 hover:bg-slate-50">
          {t.searchPages}
        </Link>
      </div>
    </div>
  );
}

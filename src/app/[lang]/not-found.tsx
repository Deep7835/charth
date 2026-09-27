import type { Metadata } from "next";
import Link from "next/link";
import { headers } from "next/headers";
import { defaultLocale, hasLocale, type Locale } from "@/i18n/config";
import { getSiteMessages } from "@/i18n/site";
import { getToolsMessages } from "@/i18n/tools";
import { RelatedTools } from "@/components/tools/ToolPage";

export const metadata: Metadata = { title: "404", robots: { index: false } };

/** The proxy forwards the URL's locale as `x-locale` (not-found pages don't receive params). */
async function currentLocale(): Promise<Locale> {
  const value = (await headers()).get("x-locale") ?? "";
  return hasLocale(value) ? value : defaultLocale;
}

export default async function NotFound() {
  const locale = await currentLocale();
  const [site, tools] = await Promise.all([getSiteMessages(locale), getToolsMessages(locale)]);
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 text-center">
      <p className="text-6xl font-extrabold text-blue-600">404</p>
      <h1 className="mt-4 text-2xl font-bold tracking-tight">{site.notFoundTitle}</h1>
      <p className="mt-2 text-slate-600">{site.notFoundBody}</p>
      <Link href={`/${locale}`} className="mt-6 inline-block rounded-xl bg-blue-600 px-5 py-2.5 font-semibold text-white hover:bg-blue-700">
        {site.notFoundCta}
      </Link>
      <div className="text-start">
        <RelatedTools locale={locale} t={tools} />
      </div>
    </div>
  );
}

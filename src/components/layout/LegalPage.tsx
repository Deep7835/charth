import Link from "next/link";
import { siteConfig } from "@/config/site";
import type { Locale } from "@/i18n/config";
import type { LegalMessages } from "@/i18n/legal";
import { fmt } from "@/lib/fmt";

type Doc = LegalMessages["privacy"];

export function formatDate(iso: string, locale: string) {
  return new Intl.DateTimeFormat(locale, { dateStyle: "long" }).format(new Date(`${iso}T12:00:00Z`));
}

/** Legal text is plain strings with `{site}` / `{email}` filled in here (no bidi isolates needed in prose). */
function fill(text: string) {
  return text.replaceAll("{site}", siteConfig.name).replaceAll("{email}", siteConfig.contactEmail);
}

export function LegalPage({ locale, doc, lastUpdatedLabel, homeLabel }: { locale: Locale; doc: Doc; lastUpdatedLabel: string; homeLabel: string }) {
  return (
    <article className="mx-auto max-w-3xl px-4 pt-6">
      <nav aria-label="Breadcrumb" className="mb-3 text-sm text-slate-500">
        <Link href={`/${locale}`} className="hover:text-slate-900">
          {homeLabel}
        </Link>{" "}
        / <span className="text-slate-700">{doc.h1}</span>
      </nav>
      <h1 className="text-3xl font-extrabold tracking-tight">{doc.h1}</h1>
      <p className="mt-2 text-sm text-slate-500">
        <time dateTime={siteConfig.legalUpdated}>{fmt(lastUpdatedLabel, { date: formatDate(siteConfig.legalUpdated, locale) })}</time>
      </p>
      <p className="mt-6 leading-relaxed text-slate-700">{fill(doc.intro)}</p>
      {doc.sections.map((section) => (
        <section key={section.h} className="mt-8">
          <h2 className="mb-2 text-xl font-bold tracking-tight">{section.h}</h2>
          {section.p.map((p) => (
            <p key={p} className="mt-2 leading-relaxed text-slate-700">
              {fill(p)}
            </p>
          ))}
        </section>
      ))}
    </article>
  );
}

export function legalDescription(text: string) {
  return fill(text);
}

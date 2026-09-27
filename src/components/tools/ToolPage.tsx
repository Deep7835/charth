import Link from "next/link";
import type { ReactNode } from "react";
import { absoluteUrl, siteConfig } from "@/config/site";
import { toolIcons, toolPath, toolSlugs, type ToolSlug } from "@/config/tools";
import type { Locale } from "@/i18n/config";
import type { ToolsMessages } from "@/i18n/tools";
import { faqSchema, jsonLd, webAppSchema } from "@/lib/seo";

type Props = {
  locale: Locale;
  slug: ToolSlug;
  t: ToolsMessages;
  h1: string;
  intro: string;
  description: string;
  faq: { q: string; a: string }[];
  children: ReactNode;
  /** Long-form content rendered after the tool. */
  content?: ReactNode;
};

export function ToolPage({ locale, slug, t, h1, intro, description, faq, children, content }: Props) {
  const c = t.common;
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: c.home, item: absoluteUrl(`/${locale}`) },
      { "@type": "ListItem", position: 2, name: c.tools, item: absoluteUrl(`/${locale}/tools`) },
      { "@type": "ListItem", position: 3, name: t.names[slug].name, item: absoluteUrl(`/${locale}${toolPath(slug)}`) },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd([
          webAppSchema({ locale, name: `${t.names[slug].name} – ${siteConfig.name}`, description, path: toolPath(slug) }),
          faqSchema(faq),
          breadcrumb,
        ])}
      />
      <div className="mx-auto max-w-5xl px-4 pt-5">
        <nav aria-label="Breadcrumb" className="mb-3 text-sm text-slate-500">
          <ol className="flex flex-wrap items-center gap-1.5">
            <li>
              <Link href={`/${locale}`} className="hover:text-slate-900">
                {c.home}
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li>
              <Link href={`/${locale}/tools`} className="hover:text-slate-900">
                {c.tools}
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li className="text-slate-700">{t.names[slug].name}</li>
          </ol>
        </nav>
        <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">{h1}</h1>
        <p className="mt-1 max-w-3xl text-slate-600">{intro}</p>

        <div className="mt-6">{children}</div>

        {content && <div className="prose-section mt-12 flex flex-col gap-10">{content}</div>}

        <section className="mt-12">
          <h2 className="mb-4 text-xl font-bold tracking-tight">{c.faqTitle}</h2>
          <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200">
            {faq.map((item) => (
              <details key={item.q} className="group p-5 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-4 font-semibold">
                  <h3>{item.q}</h3>
                  <span className="text-slate-400 transition group-open:rotate-45" aria-hidden>
                    +
                  </span>
                </summary>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-3xl bg-blue-600 px-6 py-8 text-white sm:flex sm:items-center sm:justify-between sm:gap-6">
          <div>
            <h2 className="text-xl font-bold">{c.boardCta}</h2>
            <p className="mt-1 text-blue-100">{c.boardCtaBody}</p>
          </div>
          <Link
            href={`/${locale}`}
            className="mt-4 inline-block shrink-0 rounded-xl bg-white px-5 py-2.5 font-semibold text-blue-700 hover:bg-blue-50 sm:mt-0"
          >
            {c.openInBoard} →
          </Link>
        </section>

        <RelatedTools locale={locale} t={t} exclude={slug} />
      </div>
    </>
  );
}

export function RelatedTools({ locale, t, exclude, title }: { locale: Locale; t: ToolsMessages; exclude?: ToolSlug; title?: string }) {
  return (
    <section className="mt-12">
      <h2 className="mb-4 text-xl font-bold tracking-tight">{title ?? t.common.relatedTitle}</h2>
      <ul className="grid gap-3 sm:grid-cols-2">
        {toolSlugs
          .filter((s) => s !== exclude)
          .map((s) => (
            <li key={s}>
              <Link
                href={`/${locale}${toolPath(s)}`}
                className="flex h-full gap-3 rounded-2xl border border-slate-200 p-4 transition hover:border-blue-300 hover:bg-blue-50/40"
              >
                <span
                  aria-hidden
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-lg font-bold text-blue-700"
                >
                  {toolIcons[s]}
                </span>
                <span>
                  <span className="block font-semibold text-slate-900">{t.names[s].name}</span>
                  <span className="block text-sm text-slate-600">{t.names[s].blurb}</span>
                </span>
              </Link>
            </li>
          ))}
      </ul>
    </section>
  );
}

export function ContentSection({ title, paragraphs }: { title: string; paragraphs: string[] }) {
  return (
    <section>
      <h2 className="mb-3 text-xl font-bold tracking-tight">{title}</h2>
      <div className="flex flex-col gap-3 leading-relaxed text-slate-700">
        {paragraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
    </section>
  );
}

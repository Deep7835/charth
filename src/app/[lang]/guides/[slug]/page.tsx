import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { absoluteUrl, siteConfig } from "@/config/site";
import { toolIcons, toolPath, type ToolSlug } from "@/config/tools";
import { hasLocale, localeMeta } from "@/i18n/config";
import { getGuides } from "@/i18n/guides";
import guidesEn from "@/i18n/guides/en";
import { getMoreMessages } from "@/i18n/more";
import { getSiteMessages } from "@/i18n/site";
import { getToolsMessages } from "@/i18n/tools";
import { formatDate } from "@/components/layout/LegalPage";
import { RelatedTools } from "@/components/tools/ToolPage";
import { fmt } from "@/lib/fmt";
import { jsonLd, pageMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return guidesEn.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: PageProps<"/[lang]/guides/[slug]">): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!hasLocale(lang)) return {};
  const g = (await getGuides(lang)).find((x) => x.slug === slug);
  if (!g) return {};
  return pageMetadata({ locale: lang, path: `/guides/${slug}`, title: g.metaTitle, description: g.metaDescription });
}

export default async function GuidePage({ params }: PageProps<"/[lang]/guides/[slug]">) {
  const { lang, slug } = await params;
  if (!hasLocale(lang)) notFound();
  const [guides, m, tools, site] = await Promise.all([getGuides(lang), getMoreMessages(lang), getToolsMessages(lang), getSiteMessages(lang)]);
  const g = guides.find((x) => x.slug === slug);
  if (!g) notFound();
  const tool = g.tool as ToolSlug;

  const ld = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: g.title,
      description: g.metaDescription,
      inLanguage: localeMeta[lang].hreflang,
      datePublished: siteConfig.contentUpdated,
      dateModified: siteConfig.contentUpdated,
      mainEntityOfPage: absoluteUrl(`/${lang}/guides/${slug}`),
      author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
      publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: tools.common.home, item: absoluteUrl(`/${lang}`) },
        { "@type": "ListItem", position: 2, name: m.guides.h1, item: absoluteUrl(`/${lang}/guides`) },
        { "@type": "ListItem", position: 3, name: g.title, item: absoluteUrl(`/${lang}/guides/${slug}`) },
      ],
    },
  ];

  return (
    <article className="mx-auto max-w-3xl px-4 pt-6">
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(ld)} />
      <nav aria-label="Breadcrumb" className="mb-3 text-sm text-slate-500">
        <Link href={`/${lang}`} className="hover:text-slate-900">
          {tools.common.home}
        </Link>{" "}
        /{" "}
        <Link href={`/${lang}/guides`} className="hover:text-slate-900">
          {m.guides.h1}
        </Link>
      </nav>
      <h1 className="text-3xl font-extrabold tracking-tight">{g.title}</h1>
      <p className="mt-2 text-sm text-slate-500">
        <time dateTime={siteConfig.contentUpdated}>{fmt(site.lastUpdated, { date: formatDate(siteConfig.contentUpdated, lang) })}</time> ·{" "}
        {m.guides.minutes.replace("{n}", String(g.minutes))}
      </p>
      <p className="mt-6 text-lg leading-relaxed text-slate-700">{g.intro}</p>
      {g.sections.map((s) => (
        <section key={s.h} className="mt-8">
          <h2 className="mb-2 text-xl font-bold tracking-tight">{s.h}</h2>
          {s.p.length > 2 ? (
            <ul className="flex list-disc flex-col gap-2 ps-5 leading-relaxed text-slate-700">
              {s.p.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          ) : (
            s.p.map((p) => (
              <p key={p} className="mt-2 leading-relaxed text-slate-700">
                {p}
              </p>
            ))
          )}
        </section>
      ))}
      <Link
        href={`/${lang}${toolPath(tool)}`}
        className="no-print mt-10 flex items-center gap-3 rounded-2xl bg-blue-600 p-5 text-white hover:bg-blue-700"
      >
        <span aria-hidden className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/15 text-lg font-bold">
          {toolIcons[tool]}
        </span>
        <span>
          <span className="block font-bold">{tools.names[tool].name} →</span>
          <span className="block text-sm text-blue-50">{tools.names[tool].blurb}</span>
        </span>
      </Link>
      <RelatedTools locale={lang} t={tools} exclude={tool} />
    </article>
  );
}

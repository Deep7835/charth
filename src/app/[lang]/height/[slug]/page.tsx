import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { absoluteUrl, siteConfig } from "@/config/site";
import { libraryById } from "@/data/library";
import { libraryName } from "@/data/libraryNames";
import { WORLD } from "@/data/heightByCountry";
import { hasLocale, localeMeta, type Locale } from "@/i18n/config";
import { getMessages } from "@/i18n/messages";
import { getMoreMessages, type MoreMessages } from "@/i18n/more";
import { getSiteMessages } from "@/i18n/site";
import { getToolsMessages } from "@/i18n/tools";
import { MiniBoard } from "@/components/board/MiniBoard";
import { palette, type Subject } from "@/components/board/types";
import { formatDate } from "@/components/layout/LegalPage";
import { RelatedTools } from "@/components/tools/ToolPage";
import { boardLink } from "@/lib/boardLink";
import { fmt } from "@/lib/fmt";
import { people, personById, personName, sexOf, similarPeople, worldPercentile } from "@/lib/people";
import { faqSchema, jsonLd, pageMetadata } from "@/lib/seo";
import { formatPercent } from "@/lib/stats";
import { formatImperial, formatMetric } from "@/lib/units";

export const dynamicParams = false;

export function generateStaticParams() {
  return people.map((p) => ({ slug: p.id }));
}

/** Plain template fill for titles/meta (no bidi isolate marks in <title>). */
function fill(template: string, values: Record<string, string>) {
  return template.replace(/\{(\w+)\}/g, (_, k) => values[k] ?? `{${k}}`);
}

function facts(slug: string, locale: Locale) {
  const item = personById.get(slug);
  if (!item) return null;
  const name = personName(item, locale);
  return { item, name, cm: formatMetric(item.heightCm), ftin: formatImperial(item.heightCm) };
}

export async function generateMetadata({ params }: PageProps<"/[lang]/height/[slug]">): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!hasLocale(lang)) return {};
  const f = facts(slug, lang);
  if (!f) return {};
  const m = await getMoreMessages(lang);
  const v = { name: f.name, cm: f.cm, ftin: f.ftin };
  return pageMetadata({ locale: lang, path: `/height/${slug}`, title: fill(m.person.metaTitle, v), description: fill(m.person.metaDescription, v) });
}

function tallAnswer(p: MoreMessages["person"], pct: number) {
  return pct >= 70 ? p.faqTallAbove : pct >= 30 ? p.faqTallAverage : p.faqTallBelow;
}

export default async function PersonPage({ params }: PageProps<"/[lang]/height/[slug]">) {
  const { lang, slug } = await params;
  if (!hasLocale(lang)) notFound();
  const f = facts(slug, lang);
  if (!f) notFound();
  const [m, msg, tools, site] = await Promise.all([getMoreMessages(lang), getMessages(lang), getToolsMessages(lang), getSiteMessages(lang)]);
  const p = m.person;
  const { item, name, cm, ftin } = f;
  const sex = sexOf(item);
  const pct = worldPercentile(item);
  const group = sex === "male" ? p.groupMen : p.groupWomen;
  const avgMan = libraryById.get("average-man")!;
  const avgWoman = libraryById.get("average-woman")!;
  const similar = similarPeople(item);
  const rival = similar[0];

  const subjects: Subject[] = [
    { id: item.id, name, heightCm: item.heightCm, kind: item.kind as "male" | "female", build: item.build, adult: item.adult, color: palette[0] },
    { id: "avg-m", name: libraryName("average-man", avgMan.name, lang), heightCm: WORLD.male, kind: "male", color: palette[5] },
    { id: "avg-w", name: libraryName("average-woman", avgWoman.name, lang), heightCm: WORLD.female, kind: "female", adult: true, color: palette[1] },
  ];
  const diffLine = (avg: number, who: string) => {
    const d = item.heightCm - avg;
    return fmt(d >= 0 ? p.diffTaller : p.diffShorter, { diff: formatMetric(Math.abs(d)), who });
  };

  const rivalName = personName(rival, lang);
  const rivalDiff = item.heightCm - rival.heightCm;
  const faq = [
    { q: fill(p.faqFeet, { name }), a: fmt(p.faqFeetA, { name, ftin, cm }) },
    { q: fill(p.faqTall, { name }), a: fmt(tallAnswer(p, pct), { name, cm, pct: formatPercent(pct, lang), group }) },
    {
      q: fill(p.faqVs, { name, other: rivalName }),
      a:
        Math.abs(rivalDiff) < 0.5
          ? fmt(p.faqVsSame, { cm })
          : fmt(rivalDiff > 0 ? p.faqVsTaller : p.faqVsShorter, {
              name,
              other: rivalName,
              cm,
              otherCm: formatMetric(rival.heightCm),
              diff: formatMetric(Math.abs(rivalDiff)),
            }),
    },
  ];
  // Bidi isolates are for rendered text only; strip them from structured data.
  const plainFaq = faq.map((x) => ({ q: x.q, a: x.a.replace(/[⁨⁩]/g, "") }));

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: tools.common.home, item: absoluteUrl(`/${lang}`) },
      { "@type": "ListItem", position: 2, name: m.people.h1, item: absoluteUrl(`/${lang}/height`) },
      { "@type": "ListItem", position: 3, name: fill(p.h1, { name }), item: absoluteUrl(`/${lang}/height/${slug}`) },
    ],
  };
  const personLd =
    item.category === "character"
      ? null
      : {
          "@context": "https://schema.org",
          "@type": "Person",
          name: item.name,
          height: { "@type": "QuantitativeValue", value: item.heightCm, unitCode: "CMT", unitText: "cm" },
        };

  return (
    <article className="mx-auto max-w-5xl px-4 pt-5">
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd([faqSchema(plainFaq), breadcrumb, ...(personLd ? [personLd] : [])])} />
      <nav aria-label="Breadcrumb" className="mb-3 text-sm text-slate-500">
        <Link href={`/${lang}`} className="hover:text-slate-900">
          {tools.common.home}
        </Link>{" "}
        /{" "}
        <Link href={`/${lang}/height`} className="hover:text-slate-900">
          {m.people.h1}
        </Link>{" "}
        / <span className="text-slate-700">{name}</span>
      </nav>
      <p className="text-xs font-semibold uppercase tracking-wide text-blue-700">{msg.board.categories[item.category]}</p>
      <h1 className="mt-1 text-3xl font-extrabold tracking-tight">{fill(p.h1, { name })}</h1>
      {name !== item.name && <p className="text-slate-500">{item.name}</p>}
      <p className="mt-3 text-xl text-slate-800">{fmt(p.answer, { name, cm, ftin })}</p>

      <div className="mt-6 grid gap-4 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.7fr)]">
        <section>
          <h2 className="sr-only">{fill(p.boardTitle, { name })}</h2>
          <MiniBoard subjects={subjects} unit={localeMeta[lang].imperial ? "ft" : "cm"} title={fill(p.boardTitle, { name })} className="h-96" />
          <Link
            href={boardLink(lang, [subjects[0], { name: msg.board.defaultMan, heightCm: 175, kind: "male", color: palette[2] }])}
            className="mt-3 inline-block rounded-xl bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700"
          >
            {fill(p.compareCta, { name })} →
          </Link>
        </section>
        <section className="rounded-3xl bg-slate-50 p-5">
          <h2 className="text-lg font-bold">{p.statsTitle}</h2>
          <ul className="mt-3 flex flex-col gap-2 text-slate-700">
            <li>
              <strong className="text-slate-900">
                <bdi dir="ltr">{cm}</bdi>
              </strong>{" "}
              · <bdi dir="ltr">{ftin}</bdi> · <bdi dir="ltr">{(item.heightCm / 2.54).toFixed(1)} in</bdi>
            </li>
            <li>{fmt(p.tallerThan, { pct: formatPercent(pct, lang), group })}</li>
            <li>{diffLine(WORLD.male, p.whoMan)}</li>
            <li>{diffLine(WORLD.female, p.whoWoman)}</li>
          </ul>
          <p className="mt-4 text-xs text-slate-500">{fill(p.sourceNote, { name })}</p>
        </section>
      </div>

      <section className="mt-10">
        <h2 className="mb-3 text-xl font-bold tracking-tight">{p.similarTitle}</h2>
        <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {similar.map((s) => (
            <li key={s.id}>
              <Link href={`/${lang}/height/${s.id}`} className="flex items-center justify-between gap-3 rounded-xl border border-slate-200 px-4 py-2.5 hover:border-blue-300 hover:bg-blue-50/40">
                <span className="truncate font-medium text-slate-900">{personName(s, lang)}</span>
                <bdi dir="ltr" className="shrink-0 text-sm tabular-nums text-slate-500">
                  {formatMetric(s.heightCm)}
                </bdi>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="mb-4 text-xl font-bold tracking-tight">{tools.common.faqTitle}</h2>
        <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200">
          {faq.map((x) => (
            <details key={x.q} className="group p-5 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-4 font-semibold">
                <h3>{x.q}</h3>
                <span className="text-slate-400 transition group-open:rotate-45" aria-hidden>
                  +
                </span>
              </summary>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{x.a}</p>
            </details>
          ))}
        </div>
      </section>

      <p className="mt-8 text-sm text-slate-500">
        <time dateTime={siteConfig.contentUpdated}>{fmt(site.lastUpdated, { date: formatDate(siteConfig.contentUpdated, lang) })}</time>
      </p>
      <RelatedTools locale={lang} t={tools} />
    </article>
  );
}


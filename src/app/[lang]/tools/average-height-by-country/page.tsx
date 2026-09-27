import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { toolPath } from "@/config/tools";
import { countryHeights, WORLD } from "@/data/heightByCountry";
import { hasLocale } from "@/i18n/config";
import { getToolsMessages } from "@/i18n/tools";
import { CountryTable, type CountryRow } from "@/components/tools/CountryTable";
import { ContentSection, ToolPage } from "@/components/tools/ToolPage";
import { countryNamer } from "@/lib/countryNames";
import { jsonLd, pageMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/config/site";
import { formatImperial } from "@/lib/units";

const slug = "average-height-by-country";

export async function generateMetadata({ params }: PageProps<"/[lang]/tools/average-height-by-country">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const t = await getToolsMessages(lang);
  return pageMetadata({ locale: lang, path: toolPath(slug), title: t.countries.metaTitle, description: t.countries.metaDescription });
}

export default async function Page({ params }: PageProps<"/[lang]/tools/average-height-by-country">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = await getToolsMessages(lang);
  const c = t.countries;
  const nameOf = countryNamer(lang);

  const rows: CountryRow[] = countryHeights
    .map((r) => ({
      code: r.code,
      name: nameOf(r.code, r.name),
      male: r.male,
      female: r.female,
      dMale: Number((r.male - r.male1985).toFixed(1)),
      dFemale: Number((r.female - r.female1985).toFixed(1)),
    }))
    .sort((a, b) => b.male - a.male);

  const byFemale = [...rows].sort((a, b) => b.female - a.female);
  const stats = [
    { label: c.tallestMen, row: rows[0], value: rows[0].male },
    { label: c.tallestWomen, row: byFemale[0], value: byFemale[0].female },
    { label: c.shortestMen, row: rows[rows.length - 1], value: rows[rows.length - 1].male },
    { label: c.shortestWomen, row: byFemale[byFemale.length - 1], value: byFemale[byFemale.length - 1].female },
  ];

  const dataset = {
    "@context": "https://schema.org",
    "@type": "Dataset",
    name: c.h1,
    description: c.metaDescription,
    url: absoluteUrl(`/${lang}${toolPath(slug)}`),
    license: "https://creativecommons.org/licenses/by/4.0/",
    creator: { "@type": "Organization", name: "NCD Risk Factor Collaboration (NCD-RisC)", url: "https://www.ncdrisc.org" },
    variableMeasured: ["Mean height of men at age 19 (cm)", "Mean height of women at age 19 (cm)"],
    spatialCoverage: "Worldwide (200 countries and territories)",
  };

  return (
    <ToolPage
      locale={lang}
      slug={slug}
      t={t}
      h1={c.h1}
      intro={c.intro}
      description={c.metaDescription}
      faq={c.faq}
      content={
        <>
          <ContentSection title={c.contentTitle} paragraphs={c.content} />
          <section>
            <h2 className="mb-3 text-xl font-bold tracking-tight">{c.methodTitle}</h2>
            <p className="leading-relaxed text-slate-700">{c.method}</p>
            <p className="mt-3 text-sm text-slate-500">
              {t.common.source}:{" "}
              <a href="https://www.ncdrisc.org/data-downloads-height.html" rel="noopener" className="underline hover:text-slate-900">
                {t.common.sourceNcd}
              </a>
            </p>
          </section>
        </>
      }
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(dataset)} />
      <div className="mb-5 grid grid-cols-2 gap-3 lg:grid-cols-5">
        {stats.map((s) => (
          <div key={s.label} className="rounded-2xl border border-slate-200 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{s.label}</p>
            <p className="mt-1 font-semibold text-slate-900">{s.row.name}</p>
            <p className="tabular-nums text-slate-600">
              <bdi dir="ltr">
                {s.value.toFixed(1)} cm · {formatImperial(s.value)}
              </bdi>
            </p>
          </div>
        ))}
        <div className="col-span-2 rounded-2xl bg-blue-50 p-4 lg:col-span-1">
          <p className="text-xs font-semibold uppercase tracking-wide text-blue-700">{c.worldAverage}</p>
          <p className="mt-1 tabular-nums text-slate-900">
            {t.common.men}:{" "}
            <bdi dir="ltr">
              <strong>{WORLD.male} cm</strong> · {formatImperial(WORLD.male)}
            </bdi>
          </p>
          <p className="tabular-nums text-slate-900">
            {t.common.women}:{" "}
            <bdi dir="ltr">
              <strong>{WORLD.female} cm</strong> · {formatImperial(WORLD.female)}
            </bdi>
          </p>
        </div>
      </div>
      <CountryTable rows={rows} t={c} common={t.common} locale={lang} />
    </ToolPage>
  );
}

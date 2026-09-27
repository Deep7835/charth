import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { toolPath } from "@/config/tools";
import { defaultCountry, hasLocale, localeMeta } from "@/i18n/config";
import { getMessages } from "@/i18n/messages";
import { getMoreMessages } from "@/i18n/more";
import { getToolsMessages } from "@/i18n/tools";
import { GrowthChart } from "@/components/tools/GrowthChart";
import { ContentSection, ToolPage } from "@/components/tools/ToolPage";
import { countryOptions } from "@/lib/countryOptions";
import { pageMetadata } from "@/lib/seo";

const slug = "growth-chart";

export async function generateMetadata({ params }: PageProps<"/[lang]/tools/growth-chart">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const m = await getMoreMessages(lang);
  return pageMetadata({ locale: lang, path: toolPath(slug), title: m.growth.metaTitle, description: m.growth.metaDescription });
}

export default async function Page({ params }: PageProps<"/[lang]/tools/growth-chart">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const [tools, m, msg] = await Promise.all([getToolsMessages(lang), getMoreMessages(lang), getMessages(lang)]);
  const g = m.growth;
  return (
    <ToolPage
      locale={lang}
      slug={slug}
      t={tools}
      h1={g.h1}
      intro={g.intro}
      description={g.metaDescription}
      faq={g.faq}
      content={
        <>
          <ContentSection title={g.contentTitle} paragraphs={g.content} />
          <p className="text-sm text-slate-500">
            {tools.common.source}:{" "}
            <a href="https://www.ncdrisc.org/data-downloads-height.html" rel="noopener" className="underline hover:text-slate-900">
              {tools.common.sourceNcd}
            </a>
          </p>
        </>
      }
    >
      <GrowthChart
        t={g}
        c={m.common}
        labels={{ country: tools.common.country, unitMetric: msg.board.unitMetric }}
        countries={countryOptions(lang)}
        defaultCountry={defaultCountry[lang]}
        defaultUnit={localeMeta[lang].imperial ? "ft" : "cm"}
      />
    </ToolPage>
  );
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { toolPath } from "@/config/tools";
import { defaultCountry, hasLocale, localeMeta } from "@/i18n/config";
import { getMessages } from "@/i18n/messages";
import { getMoreMessages } from "@/i18n/more";
import { getToolsMessages } from "@/i18n/tools";
import { HeightPredictor } from "@/components/tools/HeightPredictor";
import { ContentSection, ToolPage } from "@/components/tools/ToolPage";
import { countryOptions } from "@/lib/countryOptions";
import { pageMetadata } from "@/lib/seo";

const slug = "height-predictor";

export async function generateMetadata({ params }: PageProps<"/[lang]/tools/height-predictor">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const m = await getMoreMessages(lang);
  return pageMetadata({ locale: lang, path: toolPath(slug), title: m.predictor.metaTitle, description: m.predictor.metaDescription });
}

export default async function Page({ params }: PageProps<"/[lang]/tools/height-predictor">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const [tools, m, msg] = await Promise.all([getToolsMessages(lang), getMoreMessages(lang), getMessages(lang)]);
  const p = m.predictor;
  return (
    <ToolPage
      locale={lang}
      slug={slug}
      t={tools}
      h1={p.h1}
      intro={p.intro}
      description={p.metaDescription}
      faq={p.faq}
      content={<ContentSection title={p.howTitle} paragraphs={p.how} />}
    >
      <HeightPredictor
        t={p}
        c={m.common}
        labels={{ country: tools.common.country, unitMetric: msg.board.unitMetric, man: tools.common.man, woman: tools.common.woman }}
        countries={countryOptions(lang)}
        defaultCountry={defaultCountry[lang]}
        defaultUnit={localeMeta[lang].imperial ? "ft" : "cm"}
      />
    </ToolPage>
  );
}

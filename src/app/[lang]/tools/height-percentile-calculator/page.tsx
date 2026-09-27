import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { toolPath } from "@/config/tools";
import { ADULT_SD, countryHeights, WORLD } from "@/data/heightByCountry";
import { hasLocale, localeMeta, type Locale } from "@/i18n/config";
import { getToolsMessages } from "@/i18n/tools";
import { PercentileCalculator } from "@/components/tools/PercentileCalculator";
import { ContentSection, ToolPage } from "@/components/tools/ToolPage";
import { countryNamer } from "@/lib/countryNames";
import { pageMetadata } from "@/lib/seo";

const slug = "height-percentile-calculator";

const defaultCountry: Record<Locale, string> = {
  en: "US",
  es: "MX",
  "pt-br": "BR",
  hi: "IN",
  id: "ID",
  tr: "TR",
  vi: "VN",
  de: "DE",
  fr: "FR",
  ja: "JP",
  ko: "KR",
  ru: "RU",
  it: "IT",
  ar: "SA",
};

export async function generateMetadata({ params }: PageProps<"/[lang]/tools/height-percentile-calculator">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const t = await getToolsMessages(lang);
  return pageMetadata({ locale: lang, path: toolPath(slug), title: t.percentile.metaTitle, description: t.percentile.metaDescription });
}

export default async function Page({ params }: PageProps<"/[lang]/tools/height-percentile-calculator">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = await getToolsMessages(lang);
  const p = t.percentile;
  const nameOf = countryNamer(lang);
  const countries = countryHeights
    .map((c) => ({ code: c.code, name: nameOf(c.code, c.name), male: c.male, female: c.female }))
    .sort((a, b) => a.name.localeCompare(b.name, lang));

  return (
    <ToolPage
      locale={lang}
      slug={slug}
      t={t}
      h1={p.h1}
      intro={p.intro}
      description={p.metaDescription}
      faq={p.faq}
      content={<ContentSection title={p.contentTitle} paragraphs={p.content} />}
    >
      <PercentileCalculator
        t={p}
        common={t.common}
        locale={lang}
        countries={countries}
        world={{ male: WORLD.male, female: WORLD.female, name: t.countries.world }}
        sd={ADULT_SD}
        defaultCountry={defaultCountry[lang]}
        defaultUnit={localeMeta[lang].imperial ? "ft" : "cm"}
      />
    </ToolPage>
  );
}

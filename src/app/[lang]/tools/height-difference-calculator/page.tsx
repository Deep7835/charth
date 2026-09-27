import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { toolPath } from "@/config/tools";
import { hasLocale, localeMeta } from "@/i18n/config";
import { getToolsMessages } from "@/i18n/tools";
import { DifferenceCalculator } from "@/components/tools/DifferenceCalculator";
import { ContentSection, ToolPage } from "@/components/tools/ToolPage";
import { pageMetadata } from "@/lib/seo";

const slug = "height-difference-calculator";

export async function generateMetadata({ params }: PageProps<"/[lang]/tools/height-difference-calculator">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const t = await getToolsMessages(lang);
  return pageMetadata({ locale: lang, path: toolPath(slug), title: t.difference.metaTitle, description: t.difference.metaDescription });
}

export default async function Page({ params }: PageProps<"/[lang]/tools/height-difference-calculator">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = await getToolsMessages(lang);
  const d = t.difference;

  return (
    <ToolPage
      locale={lang}
      slug={slug}
      t={t}
      h1={d.h1}
      intro={d.intro}
      description={d.metaDescription}
      faq={d.faq}
      content={<ContentSection title={d.contentTitle} paragraphs={d.content} />}
    >
      <DifferenceCalculator t={d} common={t.common} locale={lang} defaultUnit={localeMeta[lang].imperial ? "ft" : "cm"} />
    </ToolPage>
  );
}

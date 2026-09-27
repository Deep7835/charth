import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { siteConfig } from "@/config/site";
import { toolPath } from "@/config/tools";
import { hasLocale, localeMeta } from "@/i18n/config";
import { getHugMessages } from "@/i18n/hug";
import { getToolsMessages } from "@/i18n/tools";
import { HugSimulator } from "@/components/tools/HugSimulator";
import { ContentSection, ToolPage } from "@/components/tools/ToolPage";
import { pageMetadata } from "@/lib/seo";

const slug = "hug-simulator";

export async function generateMetadata({ params }: PageProps<"/[lang]/tools/hug-simulator">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const h = await getHugMessages(lang);
  return pageMetadata({ locale: lang, path: toolPath(slug), title: h.metaTitle, description: h.metaDescription });
}

export default async function Page({ params }: PageProps<"/[lang]/tools/hug-simulator">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const [t, h] = await Promise.all([getToolsMessages(lang), getHugMessages(lang)]);

  return (
    <ToolPage
      locale={lang}
      slug={slug}
      t={t}
      h1={h.h1}
      intro={h.intro}
      description={h.metaDescription}
      faq={h.faq}
      content={<ContentSection title={h.contentTitle} paragraphs={h.content} />}
    >
      <HugSimulator t={h} defaultUnit={localeMeta[lang].imperial ? "ft" : "cm"} brand={siteConfig.name} />
    </ToolPage>
  );
}

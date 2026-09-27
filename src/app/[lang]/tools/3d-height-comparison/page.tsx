import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { siteConfig } from "@/config/site";
import { toolPath } from "@/config/tools";
import { hasLocale, localeMeta } from "@/i18n/config";
import { getMessages } from "@/i18n/messages";
import { getThreeMessages } from "@/i18n/three";
import { getToolsMessages } from "@/i18n/tools";
import { HeightBoard } from "@/components/board/HeightBoard";
import { ContentSection, ToolPage } from "@/components/tools/ToolPage";
import { pageMetadata } from "@/lib/seo";

const slug = "3d-height-comparison";

export async function generateMetadata({ params }: PageProps<"/[lang]/tools/3d-height-comparison">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const t = await getThreeMessages(lang);
  return pageMetadata({ locale: lang, path: toolPath(slug), title: t.metaTitle, description: t.metaDescription });
}

export default async function Page({ params }: PageProps<"/[lang]/tools/3d-height-comparison">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const [tools, t, m] = await Promise.all([getToolsMessages(lang), getThreeMessages(lang), getMessages(lang)]);
  return (
    <ToolPage
      locale={lang}
      slug={slug}
      t={tools}
      h1={t.h1}
      intro={t.intro}
      description={t.metaDescription}
      faq={t.faq}
      content={<ContentSection title={t.contentTitle} paragraphs={t.content} />}
    >
      <HeightBoard
        locale={lang}
        t={m.board}
        defaultUnit={localeMeta[lang].imperial ? "ft" : "cm"}
        brand={siteConfig.name}
        initialMode="3d"
      />
    </ToolPage>
  );
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { siteConfig } from "@/config/site";
import { hasLocale } from "@/i18n/config";
import { getLegalMessages } from "@/i18n/legal";
import { getSiteMessages } from "@/i18n/site";
import { getToolsMessages } from "@/i18n/tools";
import { LegalPage, legalDescription } from "@/components/layout/LegalPage";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: PageProps<"/[lang]/terms">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const doc = (await getLegalMessages(lang)).terms;
  return pageMetadata({
    locale: lang,
    path: "/terms",
    title: `${doc.metaTitle} | ${siteConfig.name}`,
    description: legalDescription(doc.metaDescription),
  });
}

export default async function Page({ params }: PageProps<"/[lang]/terms">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const [legal, site, tools] = await Promise.all([getLegalMessages(lang), getSiteMessages(lang), getToolsMessages(lang)]);
  return <LegalPage locale={lang} doc={legal.terms} lastUpdatedLabel={site.lastUpdated} homeLabel={tools.common.home} />;
}

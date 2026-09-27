import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { hasLocale } from "@/i18n/config";
import { getToolsMessages } from "@/i18n/tools";
import { RelatedTools } from "@/components/tools/ToolPage";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: PageProps<"/[lang]/tools">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const t = await getToolsMessages(lang);
  return pageMetadata({ locale: lang, path: "/tools", title: t.common.hubMetaTitle, description: t.common.hubMetaDescription });
}

export default async function ToolsHub({ params }: PageProps<"/[lang]/tools">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = await getToolsMessages(lang);
  return (
    <div className="mx-auto max-w-5xl px-4 pt-6">
      <nav aria-label="Breadcrumb" className="mb-3 text-sm text-slate-500">
        <Link href={`/${lang}`} className="hover:text-slate-900">
          {t.common.home}
        </Link>{" "}
        / <span className="text-slate-700">{t.common.tools}</span>
      </nav>
      <h1 className="text-3xl font-extrabold tracking-tight">{t.common.hubH1}</h1>
      <p className="mt-1 text-slate-600">{t.common.hubIntro}</p>
      <RelatedTools locale={lang} t={t} title={t.common.hubH1} />
      <section className="mt-10 rounded-3xl bg-blue-600 px-6 py-8 text-white">
        <h2 className="text-xl font-bold">{t.common.boardCta}</h2>
        <p className="mt-1 text-blue-100">{t.common.boardCtaBody}</p>
        <Link href={`/${lang}`} className="mt-4 inline-block rounded-xl bg-white px-5 py-2.5 font-semibold text-blue-700 hover:bg-blue-50">
          {t.common.openInBoard} →
        </Link>
      </section>
    </div>
  );
}

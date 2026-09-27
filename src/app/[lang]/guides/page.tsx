import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { hasLocale } from "@/i18n/config";
import { getGuides } from "@/i18n/guides";
import { getMoreMessages } from "@/i18n/more";
import { getToolsMessages } from "@/i18n/tools";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: PageProps<"/[lang]/guides">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const m = await getMoreMessages(lang);
  return pageMetadata({ locale: lang, path: "/guides", title: m.guides.metaTitle, description: m.guides.metaDescription });
}

export default async function GuidesHub({ params }: PageProps<"/[lang]/guides">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const [guides, m, tools] = await Promise.all([getGuides(lang), getMoreMessages(lang), getToolsMessages(lang)]);
  return (
    <div className="mx-auto max-w-4xl px-4 pt-6">
      <nav aria-label="Breadcrumb" className="mb-3 text-sm text-slate-500">
        <Link href={`/${lang}`} className="hover:text-slate-900">
          {tools.common.home}
        </Link>{" "}
        / <span className="text-slate-700">{m.guides.h1}</span>
      </nav>
      <h1 className="text-3xl font-extrabold tracking-tight">{m.guides.h1}</h1>
      <p className="mt-1 text-slate-600">{m.guides.intro}</p>
      <ul className="mt-8 grid gap-4">
        {guides.map((g) => (
          <li key={g.slug}>
            <Link href={`/${lang}/guides/${g.slug}`} className="block rounded-2xl border border-slate-200 p-5 transition hover:border-blue-300 hover:bg-blue-50/40">
              <h2 className="text-lg font-bold text-slate-900">{g.title}</h2>
              <p className="mt-1 text-sm text-slate-600">{g.metaDescription}</p>
              <p className="mt-3 text-sm font-semibold text-blue-700">
                {m.guides.read} → <span className="font-normal text-slate-500">· {m.guides.minutes.replace("{n}", String(g.minutes))}</span>
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

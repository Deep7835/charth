import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { LibraryCategory } from "@/data/library";
import { hasLocale } from "@/i18n/config";
import { getMessages } from "@/i18n/messages";
import { getMoreMessages } from "@/i18n/more";
import { getToolsMessages } from "@/i18n/tools";
import { people, personName } from "@/lib/people";
import { pageMetadata } from "@/lib/seo";
import { formatImperial, formatMetric } from "@/lib/units";

const order: LibraryCategory[] = ["athlete", "celebrity", "character", "record"];

export async function generateMetadata({ params }: PageProps<"/[lang]/height">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const m = await getMoreMessages(lang);
  return pageMetadata({ locale: lang, path: "/height", title: m.people.metaTitle, description: m.people.metaDescription });
}

export default async function PeopleHub({ params }: PageProps<"/[lang]/height">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const [m, msg, tools] = await Promise.all([getMoreMessages(lang), getMessages(lang), getToolsMessages(lang)]);
  return (
    <div className="mx-auto max-w-5xl px-4 pt-6">
      <nav aria-label="Breadcrumb" className="mb-3 text-sm text-slate-500">
        <Link href={`/${lang}`} className="hover:text-slate-900">
          {tools.common.home}
        </Link>{" "}
        / <span className="text-slate-700">{m.people.h1}</span>
      </nav>
      <h1 className="text-3xl font-extrabold tracking-tight">{m.people.h1}</h1>
      <p className="mt-1 text-slate-600">{m.people.intro}</p>
      {order.map((cat) => {
        const list = people.filter((p) => p.category === cat).sort((a, b) => b.heightCm - a.heightCm);
        if (!list.length) return null;
        return (
          <section key={cat} className="mt-10">
            <h2 className="mb-3 text-xl font-bold tracking-tight">{msg.board.categories[cat]}</h2>
            <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {list.map((p) => (
                <li key={p.id}>
                  <Link href={`/${lang}/height/${p.id}`} className="flex items-center justify-between gap-3 rounded-xl border border-slate-200 px-4 py-2.5 hover:border-blue-300 hover:bg-blue-50/40">
                    <span className="truncate font-medium text-slate-900">{personName(p, lang)}</span>
                    <bdi dir="ltr" className="shrink-0 text-sm tabular-nums text-slate-500">
                      {formatMetric(p.heightCm)} · {formatImperial(p.heightCm)}
                    </bdi>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        );
      })}
    </div>
  );
}

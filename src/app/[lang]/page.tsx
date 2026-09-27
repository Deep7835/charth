import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { siteConfig } from "@/config/site";
import { hasLocale, localeMeta, type Locale } from "@/i18n/config";
import { getMessages } from "@/i18n/messages";
import { getToolsMessages } from "@/i18n/tools";
import { getSiteMessages } from "@/i18n/site";
import { boardUi } from "@/lib/boardUi";
import { RelatedTools } from "@/components/tools/ToolPage";
import { getMoreMessages } from "@/i18n/more";
import { personById, personName } from "@/lib/people";
import { formatMetric } from "@/lib/units";
import Link from "next/link";
import { HeightBoard } from "@/components/board/HeightBoard";
import { faqSchema, jsonLd, pageMetadata, webAppSchema } from "@/lib/seo";

export async function generateMetadata({ params }: PageProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const t = await getMessages(lang);
  return pageMetadata({ locale: lang, title: t.meta.title, description: t.meta.description });
}

export default async function HomePage({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const locale: Locale = lang;
  const [t, tools, site, more] = await Promise.all([getMessages(locale), getToolsMessages(locale), getSiteMessages(locale), getMoreMessages(locale)]);
  const featured = [
    "lebron-james", "cristiano-ronaldo", "lionel-messi", "taylor-swift", "tom-cruise", "dwayne-johnson",
    "virat-kohli", "shah-rukh-khan", "luffy", "levi-ackerman", "gojo-satoru", "victor-wembanyama",
  ].flatMap((id) => personById.get(id) ?? []);
  const h = t.home;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd([
          webAppSchema({ locale, name: `${h.h1} – ${siteConfig.name}`, description: t.meta.description }),
          faqSchema(h.faq),
        ])}
      />

      <section id="tool" className="mx-auto max-w-7xl px-4 pb-6 pt-5">
        <div className="mb-4 flex flex-col gap-1">
          <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">{h.h1}</h1>
          <p className="max-w-3xl text-sm text-slate-600 sm:text-base">{h.tagline}</p>
        </div>
        <HeightBoard locale={locale} ui={boardUi(site)} t={t.board} defaultUnit={localeMeta[locale].imperial ? "ft" : "cm"} brand={siteConfig.name} />
      </section>

      <div className="mx-auto flex max-w-5xl flex-col gap-14 px-4 pt-8">
        <section id="how-it-works" className="scroll-mt-20">
          <h2 className="mb-5 text-2xl font-bold tracking-tight">{h.howTitle}</h2>
          <ol className="grid gap-4 sm:grid-cols-3">
            {h.how.map((step, i) => (
              <li key={step.title} className="rounded-2xl border border-slate-200 p-5">
                <span className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                  {i + 1}
                </span>
                <h3 className="mb-1 font-semibold">{step.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{step.body}</p>
              </li>
            ))}
          </ol>
        </section>

        <section>
          <h2 className="mb-5 text-2xl font-bold tracking-tight">{h.featuresTitle}</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {h.features.map((f) => (
              <div key={f.title} className="rounded-2xl bg-slate-50 p-5">
                <h3 className="mb-1 font-semibold">{f.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{f.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-5 text-2xl font-bold tracking-tight">{h.useCasesTitle}</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {h.useCases.map((u) => (
              <div key={u.title} className="rounded-2xl border border-slate-200 p-5">
                <h3 className="mb-1 font-semibold">{u.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{u.body}</p>
              </div>
            ))}
          </div>
        </section>

        <RelatedTools locale={locale} t={tools} />

        <section>
          <h2 className="mb-4 text-2xl font-bold tracking-tight">{more.people.h1}</h2>
          <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((p) => (
              <li key={p.id}>
                <Link
                  href={`/${locale}/height/${p.id}`}
                  className="flex items-center justify-between gap-3 rounded-xl border border-slate-200 px-4 py-2.5 hover:border-blue-300 hover:bg-blue-50/40"
                >
                  <span className="truncate font-medium text-slate-900">{personName(p, locale)}</span>
                  <bdi dir="ltr" className="shrink-0 text-sm tabular-nums text-slate-500">
                    {formatMetric(p.heightCm)}
                  </bdi>
                </Link>
              </li>
            ))}
          </ul>
          <Link href={`/${locale}/height`} className="mt-3 inline-block text-sm font-semibold text-blue-700 hover:underline">
            {more.people.h1} →
          </Link>
        </section>

        <section id="faq" className="scroll-mt-20">
          <h2 className="mb-5 text-2xl font-bold tracking-tight">{h.faqTitle}</h2>
          <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200">
            {h.faq.map((item) => (
              <details key={item.q} className="group p-5 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-4 font-semibold">
                  <h3>{item.q}</h3>
                  <span className="text-slate-400 transition group-open:rotate-45" aria-hidden>
                    +
                  </span>
                </summary>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="rounded-3xl bg-blue-600 px-6 py-10 text-center text-white">
          <h2 className="mb-2 text-2xl font-bold">{h.ctaTitle}</h2>
          <p className="mb-5 text-blue-50">{h.ctaBody}</p>
          <a href="#tool" className="inline-block rounded-xl bg-white px-5 py-2.5 font-semibold text-blue-700 hover:bg-blue-50">
            {h.ctaButton}
          </a>
        </section>
      </div>
    </>
  );
}

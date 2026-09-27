import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { toolPath } from "@/config/tools";
import { hasLocale } from "@/i18n/config";
import { getToolsMessages } from "@/i18n/tools";
import { getSiteMessages } from "@/i18n/site";
import { HeightConverter } from "@/components/tools/HeightConverter";
import { ContentSection, ToolPage } from "@/components/tools/ToolPage";
import { pageMetadata } from "@/lib/seo";
import { CM_PER_INCH, formatImperial } from "@/lib/units";

const slug = "height-converter";

export async function generateMetadata({ params }: PageProps<"/[lang]/tools/height-converter">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const t = await getToolsMessages(lang);
  return pageMetadata({ locale: lang, path: toolPath(slug), title: t.converter.metaTitle, description: t.converter.metaDescription });
}

const cmRows = Array.from({ length: 76 }, (_, i) => 140 + i);
const ftRows = Array.from({ length: 31 }, (_, i) => 54 + i); // 4′6″ … 7′0″ in inches

export default async function Page({ params }: PageProps<"/[lang]/tools/height-converter">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const [t, site] = await Promise.all([getToolsMessages(lang), getSiteMessages(lang)]);
  const c = t.converter;

  const th = "px-3 py-2 text-start text-xs font-semibold uppercase tracking-wide text-slate-500";
  const td = "px-3 py-1.5 tabular-nums";

  return (
    <ToolPage
      locale={lang}
      slug={slug}
      t={t}
      h1={c.h1}
      intro={c.intro}
      description={c.metaDescription}
      faq={c.faq}
      content={
        <>
          <ContentSection title={c.howTitle} paragraphs={c.how} />
          <section>
            <h2 className="mb-3 text-xl font-bold tracking-tight">{c.tableCmTitle}</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[0, 1, 2, 3].map((col) => (
                <table key={col} className="w-full overflow-hidden rounded-xl border border-slate-200 text-sm">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className={th}>{c.colCm}</th>
                      <th className={th}>{c.colFtIn}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {cmRows.slice(col * 19, col * 19 + 19).map((cm) => (
                      <tr key={cm}>
                        <td className={`${td} font-medium`}>{cm} cm</td>
                        <td className={td}>{formatImperial(cm)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ))}
            </div>
          </section>
          <section>
            <h2 className="mb-3 text-xl font-bold tracking-tight">{c.tableFtTitle}</h2>
            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full text-sm">
                <thead className="bg-slate-50">
                  <tr>
                    <th className={th}>{c.colFtIn}</th>
                    <th className={th}>{c.colInches}</th>
                    <th className={th}>{c.colCm}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {ftRows.map((inches) => (
                    <tr key={inches}>
                      <td className={`${td} font-medium`}>
                        {Math.floor(inches / 12)}′ {inches % 12}″
                      </td>
                      <td className={td}>{inches} in</td>
                      <td className={td}>{(inches * CM_PER_INCH).toFixed(1)} cm</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </>
      }
    >
      <HeightConverter t={c} copy={{ copy: site.copy, copied: site.copied, copyFailed: site.copyFailed }} />
    </ToolPage>
  );
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { toolPath } from "@/config/tools";
import { hasLocale, localeMeta } from "@/i18n/config";
import { getMoreMessages } from "@/i18n/more";
import { getSiteMessages } from "@/i18n/site";
import { getToolsMessages } from "@/i18n/tools";
import { BmiCalculator } from "@/components/tools/BmiCalculator";
import { healthyWeightKg } from "@/lib/bmi";
import { ContentSection, ToolPage } from "@/components/tools/ToolPage";
import { pageMetadata } from "@/lib/seo";
import { formatImperial } from "@/lib/units";

const slug = "bmi-calculator";
const chartHeights = Array.from({ length: 13 }, (_, i) => 145 + i * 5); // 145–205 cm

export async function generateMetadata({ params }: PageProps<"/[lang]/tools/bmi-calculator">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const m = await getMoreMessages(lang);
  return pageMetadata({ locale: lang, path: toolPath(slug), title: m.bmi.metaTitle, description: m.bmi.metaDescription });
}

export default async function Page({ params }: PageProps<"/[lang]/tools/bmi-calculator">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const [tools, m, site] = await Promise.all([getToolsMessages(lang), getMoreMessages(lang), getSiteMessages(lang)]);
  const b = m.bmi;
  const th = "px-3 py-2 text-start text-xs font-semibold uppercase tracking-wide text-slate-500";
  return (
    <ToolPage
      locale={lang}
      slug={slug}
      t={tools}
      h1={b.h1}
      intro={b.intro}
      description={b.metaDescription}
      faq={b.faq}
      content={
        <>
          <ContentSection title={b.contentTitle} paragraphs={b.content} />
          <section>
            <h2 className="mb-3 text-xl font-bold tracking-tight">{b.chartTitle}</h2>
            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full text-sm">
                <thead className="bg-slate-50">
                  <tr>
                    <th className={th}>{b.colHeight}</th>
                    <th className={th}>{b.colRange}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {chartHeights.map((cm) => {
                    const r = healthyWeightKg(cm);
                    return (
                      <tr key={cm}>
                        <td className="whitespace-nowrap px-3 py-1.5 font-medium tabular-nums">
                          <bdi dir="ltr">
                            {cm} cm · {formatImperial(cm)}
                          </bdi>
                        </td>
                        <td className="whitespace-nowrap px-3 py-1.5 tabular-nums">
                          <bdi dir="ltr">
                            {r.low.toFixed(1)}–{r.high.toFixed(1)} kg · {Math.round(r.low * 2.20462)}–{Math.round(r.high * 2.20462)} lb
                          </bdi>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </section>
        </>
      }
    >
      <BmiCalculator t={b} heightLabel={tools.common.height} defaultUnit={localeMeta[lang].imperial ? "ft" : "cm"} invalidText={site.invalidHeight} />
    </ToolPage>
  );
}

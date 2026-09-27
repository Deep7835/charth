import Link from "next/link";
import { siteConfig } from "@/config/site";
import { toolPath, type ToolSlug } from "@/config/tools";
import { localeMeta, locales, type Locale } from "@/i18n/config";
import type { Messages } from "@/i18n/messages/en";
import type { MoreMessages } from "@/i18n/more";
import type { SiteMessages } from "@/i18n/site";
import type { ToolsMessages } from "@/i18n/tools";
import { CookieSettingsButton } from "./ConsentAnalytics";
import { Logo, Wordmark } from "./SiteHeader";

type Props = { locale: Locale; t: Messages["footer"]; tools: ToolsMessages; site: SiteMessages; more: MoreMessages; homeLabel: string };

const productTools: ToolSlug[] = ["3d-height-comparison", "height-converter", "height-difference-calculator", "hug-simulator"];
const resourceTools: ToolSlug[] = ["average-height-by-country", "growth-chart", "height-predictor"];

export function SiteFooter({ locale, t, tools, site, more, homeLabel }: Props) {
  const l = (path: string) => `/${locale}${path}`;
  const columns: { title: string; links: { href: string; label: string; external?: boolean }[]; extra?: React.ReactNode }[] = [
    {
      title: site.footerProduct,
      links: [
        { href: l(""), label: homeLabel },
        ...productTools.map((s) => ({ href: l(toolPath(s)), label: tools.names[s].name })),
        { href: l("/tools"), label: site.footerAllTools },
      ],
    },
    {
      title: site.footerResources,
      links: [
        { href: l("/height"), label: more.people.h1 },
        { href: l("/guides"), label: more.guides.h1 },
        ...resourceTools.map((s) => ({ href: l(toolPath(s)), label: tools.names[s].name })),
      ],
    },
    {
      title: site.footerCompany,
      links: [
        { href: `${l("")}#how-it-works`, label: site.footerHowItWorks },
        { href: `${l("")}#faq`, label: site.footerFaq },
        { href: `mailto:${siteConfig.contactEmail}`, label: site.contact, external: true },
      ],
    },
    {
      title: site.footerLegal,
      links: [
        { href: l("/privacy"), label: site.privacy },
        { href: l("/terms"), label: site.terms },
      ],
      extra: siteConfig.gaId ? <CookieSettingsButton label={site.cookieSettings} /> : null,
    },
  ];

  return (
    <footer className="mt-16 bg-white">
      <div aria-hidden className="h-1 bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500" />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:px-8">
        <div className="max-w-md">
          <Link href={l("")} className="inline-flex items-center gap-2.5">
            <Logo />
            <Wordmark className="text-xl" />
          </Link>
          <p className="mt-4 leading-relaxed text-slate-500">{t.about}</p>
        </div>
        <nav className="grid grid-cols-2 gap-8 sm:grid-cols-4" aria-label={site.menu}>
          {columns.map((col) => (
            <div key={col.title}>
              <h2 className="text-sm font-semibold text-slate-900">{col.title}</h2>
              <ul className="mt-4 flex flex-col gap-3 text-sm">
                {col.links.map((link) => (
                  <li key={link.href}>
                    {link.external ? (
                      <a href={link.href} className="text-slate-500 transition hover:text-slate-900">
                        {link.label}
                      </a>
                    ) : (
                      <Link href={link.href} className="text-slate-500 transition hover:text-slate-900">
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
                {col.extra && <li className="text-slate-500">{col.extra}</li>}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      <div className="border-t border-slate-200">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-6 text-sm text-slate-500 sm:px-6 lg:px-8">
          {/* Crawlable links to every language version of the home page. */}
          <ul className="flex flex-wrap gap-x-4 gap-y-1 text-xs">
            {locales.map((code) => (
              <li key={code}>
                <Link href={`/${code}`} hrefLang={localeMeta[code].hreflang} lang={localeMeta[code].hreflang} className="hover:text-slate-900">
                  {localeMeta[code].label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} {siteConfig.name}. {t.rights}
            </p>
            <p>{site.footerTagline}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

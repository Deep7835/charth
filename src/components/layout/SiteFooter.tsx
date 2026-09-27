import Link from "next/link";
import { siteConfig } from "@/config/site";
import { toolPath, toolSlugs } from "@/config/tools";
import { localeMeta, locales, type Locale } from "@/i18n/config";
import type { Messages } from "@/i18n/messages/en";
import type { SiteMessages } from "@/i18n/site";
import type { ToolsMessages } from "@/i18n/tools";
import { CookieSettingsButton } from "./ConsentAnalytics";

type Props = { locale: Locale; t: Messages["footer"]; tools: ToolsMessages; site: SiteMessages };

export function SiteFooter({ locale, t, tools, site }: Props) {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-slate-50">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-10 text-sm text-slate-600">
        <p className="max-w-md">
          <strong className="text-slate-900">{siteConfig.name}</strong> — {t.about}
        </p>
        <ul className="flex flex-wrap gap-x-5 gap-y-1">
          {toolSlugs.map((slug) => (
            <li key={slug}>
              <Link href={`/${locale}${toolPath(slug)}`} className="hover:text-slate-900">
                {tools.names[slug].name}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="flex flex-wrap gap-x-5 gap-y-1">
          <li>
            <Link href={`/${locale}/privacy`} className="hover:text-slate-900">
              {site.privacy}
            </Link>
          </li>
          <li>
            <Link href={`/${locale}/terms`} className="hover:text-slate-900">
              {site.terms}
            </Link>
          </li>
          <li>
            <a href={`mailto:${siteConfig.contactEmail}`} className="hover:text-slate-900">
              {site.contact}
            </a>
          </li>
          {siteConfig.gaId && (
            <li>
              <CookieSettingsButton label={site.cookieSettings} />
            </li>
          )}
        </ul>
        {/* Crawlable links to every language version of the home page. */}
        <ul className="flex flex-wrap gap-x-4 gap-y-1">
          {locales.map((l) => (
            <li key={l}>
              <Link href={`/${l}`} hrefLang={localeMeta[l].hreflang} lang={localeMeta[l].hreflang} className="hover:text-slate-900">
                {localeMeta[l].label}
              </Link>
            </li>
          ))}
        </ul>
        <p className="text-xs text-slate-500">
          © {new Date().getFullYear()} {siteConfig.name}. {t.rights}
        </p>
      </div>
    </footer>
  );
}

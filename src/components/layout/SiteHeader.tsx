import Link from "next/link";
import { siteConfig } from "@/config/site";
import { toolPath, toolSlugs } from "@/config/tools";
import type { Locale } from "@/i18n/config";
import type { Messages } from "@/i18n/messages/en";
import type { SiteMessages } from "@/i18n/site";
import type { ToolsMessages } from "@/i18n/tools";
import type { MoreMessages } from "@/i18n/more";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { MobileMenu } from "./MobileMenu";
import { SiteSearch } from "./SiteSearch";

export function Logo() {
  return (
    <svg viewBox="0 0 32 32" className="h-8 w-8" aria-hidden>
      <rect width="32" height="32" rx="8" fill="#1d4ed8" />
      <rect x="7" y="9" width="5" height="16" rx="2" fill="#fff" />
      <rect x="14" y="14" width="5" height="11" rx="2" fill="#93c5fd" />
      <rect x="21" y="6" width="5" height="19" rx="2" fill="#fff" />
    </svg>
  );
}

type Props = { locale: Locale; t: Messages["nav"]; site: SiteMessages; tools: ToolsMessages; more: MoreMessages; boardDefaultName: string };

export function SiteHeader({ locale, t, site, tools, more, boardDefaultName }: Props) {
  const toolLinks = toolSlugs.map((s) => ({ href: `/${locale}${toolPath(s)}`, label: tools.names[s].name }));
  const pages = [
    { href: `/${locale}`, title: t.tool },
    { href: `/${locale}/tools`, title: tools.common.hubH1 },
    ...toolSlugs.map((s) => ({ href: `/${locale}${toolPath(s)}`, title: tools.names[s].name, description: tools.names[s].blurb })),
    { href: `/${locale}/height`, title: more.people.h1, description: more.people.intro },
    { href: `/${locale}/guides`, title: more.guides.h1, description: more.guides.intro },
    { href: `/${locale}/privacy`, title: site.privacy },
    { href: `/${locale}/terms`, title: site.terms },
  ];

  return (
    <header className="sticky top-0 z-20 border-b border-slate-200/80 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-3 px-4">
        <Link href={`/${locale}`} className="flex shrink-0 items-center gap-2 font-bold tracking-tight text-slate-900">
          <Logo />
          <span className="hidden min-[380px]:inline">{siteConfig.name}</span>
        </Link>
        <nav className="flex items-center gap-1.5 sm:gap-2" aria-label={site.menu}>
          <Link href={`/${locale}`} className="hidden rounded-lg px-3 py-1.5 text-sm font-medium text-slate-600 hover:bg-slate-100 lg:block">
            {t.tool}
          </Link>
          <Link href={`/${locale}/tools`} className="hidden rounded-lg px-3 py-1.5 text-sm font-medium text-slate-600 hover:bg-slate-100 sm:block">
            {t.tools}
          </Link>
          <SiteSearch
            locale={locale}
            pages={pages}
            defaultPerson={boardDefaultName}
            t={{
              search: site.search,
              searchPlaceholder: site.searchPlaceholder,
              searchEmpty: site.searchEmpty,
              searchPages: site.searchPages,
              searchLibrary: site.searchLibrary,
              close: site.close,
            }}
          />
          <LanguageSwitcher locale={locale} label={t.language} />
          <MobileMenu
            items={[
              { href: `/${locale}`, label: t.tool },
              { href: `/${locale}/tools`, label: t.tools },
              ...toolLinks,
              { href: `/${locale}/height`, label: more.people.h1 },
              { href: `/${locale}/guides`, label: more.guides.h1 },
            ]}
            legal={[
              { href: `/${locale}/privacy`, label: site.privacy },
              { href: `/${locale}/terms`, label: site.terms },
            ]}
            t={{ menu: site.menu, close: site.close }}
          />
        </nav>
      </div>
      <div className="scroll-progress" aria-hidden />
    </header>
  );
}

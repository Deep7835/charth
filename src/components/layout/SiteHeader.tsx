import Link from "next/link";
import { siteConfig } from "@/config/site";
import type { Locale } from "@/i18n/config";
import type { Messages } from "@/i18n/messages/en";
import { LanguageSwitcher } from "./LanguageSwitcher";

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

export function SiteHeader({ locale, t }: { locale: Locale; t: Messages["nav"] }) {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200/80 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-4 px-4">
        <Link href={`/${locale}`} className="flex items-center gap-2 font-bold tracking-tight text-slate-900">
          <Logo />
          <span>{siteConfig.name}</span>
        </Link>
        <nav className="flex items-center gap-2">
          <Link href={`/${locale}`} className="hidden rounded-lg px-3 py-1.5 text-sm font-medium text-slate-600 hover:bg-slate-100 sm:block">
            {t.tool}
          </Link>
          <Link href={`/${locale}/tools`} className="rounded-lg px-3 py-1.5 text-sm font-medium text-slate-600 hover:bg-slate-100">
            {t.tools}
          </Link>
          <LanguageSwitcher locale={locale} label={t.language} />
        </nav>
      </div>
    </header>
  );
}

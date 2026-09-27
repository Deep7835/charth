import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { siteConfig } from "@/config/site";
import { hasLocale, localeMeta, locales } from "@/i18n/config";
import { getMessages } from "@/i18n/messages";
import { getToolsMessages } from "@/i18n/tools";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import "../globals.css";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#1d4ed8",
  width: "device-width",
  initialScale: 1,
};

export default async function LocaleLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const [t, tools] = await Promise.all([getMessages(lang), getToolsMessages(lang)]);

  return (
    <html lang={localeMeta[lang].hreflang} dir={localeMeta[lang].dir}>
      <body className="min-h-screen bg-white text-slate-900 antialiased">
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:start-2 focus:top-2 focus:z-50 focus:rounded focus:bg-white focus:px-3 focus:py-2">
          {t.nav.skip}
        </a>
        <SiteHeader locale={lang} t={t.nav} />
        <main id="main">{children}</main>
        <SiteFooter locale={lang} t={t.footer} tools={tools} />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { absoluteUrl, siteConfig } from "@/config/site";
import { defaultLocale, localeMeta, locales, type Locale } from "@/i18n/config";

/** `path` excludes the locale prefix, e.g. "" for home or "/tools/height-converter". */
export function localizedPath(locale: Locale, path = "") {
  return `/${locale}${path}`;
}

export function alternates(locale: Locale, path = ""): Metadata["alternates"] {
  const languages: Record<string, string> = {};
  for (const l of locales) languages[localeMeta[l].hreflang] = localizedPath(l, path);
  languages["x-default"] = localizedPath(defaultLocale, path);
  return { canonical: localizedPath(locale, path), languages };
}

export function pageMetadata({
  locale,
  path = "",
  title,
  description,
}: {
  locale: Locale;
  path?: string;
  title: string;
  description: string;
}): Metadata {
  const url = localizedPath(locale, path);
  return {
    title,
    description,
    alternates: alternates(locale, path),
    openGraph: {
      type: "website",
      url,
      title,
      description,
      siteName: siteConfig.name,
      locale: localeMeta[locale].ogLocale,
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

export function jsonLd(data: unknown) {
  return { __html: JSON.stringify(data).replace(/</g, "\\u003c") };
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export function webAppSchema({ locale, name, description, path = "" }: { locale: Locale; name: string; description: string; path?: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name,
    description,
    url: absoluteUrl(localizedPath(locale, path)),
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Any",
    inLanguage: localeMeta[locale].hreflang,
    isAccessibleForFree: true,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  };
}

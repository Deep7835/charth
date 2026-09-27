import type { Locale } from "./config";
import type { SiteMessages } from "./site/en";

const loaders: Record<Locale, () => Promise<{ default: SiteMessages }>> = {
  en: () => import("./site/en"),
  es: () => import("./site/es"),
  "pt-br": () => import("./site/pt-br"),
  hi: () => import("./site/hi"),
  id: () => import("./site/id"),
  tr: () => import("./site/tr"),
  vi: () => import("./site/vi"),
  de: () => import("./site/de"),
  fr: () => import("./site/fr"),
  ja: () => import("./site/ja"),
  ko: () => import("./site/ko"),
  ru: () => import("./site/ru"),
  it: () => import("./site/it"),
  ar: () => import("./site/ar"),
};

export async function getSiteMessages(locale: Locale): Promise<SiteMessages> {
  return (await loaders[locale]()).default;
}

export type { SiteMessages };

import type { Locale } from "./config";
import type { MoreMessages } from "./more/en";

const loaders: Record<Locale, () => Promise<{ default: MoreMessages }>> = {
  en: () => import("./more/en"),
  es: () => import("./more/es"),
  "pt-br": () => import("./more/pt-br"),
  hi: () => import("./more/hi"),
  id: () => import("./more/id"),
  tr: () => import("./more/tr"),
  vi: () => import("./more/vi"),
  de: () => import("./more/de"),
  fr: () => import("./more/fr"),
  ja: () => import("./more/ja"),
  ko: () => import("./more/ko"),
  ru: () => import("./more/ru"),
  it: () => import("./more/it"),
  ar: () => import("./more/ar"),
};

export async function getMoreMessages(locale: Locale): Promise<MoreMessages> {
  return (await loaders[locale]()).default;
}

export type { MoreMessages };

import type { Locale } from "./config";
import type { HugMessages } from "./hug/en";

const loaders: Record<Locale, () => Promise<{ default: HugMessages }>> = {
  en: () => import("./hug/en"),
  es: () => import("./hug/es"),
  "pt-br": () => import("./hug/pt-br"),
  hi: () => import("./hug/hi"),
  id: () => import("./hug/id"),
  tr: () => import("./hug/tr"),
  vi: () => import("./hug/vi"),
  de: () => import("./hug/de"),
  fr: () => import("./hug/fr"),
  ja: () => import("./hug/ja"),
  ko: () => import("./hug/ko"),
  ru: () => import("./hug/ru"),
  it: () => import("./hug/it"),
  ar: () => import("./hug/ar"),
};

export async function getHugMessages(locale: Locale): Promise<HugMessages> {
  return (await loaders[locale]()).default;
}

export type { HugMessages };

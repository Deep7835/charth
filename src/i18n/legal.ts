import type { Locale } from "./config";
import type { LegalMessages } from "./legal/en";

const loaders: Record<Locale, () => Promise<{ default: LegalMessages }>> = {
  en: () => import("./legal/en"),
  es: () => import("./legal/es"),
  "pt-br": () => import("./legal/pt-br"),
  hi: () => import("./legal/hi"),
  id: () => import("./legal/id"),
  tr: () => import("./legal/tr"),
  vi: () => import("./legal/vi"),
  de: () => import("./legal/de"),
  fr: () => import("./legal/fr"),
  ja: () => import("./legal/ja"),
  ko: () => import("./legal/ko"),
  ru: () => import("./legal/ru"),
  it: () => import("./legal/it"),
  ar: () => import("./legal/ar"),
};

export async function getLegalMessages(locale: Locale): Promise<LegalMessages> {
  return (await loaders[locale]()).default;
}

export type { LegalMessages };

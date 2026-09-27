import type { Locale } from "./config";
import type { GuidesMessages } from "./guides/en";

const loaders: Record<Locale, () => Promise<{ default: GuidesMessages }>> = {
  en: () => import("./guides/en"),
  es: () => import("./guides/es"),
  "pt-br": () => import("./guides/pt-br"),
  hi: () => import("./guides/hi"),
  id: () => import("./guides/id"),
  tr: () => import("./guides/tr"),
  vi: () => import("./guides/vi"),
  de: () => import("./guides/de"),
  fr: () => import("./guides/fr"),
  ja: () => import("./guides/ja"),
  ko: () => import("./guides/ko"),
  ru: () => import("./guides/ru"),
  it: () => import("./guides/it"),
  ar: () => import("./guides/ar"),
};

export async function getGuides(locale: Locale): Promise<GuidesMessages> {
  return (await loaders[locale]()).default;
}

export type { GuidesMessages };

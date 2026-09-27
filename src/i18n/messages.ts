import type { Locale } from "./config";
import type { Messages } from "./messages/en";

const loaders: Record<Locale, () => Promise<{ default: Messages }>> = {
  en: () => import("./messages/en"),
  es: () => import("./messages/es"),
  "pt-br": () => import("./messages/pt-br"),
  hi: () => import("./messages/hi"),
  id: () => import("./messages/id"),
  tr: () => import("./messages/tr"),
  vi: () => import("./messages/vi"),
  de: () => import("./messages/de"),
  fr: () => import("./messages/fr"),
  ja: () => import("./messages/ja"),
  ko: () => import("./messages/ko"),
  ru: () => import("./messages/ru"),
  it: () => import("./messages/it"),
  ar: () => import("./messages/ar"),
};

export async function getMessages(locale: Locale): Promise<Messages> {
  return (await loaders[locale]()).default;
}

export type { Messages };

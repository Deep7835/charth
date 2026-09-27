import type { Locale } from "./config";
import type { ToolsMessages } from "./tools/en";

const loaders: Record<Locale, () => Promise<{ default: ToolsMessages }>> = {
  en: () => import("./tools/en"),
  es: () => import("./tools/es"),
  "pt-br": () => import("./tools/pt-br"),
  hi: () => import("./tools/hi"),
  id: () => import("./tools/id"),
  tr: () => import("./tools/tr"),
  vi: () => import("./tools/vi"),
  de: () => import("./tools/de"),
  fr: () => import("./tools/fr"),
  ja: () => import("./tools/ja"),
  ko: () => import("./tools/ko"),
  ru: () => import("./tools/ru"),
  it: () => import("./tools/it"),
  ar: () => import("./tools/ar"),
};

export async function getToolsMessages(locale: Locale): Promise<ToolsMessages> {
  return (await loaders[locale]()).default;
}

export type { ToolsMessages };

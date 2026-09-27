import type { ToolSlug } from "@/config/tools";
import type { Locale } from "./config";
import { getMoreMessages } from "./more";
import type { ToolsMessages as BaseToolsMessages } from "./tools/en";

/** Tool strings plus the names of every tool (some live in the Phase 4 "more" namespace). */
export type ToolsMessages = Omit<BaseToolsMessages, "names"> & {
  names: Record<ToolSlug, { name: string; blurb: string }>;
};

const loaders: Record<Locale, () => Promise<{ default: BaseToolsMessages }>> = {
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
  const [base, more] = await Promise.all([loaders[locale]().then((m) => m.default), getMoreMessages(locale)]);
  return { ...base, names: { ...base.names, ...more.names } };
}

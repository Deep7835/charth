import type { Locale } from "./config";
import type { ThreeMessages } from "./three/en";

const loaders: Record<Locale, () => Promise<{ default: ThreeMessages }>> = {
  en: () => import("./three/en"),
  es: () => import("./three/es"),
  "pt-br": () => import("./three/pt-br"),
  hi: () => import("./three/hi"),
  id: () => import("./three/id"),
  tr: () => import("./three/tr"),
  vi: () => import("./three/vi"),
  de: () => import("./three/de"),
  fr: () => import("./three/fr"),
  ja: () => import("./three/ja"),
  ko: () => import("./three/ko"),
  ru: () => import("./three/ru"),
  it: () => import("./three/it"),
  ar: () => import("./three/ar"),
};

export async function getThreeMessages(locale: Locale): Promise<ThreeMessages> {
  return (await loaders[locale]()).default;
}

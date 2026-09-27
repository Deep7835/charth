export const locales = ["en", "es", "pt-br", "hi", "id", "tr", "vi", "de", "fr", "ja", "ko", "ru", "it", "ar"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

type LocaleMeta = {
  /** Native language name shown in the switcher. */
  label: string;
  /** Value for hreflang and og:locale. */
  hreflang: string;
  ogLocale: string;
  dir: "ltr" | "rtl";
  /** Countries that use imperial (ft/in) by default. */
  imperial: boolean;
};

export const localeMeta: Record<Locale, LocaleMeta> = {
  en: { label: "English", hreflang: "en", ogLocale: "en_US", dir: "ltr", imperial: true },
  es: { label: "Español", hreflang: "es", ogLocale: "es_ES", dir: "ltr", imperial: false },
  "pt-br": { label: "Português (Brasil)", hreflang: "pt-BR", ogLocale: "pt_BR", dir: "ltr", imperial: false },
  hi: { label: "हिन्दी", hreflang: "hi", ogLocale: "hi_IN", dir: "ltr", imperial: true },
  id: { label: "Bahasa Indonesia", hreflang: "id", ogLocale: "id_ID", dir: "ltr", imperial: false },
  tr: { label: "Türkçe", hreflang: "tr", ogLocale: "tr_TR", dir: "ltr", imperial: false },
  vi: { label: "Tiếng Việt", hreflang: "vi", ogLocale: "vi_VN", dir: "ltr", imperial: false },
  de: { label: "Deutsch", hreflang: "de", ogLocale: "de_DE", dir: "ltr", imperial: false },
  fr: { label: "Français", hreflang: "fr", ogLocale: "fr_FR", dir: "ltr", imperial: false },
  ja: { label: "日本語", hreflang: "ja", ogLocale: "ja_JP", dir: "ltr", imperial: false },
  ko: { label: "한국어", hreflang: "ko", ogLocale: "ko_KR", dir: "ltr", imperial: false },
  ru: { label: "Русский", hreflang: "ru", ogLocale: "ru_RU", dir: "ltr", imperial: false },
  it: { label: "Italiano", hreflang: "it", ogLocale: "it_IT", dir: "ltr", imperial: false },
  ar: { label: "العربية", hreflang: "ar", ogLocale: "ar_AR", dir: "rtl", imperial: false },
};

export function hasLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** Country (ISO alpha-2) used as the default in data tools for each language. */
export const defaultCountry: Record<Locale, string> = {
  en: "US",
  es: "MX",
  "pt-br": "BR",
  hi: "IN",
  id: "ID",
  tr: "TR",
  vi: "VN",
  de: "DE",
  fr: "FR",
  ja: "JP",
  ko: "KR",
  ru: "RU",
  it: "IT",
  ar: "SA",
};

import { library, type LibraryItem } from "@/data/library";
import { ADULT_SD, WORLD } from "@/data/heightByCountry";
import type { Locale } from "@/i18n/config";
import { normalCdf } from "./stats";

/** People and characters that get their own height page (not objects, animals or world averages). */
export const people: LibraryItem[] = library.filter(
  (item) => (item.kind === "male" || item.kind === "female") && !item.id.startsWith("average-"),
);

export const personById = new Map(people.map((p) => [p.id, p]));

const scripts: Partial<Record<Locale, RegExp>> = {
  ja: /[぀-ヿ一-鿿]/,
  ko: /[가-힯]/,
  ru: /[Ѐ-ӿ]/,
  hi: /[ऀ-ॿ]/,
  ar: /[؀-ۿ]/,
};

/** Native-script name for the page's language when the library has one (ルフィ, विराट कोहली), else the canonical name. */
export function personName(item: LibraryItem, locale: Locale) {
  const re = scripts[locale];
  return (re && item.aliases?.find((a) => re.test(a))) || item.name;
}

export function sexOf(item: LibraryItem): "male" | "female" {
  return item.kind === "female" ? "female" : "male";
}

/** Share (0–100) of adults of the same sex worldwide who are shorter. */
export function worldPercentile(item: LibraryItem) {
  const sex = sexOf(item);
  return normalCdf((item.heightCm - WORLD[sex]) / ADULT_SD[sex]) * 100;
}

/** Closest heights among other people, for "about the same height" links. */
export function similarPeople(item: LibraryItem, count = 6) {
  return people
    .filter((p) => p.id !== item.id)
    .sort((a, b) => Math.abs(a.heightCm - item.heightCm) - Math.abs(b.heightCm - item.heightCm) || a.name.localeCompare(b.name))
    .slice(0, count);
}

import { library, type LibraryItem } from "@/data/library";
import { ADULT_SD, WORLD } from "@/data/heightByCountry";
import { nativeNames, nicknames } from "@/data/nativeNames";
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

/** Native-script name for the page's language (ルフィ, Неймар, विराट कोहली), else the canonical name. */
export function personName(item: LibraryItem, locale: Locale) {
  const native = nativeNames[item.id]?.[locale];
  if (native) return native;
  const re = scripts[locale];
  return (re && item.aliases?.find((a) => re.test(a))) || item.name;
}

export function nicknameOf(item: LibraryItem) {
  return nicknames[item.id];
}

/**
 * Name as people type it into search. Hindi pages use the Latin name because
 * Indian users mostly search celebrity names in Latin script ("virat kohli height").
 */
export function personSearchName(item: LibraryItem, locale: Locale) {
  return locale === "hi" ? item.name : personName(item, locale);
}

/** Name used in <title>: the search name plus a widely searched nickname ("Cristiano Ronaldo (CR7)"). */
export function personTitleName(item: LibraryItem, locale: Locale) {
  const base = personSearchName(item, locale);
  const nick = nicknameOf(item);
  return nick && !base.includes(nick) ? `${base} (${nick})` : base;
}

/** Famous, frequently searched head-to-head pairs. */
const rivals: Record<string, string> = {
  "lionel-messi": "cristiano-ronaldo",
  "cristiano-ronaldo": "lionel-messi",
  neymar: "lionel-messi",
  "kylian-mbappe": "erling-haaland",
  "erling-haaland": "kylian-mbappe",
  "lebron-james": "michael-jordan",
  "michael-jordan": "lebron-james",
  "kobe-bryant": "michael-jordan",
  "stephen-curry": "lebron-james",
  "kevin-durant": "lebron-james",
  "giannis-antetokounmpo": "kevin-durant",
  "victor-wembanyama": "yao-ming",
  "yao-ming": "shaquille-oneal",
  "shaquille-oneal": "yao-ming",
  "luka-doncic": "lebron-james",
  "muggsy-bogues": "shaquille-oneal",
  "roger-federer": "novak-djokovic",
  "novak-djokovic": "roger-federer",
  "virat-kohli": "sachin-tendulkar",
  "sachin-tendulkar": "virat-kohli",
  "shah-rukh-khan": "amitabh-bachchan",
  "amitabh-bachchan": "shah-rukh-khan",
  "deepika-padukone": "shah-rukh-khan",
  "donald-trump": "barack-obama",
  "barack-obama": "donald-trump",
  "elon-musk": "donald-trump",
  "tom-holland": "zendaya",
  zendaya: "tom-holland",
  "tom-cruise": "dwayne-johnson",
  "dwayne-johnson": "kevin-hart",
  "kevin-hart": "dwayne-johnson",
  "taylor-swift": "selena-gomez",
  "selena-gomez": "taylor-swift",
  "ariana-grande": "selena-gomez",
  "mike-tyson": "dwayne-johnson",
  naruto: "sasuke",
  sasuke: "naruto",
  goku: "vegeta",
  vegeta: "goku",
  luffy: "zoro",
  zoro: "luffy",
  "levi-ackerman": "eren-yeager",
  "eren-yeager": "levi-ackerman",
  "tanjiro-kamado": "nezuko-kamado",
  "nezuko-kamado": "tanjiro-kamado",
  "robert-wadlow": "sultan-kosen",
  "sultan-kosen": "robert-wadlow",
};

/** The comparison shown in titles and on the page: a curated rival, else the nearest height in the same category. */
export function rivalOf(item: LibraryItem): LibraryItem {
  const curated = rivals[item.id] && personById.get(rivals[item.id]);
  if (curated) return curated;
  const pool = people.filter((p) => p.id !== item.id);
  const sameCategory = pool.filter((p) => p.category === item.category);
  const byDistance = (a: LibraryItem, b: LibraryItem) => Math.abs(a.heightCm - item.heightCm) - Math.abs(b.heightCm - item.heightCm);
  return [...(sameCategory.length ? sameCategory : pool)].sort(byDistance)[0];
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

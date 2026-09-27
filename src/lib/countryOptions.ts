import { countryHeights } from "@/data/heightByCountry";
import { countryNamer } from "./countryNames";

/** All countries with data, localized and sorted for a <select>. */
export function countryOptions(locale: string) {
  const nameOf = countryNamer(locale);
  return countryHeights
    .map((c) => ({ code: c.code, name: nameOf(c.code, c.name) }))
    .sort((a, b) => a.name.localeCompare(b.name, locale));
}

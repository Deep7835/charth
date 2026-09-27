// Write src/data/heightByCountry.ts and heightByAge.ts from raw/compact.json.
const countries = require("i18n-iso-countries");
const fs = require("fs");
const path = require("path");
const data = JSON.parse(fs.readFileSync(path.join(__dirname, "raw/compact.json"), "utf8"));
const rows = data.map((d) => {
  const iso2 = countries.alpha3ToAlpha2(d.iso3);
  if (!iso2) throw new Error("no iso2 for " + d.iso3 + " " + d.name);
  return { d, iso2 };
}).sort((a, b) => a.iso2.localeCompare(b.iso2));
const ages = Array.from({ length: 15 }, (_, i) => i + 5);
let adult = `// Generated from NCD-RisC (Lancet 2020) — mean height at age 19 in 2019, and 1985 for trend.
// Source: https://www.ncdrisc.org/data-downloads-height.html (CC BY 4.0). Do not edit by hand.

export type CountryHeight = {
  /** ISO 3166-1 alpha-2, used for Intl.DisplayNames and URLs. */
  code: string;
  /** English name as published by NCD-RisC (fallback label). */
  name: string;
  male: number;
  female: number;
  male1985: number;
  female1985: number;
};

export const DATA_YEAR = ${data[0].year};

// [code, name, male, female, male1985, female1985]
const rows: [string, string, number, number, number, number][] = [
`;
for (const { d, iso2 } of rows) adult += `  [${JSON.stringify(iso2)}, ${JSON.stringify(d.name)}, ${d.m[19]}, ${d.f[19]}, ${d.m1985}, ${d.f1985}],\n`;
adult += `];

export const countryHeights: CountryHeight[] = rows.map(([code, name, male, female, male1985, female1985]) => ({
  code,
  name,
  male,
  female,
  male1985,
  female1985,
}));

export const countryByCode = new Map(countryHeights.map((c) => [c.code, c]));

/** Global means at age 19 (NCD-RisC global series). */
export const WORLD = { male: 170.8, female: 158.6, male1985: 168.0, female1985: 156.5 };

/** Typical within-population standard deviation of adult height (cm), used for percentile estimates. */
export const ADULT_SD = { male: 7.1, female: 6.6 };
`;
fs.writeFileSync(path.join(__dirname, "../../src/data/heightByCountry.ts"), adult);
let kids = `// Generated from NCD-RisC (Lancet 2020) — mean height by age 5–19 in ${data[0].year}. CC BY 4.0. Do not edit by hand.

export const CHILD_AGES = [${ages.join(", ")}] as const;

/** code → [boys by age 5..19, girls by age 5..19] in cm */
export const heightByAge: Record<string, [number[], number[]]> = {
`;
for (const { d, iso2 } of rows) kids += `  ${iso2}: [[${ages.map((a) => d.m[a]).join(", ")}], [${ages.map((a) => d.f[a]).join(", ")}]],\n`;
kids += "};\n";
fs.writeFileSync(path.join(__dirname, "../../src/data/heightByAge.ts"), kids);
console.log(rows.length, "countries; sizes", "written");

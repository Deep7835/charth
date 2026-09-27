import { heightByAge, CHILD_AGES } from "@/data/heightByAge";

export type Sex = "male" | "female";

const FIRST_AGE = CHILD_AGES[0];
const ADULT_AGE = CHILD_AGES[CHILD_AGES.length - 1];

/** National mean height (cm) at a given age 5–19, or null if unknown. */
export function meanAtAge(country: string, sex: Sex, age: number): number | null {
  const row = heightByAge[country]?.[sex === "male" ? 0 : 1];
  if (!row || age < FIRST_AGE || age > ADULT_AGE) return null;
  return row[age - FIRST_AGE] ?? null;
}

/**
 * Mid-parental target height (Tanner): average of the parents' heights,
 * +6.5 cm for boys / −6.5 cm for girls. Most children fall within ±8.5 cm.
 */
export function midParental(fatherCm: number, motherCm: number, sex: Sex) {
  const target = (fatherCm + motherCm + (sex === "male" ? 13 : -13)) / 2;
  return { target, low: target - 8.5, high: target + 8.5 };
}

/** Projects current height along the national average curve (same relative position until age 19). */
export function projectFromCurrent(country: string, sex: Sex, age: number, heightCm: number) {
  const now = meanAtAge(country, sex, age);
  const adult = meanAtAge(country, sex, ADULT_AGE);
  if (!now || !adult || age > 17) return null;
  return (heightCm / now) * adult;
}

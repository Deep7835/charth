import type { Unit } from "./units";

export const LB_PER_KG = 2.20462;

export type BmiCategory = "underweight" | "normal" | "overweight" | "obese";

/** WHO adult BMI categories. */
export function bmiCategory(bmi: number): BmiCategory {
  if (bmi < 18.5) return "underweight";
  if (bmi < 25) return "normal";
  if (bmi < 30) return "overweight";
  return "obese";
}

/** Weight range (kg) for a healthy adult BMI of 18.5–24.9 at a given height. */
export function healthyWeightKg(heightCm: number) {
  const m = heightCm / 100;
  return { low: 18.5 * m * m, high: 24.9 * m * m };
}

export function formatWeight(kg: number, unit: Unit) {
  return unit === "cm" ? `${kg.toFixed(1)} kg` : `${Math.round(kg * LB_PER_KG)} lb`;
}

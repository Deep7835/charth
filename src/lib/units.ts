export type Unit = "cm" | "ft";

export const CM_PER_INCH = 2.54;

export function cmToFtIn(cm: number) {
  const totalInches = cm / CM_PER_INCH;
  let feet = Math.floor(totalInches / 12);
  let inches = Math.round(totalInches - feet * 12);
  if (inches === 12) {
    feet += 1;
    inches = 0;
  }
  return { feet, inches };
}

export function ftInToCm(feet: number, inches: number) {
  return (feet * 12 + inches) * CM_PER_INCH;
}

function trimNumber(n: number, digits = 1) {
  return Number(n.toFixed(digits)).toString();
}

/** "185 cm", "1.2 m" or "2.3 km" depending on magnitude. */
export function formatMetric(cm: number) {
  if (cm >= 100_000) return `${trimNumber(cm / 100_000, 2)} km`;
  if (cm >= 1_000) return `${trimNumber(cm / 100, 2)} m`;
  return `${trimNumber(cm)} cm`;
}

/** `6′ 1″` for people-sized values, feet only or miles for huge ones. */
export function formatImperial(cm: number) {
  const inchesTotal = cm / CM_PER_INCH;
  if (inchesTotal >= 5280 * 12) return `${trimNumber(inchesTotal / 12 / 5280, 2)} mi`;
  if (inchesTotal >= 1200) return `${Math.round(inchesTotal / 12).toLocaleString("en-US")} ft`;
  if (inchesTotal < 12) return `${trimNumber(inchesTotal)}″`;
  const { feet, inches } = cmToFtIn(cm);
  return `${feet}′ ${inches}″`;
}

export function formatHeight(cm: number, unit: Unit) {
  return unit === "cm" ? formatMetric(cm) : formatImperial(cm);
}

/** Pick the readable grid step (1, 2, 2.5, 5 × 10^n) closest to `targetLines` lines. */
export function niceStep(span: number, targetLines = 8) {
  const raw = span / targetLines;
  const power = 10 ** Math.floor(Math.log10(raw));
  const normalized = raw / power;
  const candidates = [1, 2, 2.5, 5, 10];
  const nice = candidates.reduce((best, c) =>
    Math.abs(Math.log(c / normalized)) < Math.abs(Math.log(best / normalized)) ? c : best,
  );
  return nice * power;
}

/** Imperial grid steps expressed in cm: 1 in, 3 in, 6 in, 1 ft, 2 ft, 5 ft, 10 ft … */
export function niceImperialStep(spanCm: number, targetLines = 8) {
  const raw = spanCm / targetLines / CM_PER_INCH;
  const inchSteps = [1, 2, 3, 6, 12, 24, 36, 60, 120, 240, 600, 1200, 2400, 6000, 12000, 60000];
  const step = inchSteps.find((s) => s >= raw) ?? Math.ceil(raw / 60000) * 60000;
  return step * CM_PER_INCH;
}

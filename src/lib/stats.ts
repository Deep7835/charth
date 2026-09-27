/** Standard normal CDF (Abramowitz–Stegun 7.1.26, |error| < 1.5e-7). */
export function normalCdf(z: number) {
  const t = 1 / (1 + 0.3275911 * Math.abs(z) / Math.SQRT2);
  const poly = t * (0.254829592 + t * (-0.284496736 + t * (1.421413741 + t * (-1.453152027 + t * 1.061405429))));
  const erf = 1 - poly * Math.exp(-(z * z) / 2);
  return z >= 0 ? (1 + erf) / 2 : (1 - erf) / 2;
}

export function percentileOf(value: number, mean: number, sd: number) {
  return normalCdf((value - mean) / sd) * 100;
}

/** "93.4%", or "> 99.9%" / "< 0.1%" at the extremes. */
export function formatPercent(p: number, locale?: string) {
  if (p >= 99.95) return "> 99.9%";
  if (p <= 0.05) return "< 0.1%";
  return `${p.toLocaleString(locale, { maximumFractionDigits: 1, minimumFractionDigits: 1 })}%`;
}

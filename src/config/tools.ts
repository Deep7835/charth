export const toolSlugs = [
  "height-converter",
  "height-difference-calculator",
  "average-height-by-country",
  "height-percentile-calculator",
  "hug-simulator",
  "3d-height-comparison",
  "height-predictor",
  "growth-chart",
  "bmi-calculator",
] as const;

export type ToolSlug = (typeof toolSlugs)[number];

export const toolIcons: Record<ToolSlug, string> = {
  "height-converter": "⇄",
  "height-difference-calculator": "↕",
  "average-height-by-country": "🌍",
  "height-percentile-calculator": "%",
  "hug-simulator": "🫂",
  "3d-height-comparison": "3D",
  "height-predictor": "↗",
  "growth-chart": "📈",
  "bmi-calculator": "⚖",
};

export function toolPath(slug: ToolSlug) {
  return `/tools/${slug}`;
}

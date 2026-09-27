export const toolSlugs = [
  "height-converter",
  "height-difference-calculator",
  "average-height-by-country",
  "height-percentile-calculator",
  "hug-simulator",
  "3d-height-comparison",
] as const;

export type ToolSlug = (typeof toolSlugs)[number];

export const toolIcons: Record<ToolSlug, string> = {
  "height-converter": "⇄",
  "height-difference-calculator": "↕",
  "average-height-by-country": "🌍",
  "height-percentile-calculator": "%",
  "hug-simulator": "🫂",
  "3d-height-comparison": "3D",
};

export function toolPath(slug: ToolSlug) {
  return `/tools/${slug}`;
}

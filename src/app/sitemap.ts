import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/config/site";
import { toolPath, toolSlugs } from "@/config/tools";
import { defaultLocale, localeMeta, locales } from "@/i18n/config";

/** Paths (without locale) that exist in every language. */
const routes: { path: string; priority: number }[] = [
  { path: "", priority: 1 },
  { path: "/tools", priority: 0.6 },
  ...toolSlugs.map((slug) => ({ path: toolPath(slug), priority: 0.8 })),
  { path: "/privacy", priority: 0.2 },
  { path: "/terms", priority: 0.2 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.flatMap(({ path, priority }) =>
    locales.map((locale) => ({
      url: absoluteUrl(`/${locale}${path}`),
      lastModified,
      changeFrequency: "weekly" as const,
      priority: locale === defaultLocale ? priority : priority * 0.9,
      alternates: {
        languages: {
          ...Object.fromEntries(locales.map((l) => [localeMeta[l].hreflang, absoluteUrl(`/${l}${path}`)])),
          "x-default": absoluteUrl(`/${defaultLocale}${path}`),
        },
      },
    })),
  );
}

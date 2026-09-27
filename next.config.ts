import type { NextConfig } from "next";

const securityHeaders = [
  // Force HTTPS for two years, including subdomains (hosting also redirects http → https).
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Content-Security-Policy", value: "frame-ancestors 'self'; upgrade-insecure-requests" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=()" },
];

/** Non-English locales and the Accept-Language primary tags that should land on them. */
const languageRedirects: [locale: string, tags: string][] = [
  ["es", "es"],
  ["pt-br", "pt"],
  ["hi", "hi"],
  ["id", "id|in"],
  ["tr", "tr"],
  ["vi", "vi"],
  ["de", "de"],
  ["fr", "fr"],
  ["ja", "ja"],
  ["ko", "ko"],
  ["ru", "ru"],
  ["it", "it"],
  ["ar", "ar"],
];

/** JS regexes have no inline (?i); match "es" and "ES" with character classes instead. */
const caseless = (pattern: string) => pattern.replace(/[a-z]/g, (c) => `[${c}${c.toUpperCase()}]`);

const nextConfig: NextConfig = {
  poweredByHeader: false,
  // OpenNext (Cloudflare) bundles the standalone output; only needed on Workers Builds.
  output: process.env.WORKERS_CI === "1" || process.env.OPENNEXT_BUILD === "1" ? "standalone" : undefined,
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
  async redirects() {
    return [
      // One canonical host: www → apex.
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.heightcomparechart.com" }],
        destination: "https://heightcomparechart.com/:path*",
        permanent: true,
      },
      // "/" → the visitor's preferred language (first tag in Accept-Language); crawlers get English.
      ...languageRedirects.map(([locale, tags]) => ({
        source: "/",
        has: [{ type: "header" as const, key: "accept-language", value: `^(?:${caseless(tags)})(?:[-_;,].*)?$` }],
        destination: `/${locale}`,
        permanent: false,
      })),
      { source: "/", destination: "/en", permanent: false },
    ];
  },
};

export default nextConfig;

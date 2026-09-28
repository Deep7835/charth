// Brand + domain live here so a rename is a one-file change.
export const siteConfig = {
  name: "HeightCompareChart",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://heightcomparechart.com").replace(/\/$/, ""),
  /** Shown on legal pages and the footer contact link. */
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@heightcomparechart.com",
  /** Google Analytics 4 measurement ID (loaded on every page); set NEXT_PUBLIC_GA_ID="" to disable. */
  gaId: process.env.NEXT_PUBLIC_GA_ID ?? "G-ZKPKJYVS4C",
  /** Google Search Console HTML-tag verification token. */
  googleSiteVerification: "Lei2srYyxW2jJO43NbTbblPs60fgWfPIMNx__JIRMOQ",
  /** Content revision date shown as “Last updated” and used for dateModified. */
  contentUpdated: "2026-09-27",
  legalUpdated: "2026-09-27",
};

export function absoluteUrl(path = "") {
  return `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;
}

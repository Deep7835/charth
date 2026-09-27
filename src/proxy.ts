import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, locales, type Locale } from "@/i18n/config";

function preferredLocale(header: string | null): Locale {
  if (!header) return defaultLocale;
  const ranked = header
    .split(",")
    .map((part) => {
      const [tag, q] = part.trim().split(";q=");
      return { tag: tag.toLowerCase(), q: q ? parseFloat(q) : 1 };
    })
    .sort((a, b) => b.q - a.q);
  for (const { tag } of ranked) {
    const exact = locales.find((l) => l === tag);
    if (exact) return exact;
    const base = tag.split("-")[0];
    if (base === "pt") return "pt-br";
    const byBase = locales.find((l) => l === base);
    if (byBase) return byBase;
  }
  return defaultLocale;
}

/** Send locale-less URLs to the visitor's language; crawlers without a header get English. */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const current = locales.find((l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`));
  if (current) {
    // Lets the localized 404 page know which language it is rendering for.
    const headers = new Headers(request.headers);
    headers.set("x-locale", current);
    return NextResponse.next({ request: { headers } });
  }
  const url = request.nextUrl.clone();
  url.pathname = `/${preferredLocale(request.headers.get("accept-language"))}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Skip Next internals, API routes and files with an extension (sitemap.xml, robots.txt, images).
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};

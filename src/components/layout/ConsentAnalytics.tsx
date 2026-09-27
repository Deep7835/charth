"use client";

import Link from "next/link";
import Script from "next/script";
import { useEffect, useState } from "react";

const KEY = "cookie-consent";
type Choice = "granted" | "denied" | null;

function readChoice(): Choice {
  try {
    const v = localStorage.getItem(KEY);
    return v === "granted" || v === "denied" ? v : null;
  } catch {
    return null;
  }
}

/** Opens the banner again (used by the footer “Cookie settings” link). */
export function openCookieSettings() {
  window.dispatchEvent(new Event("open-cookie-settings"));
}

export function CookieSettingsButton({ label }: { label: string }) {
  return (
    <button type="button" onClick={openCookieSettings} className="hover:text-slate-900">
      {label}
    </button>
  );
}

type Props = {
  gaId: string;
  locale: string;
  t: { cookieText: string; cookieAccept: string; cookieDecline: string; privacy: string };
};

/**
 * Cookie banner + Google Analytics 4. GA only loads after an explicit “Accept”
 * (basic consent mode); nothing is shown or loaded when no GA ID is configured.
 */
export function ConsentAnalytics({ gaId, locale, t }: Props) {
  const [choice, setChoice] = useState<Choice>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const saved = readChoice();
    /* eslint-disable react-hooks/set-state-in-effect -- read persisted consent once on mount */
    setChoice(saved);
    setOpen(!!gaId && saved === null);
    /* eslint-enable react-hooks/set-state-in-effect */
    const reopen = () => setOpen(true);
    window.addEventListener("open-cookie-settings", reopen);
    return () => window.removeEventListener("open-cookie-settings", reopen);
  }, [gaId]);

  const decide = (value: Exclude<Choice, null>) => {
    try {
      localStorage.setItem(KEY, value);
    } catch {
      /* choice still applies for this visit */
    }
    if (value === "denied" && choice === "granted") {
      // Withdrawing consent: stop tracking and clear GA cookies.
      const w = window as unknown as { gtag?: (...args: unknown[]) => void };
      w.gtag?.("consent", "update", { analytics_storage: "denied" });
      document.cookie.split(";").forEach((c) => {
        const name = c.split("=")[0].trim();
        if (name.startsWith("_ga")) document.cookie = `${name}=; Max-Age=0; path=/; domain=${location.hostname.replace(/^www\./, ".")}`;
      });
    }
    setChoice(value);
    setOpen(false);
  };

  if (!gaId) return null;

  return (
    <>
      {choice === "granted" && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
          <Script id="ga-init" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('consent','default',{analytics_storage:'granted',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied'});gtag('config','${gaId}',{anonymize_ip:true});`}
          </Script>
        </>
      )}
      {open && (
        <div
          role="dialog"
          aria-live="polite"
          aria-label={t.privacy}
          className="no-print fixed inset-x-3 bottom-3 z-40 mx-auto max-w-2xl rounded-2xl border border-slate-200 bg-white p-4 shadow-lg sm:flex sm:items-center sm:gap-4"
        >
          <p className="text-sm text-slate-700">
            {t.cookieText}{" "}
            <Link href={`/${locale}/privacy`} className="font-medium text-blue-700 underline">
              {t.privacy}
            </Link>
          </p>
          <div className="mt-3 flex shrink-0 gap-2 sm:mt-0">
            <button
              type="button"
              onClick={() => decide("denied")}
              className="rounded-lg border border-slate-200 px-3 py-1.5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              {t.cookieDecline}
            </button>
            <button
              type="button"
              onClick={() => decide("granted")}
              className="rounded-lg bg-blue-600 px-3 py-1.5 text-sm font-semibold text-white hover:bg-blue-700"
            >
              {t.cookieAccept}
            </button>
          </div>
        </div>
      )}
    </>
  );
}

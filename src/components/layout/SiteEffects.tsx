"use client";

import { useEffect, useState } from "react";

/** Back-to-top button, plus opening every FAQ before printing so answers aren't lost on paper. */
export function SiteEffects({ backToTop }: { backToTop: string }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700);
    const beforePrint = () => document.querySelectorAll("details").forEach((d) => (d.open = true));
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("beforeprint", beforePrint);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("beforeprint", beforePrint);
    };
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0 })}
      title={backToTop}
      className={`no-print fixed bottom-5 end-5 z-30 flex h-11 w-11 items-center justify-center rounded-full bg-slate-900 text-lg text-white shadow-lg transition ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      }`}
      tabIndex={visible ? 0 : -1}
    >
      <span aria-hidden>↑</span>
      <span className="sr-only">{backToTop}</span>
    </button>
  );
}

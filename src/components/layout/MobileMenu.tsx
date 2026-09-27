"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

type Item = { href: string; label: string };

/** Slide-down navigation for small screens (native <dialog> handles focus trapping and Esc). */
export function MobileMenu({ items, legal, t }: { items: Item[]; legal: Item[]; t: { menu: string; close: string } }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    dialog.current?.close();
  }, [pathname]);

  return (
    <>
      <button
        type="button"
        onClick={() => dialog.current?.showModal()}
        className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-lg text-slate-700 hover:bg-slate-50 sm:hidden"
        aria-haspopup="dialog"
      >
        <span aria-hidden>☰</span>
        <span className="sr-only">{t.menu}</span>
      </button>
      <dialog
        ref={dialog}
        className="m-0 ms-auto h-dvh max-h-none w-[min(86vw,340px)] bg-white p-0 text-slate-900 shadow-2xl backdrop:bg-slate-900/40"
        onClick={(e) => e.target === dialog.current && dialog.current?.close()}
      >
        <div className="flex h-14 items-center justify-between border-b border-slate-200 px-4">
          <span className="font-bold">{t.menu}</span>
          <button type="button" onClick={() => dialog.current?.close()} className="rounded-md px-2 py-1 text-sm text-slate-600 hover:bg-slate-100">
            {t.close} ✕
          </button>
        </div>
        <nav className="flex flex-col p-2">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-lg px-3 py-2.5 font-medium hover:bg-slate-50 ${pathname === item.href ? "bg-blue-50 text-blue-700" : "text-slate-800"}`}
            >
              {item.label}
            </Link>
          ))}
          <hr className="my-2 border-slate-200" />
          {legal.map((item) => (
            <Link key={item.href} href={item.href} className="rounded-lg px-3 py-2 text-sm text-slate-600 hover:bg-slate-50">
              {item.label}
            </Link>
          ))}
        </nav>
      </dialog>
    </>
  );
}

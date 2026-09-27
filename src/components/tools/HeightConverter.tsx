"use client";

import { useState } from "react";
import type { ToolsMessages } from "@/i18n/tools";
import { fmt } from "@/lib/fmt";
import { CM_PER_INCH, formatImperial } from "@/lib/units";

type Field = "cm" | "m" | "ft" | "in" | "totalIn";
type Texts = Record<Field, string>;

const round = (n: number, d: number) => String(Number(n.toFixed(d)));

function textsFromCm(cm: number, except?: Field): Partial<Texts> {
  const totalIn = cm / CM_PER_INCH;
  let feet = Math.floor(totalIn / 12);
  let inches = Number((totalIn - feet * 12).toFixed(1));
  if (inches >= 12) {
    feet += 1;
    inches = 0;
  }
  const all: Texts = {
    cm: round(cm, 1),
    m: round(cm / 100, 3),
    ft: String(feet),
    in: String(inches),
    totalIn: round(totalIn, 1),
  };
  if (except === "ft" || except === "in") {
    delete (all as Partial<Texts>).ft;
    delete (all as Partial<Texts>).in;
  } else if (except) delete (all as Partial<Texts>)[except];
  return all;
}

const input =
  "w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-lg font-semibold tabular-nums outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100";
const label = "mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-500";

export function HeightConverter({ t, copy }: { t: ToolsMessages["converter"]; copy: { copy: string; copied: string; copyFailed: string } }) {
  const [cm, setCm] = useState<number | null>(175);
  const [texts, setTexts] = useState<Texts>(() => textsFromCm(175) as Texts);
  const [copyState, setCopyState] = useState<"idle" | "done" | "failed">("idle");

  const onChange = (field: Field, value: string) => {
    const next = { ...texts, [field]: value };
    const n = (v: string) => (v.trim() === "" ? 0 : parseFloat(v.replace(",", ".")));
    let newCm: number | null = null;
    if (field === "cm") newCm = n(value);
    else if (field === "m") newCm = n(value) * 100;
    else if (field === "totalIn") newCm = n(value) * CM_PER_INCH;
    else newCm = (n(next.ft) * 12 + n(next.in)) * CM_PER_INCH;
    if (newCm !== null && Number.isFinite(newCm) && newCm > 0) {
      setCm(newCm);
      setTexts({ ...next, ...textsFromCm(newCm, field) });
    } else {
      setCm(null);
      setTexts(next);
    }
  };

  const totalIn = cm ? cm / CM_PER_INCH : 0;
  const feet = Math.floor(totalIn / 12);
  const exact = `${feet} ft ${(totalIn - feet * 12).toFixed(1)} in`;

  return (
    <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4 sm:p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor="conv-cm">
            {t.centimeters}
          </label>
          <input id="conv-cm" className={input} inputMode="decimal" value={texts.cm} onChange={(e) => onChange("cm", e.target.value)} />
        </div>
        <div>
          <span className={label}>{t.feetInches}</span>
          <div className="flex items-center gap-2">
            <input aria-label="ft" className={input} inputMode="numeric" value={texts.ft} onChange={(e) => onChange("ft", e.target.value)} />
            <span className="text-slate-500">ft</span>
            <input aria-label="in" className={input} inputMode="decimal" value={texts.in} onChange={(e) => onChange("in", e.target.value)} />
            <span className="text-slate-500">in</span>
          </div>
        </div>
        <div>
          <label className={label} htmlFor="conv-m">
            {t.meters}
          </label>
          <input id="conv-m" className={input} inputMode="decimal" value={texts.m} onChange={(e) => onChange("m", e.target.value)} />
        </div>
        <div>
          <label className={label} htmlFor="conv-in">
            {t.totalInches}
          </label>
          <input id="conv-in" className={input} inputMode="decimal" value={texts.totalIn} onChange={(e) => onChange("totalIn", e.target.value)} />
        </div>
      </div>
      <div className="mt-5 flex items-center gap-3 rounded-2xl bg-white px-4 py-3">
        <p className="flex-1 text-center text-lg font-semibold text-slate-900" aria-live="polite">
          {cm ? (
            <>
              {fmt(t.result, { cm: `${Number(cm.toFixed(1))} cm`, ftin: exact })}{" "}
              <bdi dir="ltr" className="text-blue-700">
                ≈ {formatImperial(cm)}
              </bdi>
            </>
          ) : (
            "—"
          )}
        </p>
        {cm && (
          <button
            type="button"
            onClick={async () => {
              try {
                await navigator.clipboard.writeText(`${Number(cm.toFixed(1))} cm = ${exact} (${formatImperial(cm)})`);
                setCopyState("done");
              } catch {
                setCopyState("failed");
              }
              setTimeout(() => setCopyState("idle"), 1800);
            }}
            className="shrink-0 rounded-lg border border-slate-200 px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            {copyState === "done" ? `✓ ${copy.copied}` : copy.copy}
          </button>
        )}
      </div>
      {copyState === "failed" && (
        <p role="alert" className="mt-2 text-center text-sm text-red-600">
          {copy.copyFailed}
        </p>
      )}
    </div>
  );
}

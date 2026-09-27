"use client";

import { useState } from "react";
import { cmToFtIn, ftInToCm, type Unit } from "@/lib/units";

type Props = {
  valueCm: number;
  unit: Unit;
  onChange: (cm: number) => void;
  labels: { feet: string; inches: string; unitMetric: string };
  id?: string;
  /** Shown (with a red border) while the typed value can't be used. */
  errorText?: string;
};

const inputClass =
  "w-full rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-sm tabular-nums outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100";

/**
 * Height field that accepts cm, or feet + inches, while the user types freely.
 * Callers remount it (via `key`) when the value changes from outside.
 */
export function HeightInput({ valueCm, unit, onChange, labels, id, errorText }: Props) {
  // Large objects are easier to edit in meters.
  const [meters] = useState(() => valueCm >= 1000);
  const factor = meters ? 100 : 1;
  const [cmText, setCmText] = useState(() => String(Math.round((valueCm / factor) * 10) / 10));
  const [ft, setFt] = useState(() => String(cmToFtIn(valueCm).feet));
  const [inch, setInch] = useState(() => String(cmToFtIn(valueCm).inches));

  const invalid =
    unit === "cm"
      ? !(parseFloat(cmText) > 0)
      : !((parseFloat(ft) || 0) * 12 + (parseFloat(inch) || 0) > 0) || (parseFloat(inch) || 0) < 0;
  const errorId = id ? `${id}-error` : undefined;
  const cls = `${inputClass} ${invalid ? "border-red-500 focus:border-red-500 focus:ring-red-100" : ""}`;
  const error = invalid && errorText && (
    <p id={errorId} role="alert" className="mt-1 text-xs font-medium text-red-600">
      {errorText}
    </p>
  );

  if (unit === "cm") {
    return (
      <div>
      <div className="flex items-center gap-1.5">
        <input
          id={id}
          type="number"
          inputMode="decimal"
          min={1}
          step="any"
          className={cls}
          aria-invalid={invalid}
          aria-describedby={invalid ? errorId : undefined}
          value={cmText}
          onChange={(e) => {
            setCmText(e.target.value);
            const n = parseFloat(e.target.value);
            if (n > 0) onChange(n * factor);
          }}
        />
        <span className="text-xs text-slate-500">{meters ? "m" : labels.unitMetric}</span>
      </div>
      {error}
      </div>
    );
  }

  const commit = (feetText: string, inchText: string) => {
    const f = parseFloat(feetText) || 0;
    const i = parseFloat(inchText) || 0;
    const cm = ftInToCm(f, i);
    if (cm > 0) onChange(cm);
  };

  return (
    <div>
    <div className="flex items-center gap-1.5">
      <input
        id={id}
        type="number"
        inputMode="numeric"
        min={0}
        className={cls}
        aria-invalid={invalid}
        value={ft}
        onChange={(e) => {
          setFt(e.target.value);
          commit(e.target.value, inch);
        }}
        aria-label={labels.feet}
      />
      <span className="text-xs text-slate-500">{labels.feet}</span>
      <input
        type="number"
        inputMode="decimal"
        min={0}
        max={11.99}
        step="any"
        className={cls}
        aria-invalid={invalid}
        value={inch}
        onChange={(e) => {
          setInch(e.target.value);
          commit(ft, e.target.value);
        }}
        aria-label={labels.inches}
      />
      <span className="text-xs text-slate-500">{labels.inches}</span>
    </div>
    {error}
    </div>
  );
}

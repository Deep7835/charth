"use client";

import { forwardRef, useCallback, useMemo, useRef, useState, type PointerEvent as ReactPointerEvent } from "react";
import { formatHeight, formatImperial, formatMetric, niceImperialStep, niceStep, type Unit } from "@/lib/units";
import { animalShape, isAnimalKind } from "./animals";
import { humanShape, objectShape, type Shape } from "./figures";
import type { Subject } from "./types";

type Props = {
  subjects: Subject[];
  unit: Unit;
  selectedId: string | null;
  onSelect: (id: string) => void;
  width: number;
  height: number;
  emptyText: string;
  title: string;
  /** "fit" shows everything; "focus" scales the board to the selected subject. */
  view?: "fit" | "focus";
  /** Enables the drag handle on the selected subject. */
  onResize?: (id: string, heightCm: number) => void;
  onResizeEnd?: () => void;
  resizeLabel?: string;
};

const PAD_TOP_PX = 70;
const PAD_BOTTOM_PX = 26;
const AXIS_PX = 58;
const LABEL_MIN_PX = 92;
/** How far a long row may shrink figures before the board scrolls horizontally. */
const MAX_SHRINK = 1.6;

export function shapeFor(subject: Subject): Shape {
  if (subject.kind === "male" || subject.kind === "female") {
    return humanShape({
      gender: subject.kind,
      heightCm: subject.heightCm,
      build: subject.build,
      adult: subject.adult,
    });
  }
  if (subject.kind === "image") return { paths: [], aspect: subject.aspect ?? 0.5 };
  const kind = subject.object ?? "block";
  return isAnimalKind(kind) ? animalShape(kind) : objectShape(kind, subject.aspect);
}

type Placed = { subject: Subject; shape: Shape; x: number; w: number; /** drawn width when clipped */ slotW: number; clipped: boolean };

/**
 * `scaleMax` is the height that fills the board. Subjects much taller than it
 * (focus mode, or while dragging) are clipped to a column instead of pushing
 * everything else off-screen.
 */
function layoutBoard(subjects: Subject[], width: number, height: number, scaleMax?: number) {
  const shapes = subjects.map(shapeFor);
  const tallest = Math.max(...subjects.map((s) => s.heightCm), 1);
  const maxH = scaleMax ?? tallest;
  const gap = maxH * 0.07;
  const realWidths = subjects.map((s, i) => s.heightCm * shapes[i].aspect);
  const clipped = subjects.map((s) => s.heightCm > maxH * 1.25);
  const figureWidths = realWidths.map((w, i) => (clipped[i] ? Math.min(w, maxH * 0.55) : w));

  // World units per pixel: fit vertically, shrink a little if the row is long,
  // and beyond that let the board scroll sideways so figures stay readable.
  const wppVertical = maxH / Math.max(height - PAD_TOP_PX - PAD_BOTTOM_PX, 50);
  let wpp = wppVertical;
  for (let pass = 0; pass < 3; pass++) {
    const rowW = figureWidths.reduce((sum, w) => sum + Math.max(w + gap, LABEL_MIN_PX * wpp), 0);
    const needed = rowW / Math.max(width - AXIS_PX * 2, 50);
    if (needed <= wpp) break;
    wpp = Math.min(needed, wppVertical * MAX_SHRINK);
  }

  const slots = figureWidths.map((w) => Math.max(w + gap, LABEL_MIN_PX * wpp));
  const rowW = slots.reduce((a, b) => a + b, 0);
  const svgWidth = Math.max(width, Math.ceil(rowW / wpp + AXIS_PX * 2));
  const viewW = svgWidth * wpp;
  let cursor = (viewW - rowW) / 2;
  const placed: Placed[] = subjects.map((subject, i) => {
    const x = cursor + slots[i] / 2;
    cursor += slots[i];
    return { subject, shape: shapes[i], x, w: realWidths[i], slotW: figureWidths[i], clipped: clipped[i] };
  });

  return {
    placed,
    wpp,
    viewW,
    svgWidth,
    top: -(height - PAD_BOTTOM_PX) * wpp,
    bottom: PAD_BOTTOM_PX * wpp,
    maxH,
  };
}

export const BoardCanvas = forwardRef<SVGSVGElement, Props>(function BoardCanvas(
  { subjects, unit, selectedId, onSelect, width, height, emptyText, title, view = "fit", onResize, onResizeEnd, resizeLabel },
  ref,
) {
  const svgEl = useRef<SVGSVGElement | null>(null);
  const setRefs = useCallback(
    (node: SVGSVGElement | null) => {
      svgEl.current = node;
      if (typeof ref === "function") ref(node);
      else if (ref) ref.current = node;
    },
    [ref],
  );
  // While dragging, the scale is frozen so the figure doesn't run away from the pointer.
  const [drag, setDrag] = useState<{ id: string; lockMax: number } | null>(null);

  const selectedSubject = subjects.find((s) => s.id === selectedId);
  const scaleMax = drag
    ? drag.lockMax
    : view === "focus" && selectedSubject
      ? selectedSubject.heightCm
      : undefined;

  const board = useMemo(
    () => (subjects.length ? layoutBoard(subjects, width, height, scaleMax) : null),
    [subjects, width, height, scaleMax],
  );

  const snap = (cm: number) => {
    const step = unit === "cm" ? 0.5 : 1.27; // half a centimetre or half an inch
    return Math.max(step, Math.round(cm / step) * step);
  };

  const onPointerMove = (e: ReactPointerEvent<SVGSVGElement>) => {
    if (!drag || !onResize || !svgEl.current) return;
    const ctm = svgEl.current.getScreenCTM();
    if (!ctm) return;
    const pt = new DOMPoint(e.clientX, e.clientY).matrixTransform(ctm.inverse());
    onResize(drag.id, snap(Math.min(-pt.y, drag.lockMax * 1.2)));
  };

  const endDrag = () => {
    if (!drag) return;
    setDrag(null);
    onResizeEnd?.();
  };

  if (!board || width === 0) {
    return (
      <svg ref={setRefs} width={width} height={height} role="img" aria-label={title} className="block" direction="ltr">
        <text x={width / 2} y={height / 2} textAnchor="middle" className="fill-slate-500" fontSize={15}>
          {emptyText}
        </text>
      </svg>
    );
  }

  const { placed, wpp, viewW, svgWidth, top, bottom, maxH } = board;
  const px = (n: number) => n * wpp;
  // Grid density follows the visible range, not just the tallest subject.
  const span = Math.max(maxH * 1.1, (-top - px(PAD_TOP_PX)) * 1.05);
  const primaryStep = unit === "cm" ? niceStep(span) : niceImperialStep(span);
  const secondaryStep = unit === "cm" ? niceImperialStep(span) : niceStep(span);
  const primaryFmt = unit === "cm" ? formatMetric : formatImperial;
  const secondaryFmt = unit === "cm" ? formatImperial : formatMetric;
  const gridTop = -top;
  const ticks = (step: number) => {
    const out: number[] = [];
    for (let v = 0; v <= gridTop - px(40) && out.length < 60; v += step) out.push(v);
    return out;
  };
  const selected = placed.find((p) => p.subject.id === selectedId);

  return (
    <svg
      ref={setRefs}
      width={svgWidth}
      height={height}
      viewBox={`0 ${top} ${viewW} ${bottom - top}`}
      role="img"
      aria-label={title}
      // Charts read left-to-right in every language; this also keeps text-anchor from flipping in RTL.
      direction="ltr"
      className={`block select-none ${drag ? "cursor-ns-resize" : ""}`}
      style={drag ? { touchAction: "none" } : undefined}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      fontFamily="system-ui, -apple-system, 'Segoe UI', Roboto, 'Noto Sans', sans-serif"
    >
      {/* Grid */}
      <g>
        {ticks(primaryStep).map((v) => (
          <g key={`p${v}`}>
            <line
              x1={px(AXIS_PX - 6)}
              x2={viewW - px(AXIS_PX - 6)}
              y1={-v}
              y2={-v}
              stroke={v === 0 ? "#94a3b8" : "#e2e8f0"}
              strokeWidth={px(1)}
            />
            <text x={px(8)} y={-v + px(4)} fontSize={px(11)} fill="#64748b">
              {primaryFmt(v)}
            </text>
          </g>
        ))}
        {ticks(secondaryStep).map((v) => (
          <g key={`s${v}`}>
            <line
              x1={viewW - px(AXIS_PX - 6)}
              x2={viewW - px(AXIS_PX - 14)}
              y1={-v}
              y2={-v}
              stroke="#cbd5e1"
              strokeWidth={px(1)}
            />
            <text x={viewW - px(8)} y={-v + px(4)} fontSize={px(11)} fill="#94a3b8" textAnchor="end">
              {secondaryFmt(v)}
            </text>
          </g>
        ))}
      </g>

      {selected && (
        <line
          x1={px(AXIS_PX - 6)}
          x2={viewW - px(AXIS_PX - 6)}
          y1={-selected.subject.heightCm}
          y2={-selected.subject.heightCm}
          stroke={selected.subject.color}
          strokeOpacity={0.55}
          strokeDasharray={`${px(6)} ${px(5)}`}
          strokeWidth={px(1.25)}
        />
      )}

      {/* Figures */}
      <defs>
        {placed
          .filter((p) => p.clipped)
          .map((p) => (
            <clipPath key={p.subject.id} id={`clip-${p.subject.id}`}>
              <rect x={p.x - p.slotW / 2} y={top} width={p.slotW} height={-top} />
            </clipPath>
          ))}
      </defs>

      {placed.map(({ subject, shape, x, w, slotW, clipped }) => {
        const h = subject.heightCm;
        const isSelected = subject.id === selectedId;
        // Labels sit above the figure, or pinned to the top edge when it is clipped.
        const labelBase = clipped ? top + px(52) : -h;
        const hitW = Math.max(slotW, px(24));
        return (
          <g
            key={subject.id}
            onClick={() => onSelect(subject.id)}
            className="cursor-pointer"
            role="button"
            aria-label={`${subject.name} ${formatHeight(h, unit)}`}
          >
            {/* Invisible hit area keeps thin figures clickable. */}
            <rect x={x - hitW / 2} y={Math.max(-h, top)} width={hitW} height={Math.min(h, -top)} fill="transparent" />
            <g clipPath={clipped ? `url(#clip-${subject.id})` : undefined}>
              {subject.kind === "image" && subject.image ? (
                <image href={subject.image} x={x - w / 2} y={-h} width={w} height={h} preserveAspectRatio="none" />
              ) : (
                <g
                  transform={`translate(${x} ${-h}) scale(${h})`}
                  fill={subject.color}
                  // A glow instead of a stroke: strokes would reveal the seams between body parts.
                  style={isSelected ? { filter: `drop-shadow(0 0 4px ${subject.color}88)` } : undefined}
                >
                  {shape.paths.map((d, i) => (
                    <path key={i} d={d} />
                  ))}
                </g>
              )}
            </g>
            <g textAnchor="middle" stroke="#fff" strokeWidth={px(3)} strokeLinejoin="round" paintOrder="stroke">
              <text x={x} y={labelBase - px(36)} fontSize={px(12)} fontWeight={700} fill={isSelected ? subject.color : "#0f172a"}>
                {clipped ? "↑ " : ""}
                {subject.name.length > 22 ? `${subject.name.slice(0, 21)}…` : subject.name}
              </text>
              <text x={x} y={labelBase - px(21)} fontSize={px(11.5)} fontWeight={600} fill={subject.color}>
                {formatHeight(h, unit)}
              </text>
              <text x={x} y={labelBase - px(8)} fontSize={px(10.5)} fill="#64748b">
                {formatHeight(h, unit === "cm" ? "ft" : "cm")}
              </text>
            </g>
          </g>
        );
      })}

      {/* Drag handle on the selected figure */}
      {onResize && selected && !selected.clipped && (
        <g
          role="slider"
          tabIndex={0}
          aria-label={resizeLabel ?? selected.subject.name}
          aria-valuenow={Math.round(selected.subject.heightCm)}
          aria-valuemin={1}
          aria-valuetext={formatHeight(selected.subject.heightCm, unit)}
          className="cursor-ns-resize outline-none"
          style={{ touchAction: "none" }}
          onPointerDown={(e) => {
            e.stopPropagation();
            (e.currentTarget as Element).setPointerCapture?.(e.pointerId);
            setDrag({ id: selected.subject.id, lockMax: maxH });
          }}
          onPointerMove={(e) => onPointerMove(e as unknown as ReactPointerEvent<SVGSVGElement>)}
          onPointerUp={endDrag}
          onKeyDown={(e) => {
            const step = (unit === "cm" ? 1 : 2.54) * (e.shiftKey ? 10 : 1);
            const delta = e.key === "ArrowUp" ? step : e.key === "ArrowDown" ? -step : 0;
            if (!delta) return;
            e.preventDefault();
            onResize(selected.subject.id, Math.max(1, selected.subject.heightCm + delta));
            onResizeEnd?.();
          }}
        >
          <circle cx={selected.x} cy={-selected.subject.heightCm} r={px(16)} fill="transparent" />
          <circle
            cx={selected.x}
            cy={-selected.subject.heightCm}
            r={px(7)}
            fill="#fff"
            stroke={selected.subject.color}
            strokeWidth={px(2.5)}
          />
          <path
            d={`M${selected.x - px(3)},${-selected.subject.heightCm - px(1)} l${px(3)},${-px(3)} l${px(3)},${px(3)} M${selected.x - px(3)},${-selected.subject.heightCm + px(1)} l${px(3)},${px(3)} l${px(3)},${-px(3)}`}
            stroke={selected.subject.color}
            strokeWidth={px(1.2)}
            fill="none"
          />
        </g>
      )}
    </svg>
  );
});

"use client";

import type { Unit } from "@/lib/units";
import { BoardCanvas } from "./BoardCanvas";
import type { Subject } from "./types";
import { useElementSize } from "./useElementSize";

/** Read-only board preview for calculators. */
export function MiniBoard({ subjects, unit, title, className = "h-72" }: { subjects: Subject[]; unit: Unit; title: string; className?: string }) {
  const [box, size] = useElementSize<HTMLDivElement>();
  return (
    <div ref={box} className={`overflow-hidden rounded-2xl border border-slate-200 bg-white ${className}`}>
      <BoardCanvas
        subjects={subjects}
        unit={unit}
        selectedId={null}
        onSelect={() => {}}
        width={size.width}
        height={size.height}
        emptyText=""
        title={title}
      />
    </div>
  );
}

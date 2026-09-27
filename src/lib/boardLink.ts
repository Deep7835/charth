import { encodeSubjects } from "@/components/board/share";
import type { Subject } from "@/components/board/types";
import type { Unit } from "./units";

/** Link to the home board pre-filled with the given subjects. */
export function boardLink(locale: string, subjects: Omit<Subject, "id">[], unit: Unit = "cm") {
  const withIds = subjects.map((s, i) => ({ ...s, id: String(i) }));
  return `/${locale}?c=${encodeSubjects(withIds)}&u=${unit}`;
}

import type { Build, ObjectKind } from "./figures";

export type SubjectKind = "male" | "female" | "object" | "image";

export type Subject = {
  id: string;
  name: string;
  heightCm: number;
  kind: SubjectKind;
  color: string;
  build?: Build;
  adult?: boolean;
  object?: ObjectKind;
  /** width ÷ height for objects and images */
  aspect?: number;
  /** data: URL for uploaded images (never put in share links). */
  image?: string;
};

export const palette = [
  "#1e3a8a",
  "#be185d",
  "#0f766e",
  "#7c3aed",
  "#b45309",
  "#334155",
  "#dc2626",
  "#0369a1",
  "#4d7c0f",
  "#a21caf",
];

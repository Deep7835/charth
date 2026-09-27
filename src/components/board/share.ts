import { animalKinds } from "./animals";
import type { Build, ObjectKind } from "./figures";
import type { Subject, SubjectKind } from "./types";

// Compact tuple format keeps share links short:
// [name, heightCm, kind, color, build?, adult?, object?, aspect?]
// JSON turns trailing `undefined` entries into `null`; the decoder tolerates both.
type Packed = [string, number, string, string, (string | null)?, (1 | null)?, (string | null)?, (number | null)?];

const kindCodes: Record<Exclude<SubjectKind, "image">, string> = { male: "m", female: "f", object: "o" };
const codeKinds: Record<string, Exclude<SubjectKind, "image">> = { m: "male", f: "female", o: "object" };
const builds: Build[] = ["slim", "average", "broad"];
const objects: ObjectKind[] = ["block", "door", "tree", "building", "tower", ...animalKinds];

function toBase64Url(text: string) {
  const bytes = new TextEncoder().encode(text);
  let binary = "";
  bytes.forEach((b) => (binary += String.fromCharCode(b)));
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function fromBase64Url(value: string) {
  const b64 = value.replace(/-/g, "+").replace(/_/g, "/");
  const binary = atob(b64 + "=".repeat((4 - (b64.length % 4)) % 4));
  return new TextDecoder().decode(Uint8Array.from(binary, (c) => c.charCodeAt(0)));
}

export function encodeSubjects(subjects: Subject[]) {
  const packed: Packed[] = subjects
    .filter((s) => s.kind !== "image")
    .map((s) => [
      s.name,
      Math.round(s.heightCm * 10) / 10,
      kindCodes[s.kind as Exclude<SubjectKind, "image">],
      s.color.replace("#", ""),
      s.build && s.build !== "average" ? s.build[0] : null,
      s.adult ? 1 : null,
      s.object ?? null,
      s.aspect ? Math.round(s.aspect * 100) / 100 : null,
    ]);
  return toBase64Url(JSON.stringify(packed));
}

export function decodeSubjects(value: string): Subject[] | null {
  try {
    const packed = JSON.parse(fromBase64Url(value)) as Packed[];
    if (!Array.isArray(packed)) return null;
    return packed.slice(0, 40).flatMap((row, i) => {
      const [name, heightCm, kindCode, color, build, adult, object, aspect] = row;
      const kind = codeKinds[kindCode];
      if (!kind || typeof heightCm !== "number" || !(heightCm > 0)) return [];
      return [
        {
          id: `s${i}-${Math.random().toString(36).slice(2, 7)}`,
          name: String(name).slice(0, 60),
          heightCm: Math.min(heightCm, 1e9),
          kind,
          color: /^[0-9a-f]{6}$/i.test(color) ? `#${color}` : "#334155",
          build: builds.find((b) => b[0] === build),
          adult: adult === 1 || undefined,
          object: objects.find((o) => o === object),
          aspect: typeof aspect === "number" && aspect > 0 && aspect < 20 ? aspect : undefined,
        } satisfies Subject,
      ];
    });
  } catch {
    return null;
  }
}

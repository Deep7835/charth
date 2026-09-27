/**
 * Procedural silhouettes. Every shape is drawn in a normalized box where the
 * figure's top is y=0, its feet are y=1 and x=0 is its centre line, so the
 * board only has to scale by the subject's real height.
 */

type Pt = [number, number];

const f = (n: number) => Number(n.toFixed(4));

/** Closed Catmull–Rom spline through the points, emitted as cubic Béziers. */
export function smoothClosed(points: Pt[], tension = 1): string {
  const n = points.length;
  const k = tension / 6;
  let d = `M${f(points[0][0])},${f(points[0][1])}`;
  for (let i = 0; i < n; i++) {
    const p0 = points[(i - 1 + n) % n];
    const p1 = points[i];
    const p2 = points[(i + 1) % n];
    const p3 = points[(i + 2) % n];
    const c1: Pt = [p1[0] + (p2[0] - p0[0]) * k, p1[1] + (p2[1] - p0[1]) * k];
    const c2: Pt = [p2[0] - (p3[0] - p1[0]) * k, p2[1] - (p3[1] - p1[1]) * k];
    d += `C${f(c1[0])},${f(c1[1])} ${f(c2[0])},${f(c2[1])} ${f(p2[0])},${f(p2[1])}`;
  }
  return `${d}Z`;
}

function mirror(points: Pt[]): Pt[] {
  return points.map(([x, y]) => [-x, y]);
}

export type Build = "slim" | "average" | "broad";
export type Gender = "male" | "female";

/**
 * Head count (body height ÷ head height) as a function of stature, so a
 * 110 cm subject is drawn with a child's larger head and shorter legs.
 */
export function headsForHeight(cm: number, adult?: boolean) {
  if (adult) return cm < 150 ? 7 : 7.5;
  if (cm >= 170) return 7.5;
  if (cm >= 145) return 7.1 + ((cm - 145) / 25) * 0.4;
  if (cm <= 50) return 4;
  return 4 + ((cm - 50) / 95) * 2.6;
}

type HumanOptions = { gender: Gender; heightCm: number; build?: Build; adult?: boolean };

export type Shape = { paths: string[]; /** width ÷ height of the silhouette */ aspect: number };

export function humanShape({ gender, heightCm, build = "average", adult }: HumanOptions): Shape {
  const heads = headsForHeight(heightCm, adult);
  const headH = 1 / heads;
  const female = gender === "female";
  const childish = Math.max(0, Math.min(1, (7.5 - heads) / 3.5));
  const w = build === "slim" ? 0.9 : build === "broad" ? 1.14 : 1;

  // Leg length shrinks from ~48% (adult) to ~40% (toddler) of total height.
  const legFrac = 0.48 - childish * 0.08;
  const crotchY = 1 - legFrac;
  const shoulderY = headH + headH * 0.3;
  const torso = crotchY - shoulderY;
  const armpitY = shoulderY + torso * 0.17;
  const waistY = shoulderY + torso * 0.6;
  const hipY = shoulderY + torso * 0.87;
  const kneeY = crotchY + legFrac * 0.48;
  const ankleY = 0.962;

  const shoulderHalf = (female ? 0.108 : 0.126) * w;
  const chestHalf = (female ? 0.094 : 0.108) * w;
  const waistHalf = (female ? 0.07 : 0.086) * w;
  const hipHalf = (female ? 0.1 : 0.094) * w;
  const neckHalf = (female ? 0.024 : 0.03) * (1 + childish * 0.2);
  const headHalfW = headH * (0.36 + childish * 0.04);

  const paths: string[] = [];

  if (female) {
    // Long hair framing the head and falling just past the shoulders.
    const hairBottom = shoulderY + headH * 0.55;
    paths.push(
      smoothClosed([
        [0, -headH * 0.03],
        [headHalfW * 0.85, headH * 0.06],
        [headHalfW * 1.14, headH * 0.4],
        [headHalfW * 1.2, headH * 0.85],
        [headHalfW * 1.3, hairBottom - headH * 0.08],
        [headHalfW * 1.05, hairBottom],
        [headHalfW * 0.55, hairBottom - headH * 0.12],
        [0, shoulderY + headH * 0.1],
        [-headHalfW * 0.55, hairBottom - headH * 0.12],
        [-headHalfW * 1.05, hairBottom],
        [-headHalfW * 1.3, hairBottom - headH * 0.08],
        [-headHalfW * 1.2, headH * 0.85],
        [-headHalfW * 1.14, headH * 0.4],
        [-headHalfW * 0.85, headH * 0.06],
      ]),
    );
  }

  // Head: rounder cranium tapering to the jaw.
  const hw = headHalfW * (female ? 1 : 1.04);
  paths.push(
    smoothClosed([
      [0, female ? 0 : -headH * 0.02],
      [hw * 0.78, headH * 0.08],
      [hw, headH * 0.36],
      [hw * 0.93, headH * 0.62],
      [hw * 0.62, headH * 0.88],
      [0, headH],
      [-hw * 0.62, headH * 0.88],
      [-hw * 0.93, headH * 0.62],
      [-hw, headH * 0.36],
      [-hw * 0.78, headH * 0.08],
    ]),
  );

  // Torso (neck → shoulders → hips), mirrored.
  const torsoRight: Pt[] = [
    [neckHalf, headH * 0.85],
    [neckHalf * 1.1, shoulderY - headH * 0.12],
    [shoulderHalf * 0.62, shoulderY - headH * 0.02],
    [shoulderHalf + 0.01, shoulderY + headH * 0.18],
    [chestHalf, armpitY + headH * 0.1],
    [waistHalf, waistY],
    [hipHalf, hipY],
    [hipHalf * 0.9, crotchY + 0.012],
  ];
  paths.push(smoothClosed([...torsoRight, [0, crotchY + 0.02], ...mirror(torsoRight).reverse()], 0.9));

  // Legs
  const legC = hipHalf * 0.5;
  const thighHalf = hipHalf * 0.5;
  const kneeHalf = 0.028 * w * (1 + childish * 0.15);
  const calfHalf = 0.033 * w;
  const ankleHalf = 0.016 * (1 + childish * 0.2);
  const footLen = 0.034;
  const leg: Pt[] = [
    [hipHalf * 0.98, hipY - 0.03],
    [legC + thighHalf * 0.95, crotchY + legFrac * 0.12],
    [legC + kneeHalf, kneeY],
    [legC + calfHalf, kneeY + legFrac * 0.14],
    [legC + ankleHalf, ankleY],
    [legC + ankleHalf + footLen * 0.7, 0.99],
    [legC + ankleHalf + footLen * 0.6, 1],
    [legC - ankleHalf - 0.004, 1],
    [legC - ankleHalf, ankleY],
    [legC - calfHalf * 0.75, kneeY + legFrac * 0.12],
    [legC - kneeHalf * 0.95, kneeY],
    [0.004, crotchY + 0.03],
    [0.004, hipY],
  ];
  paths.push(smoothClosed(leg, 0.7));
  paths.push(smoothClosed(mirror(leg).reverse(), 0.7));

  if (female) {
    // A-line dress over the upper legs.
    const hemY = crotchY + legFrac * 0.32;
    const dress: Pt[] = [
      [waistHalf * 1.02, waistY],
      [hipHalf * 1.05, hipY],
      [hipHalf * 1.55, hemY],
      [0, hemY + 0.006],
      [-hipHalf * 1.55, hemY],
      [-hipHalf * 1.05, hipY],
      [-waistHalf * 1.02, waistY],
    ];
    paths.push(smoothClosed(dress, 0.5));
  }

  // Arms hanging slightly away from the body.
  const elbowY = waistY - 0.005;
  const wristY = crotchY - 0.01;
  const handY = wristY + headH * 0.62;
  const armOut = shoulderHalf + 0.012;
  const arm: Pt[] = [
    [shoulderHalf * 0.8, shoulderY + headH * 0.1],
    [armOut + 0.008, shoulderY + headH * 0.3],
    [armOut + 0.022, elbowY],
    [armOut + 0.03, wristY],
    [armOut + 0.034, handY - 0.02],
    [armOut + 0.018, handY],
    [armOut + 0.004, handY - 0.024],
    [armOut + 0.006, wristY],
    [armOut - 0.008, elbowY],
    [chestHalf - 0.004, armpitY + 0.01],
  ];
  paths.push(smoothClosed(arm, 0.8));
  paths.push(smoothClosed(mirror(arm).reverse(), 0.8));

  const aspect = 2 * Math.max(armOut + 0.04, female ? hipHalf * 1.55 : 0, headHalfW * 1.3);
  return { paths, aspect };
}

export type BasicObjectKind = "block" | "door" | "tree" | "building" | "tower";
export type ObjectKind = BasicObjectKind | import("./animals").AnimalKind;

/** Simple object silhouettes; `aspect` can be overridden per subject. */
export function objectShape(kind: BasicObjectKind, aspect?: number): Shape {
  switch (kind) {
    case "door": {
      const a = aspect ?? 0.45;
      const hw = a / 2;
      return {
        aspect: a,
        paths: [
          `M${-hw},1V0.02Q${-hw},0 ${-hw + 0.02},0H${hw - 0.02}Q${hw},0 ${hw},0.02V1Z`,
        ],
      };
    }
    case "tree": {
      const a = aspect ?? 0.62;
      const hw = a / 2;
      return {
        aspect: a,
        paths: [
          `M-0.035,1L-0.03,0.55H0.03L0.035,1Z`,
          smoothClosed([
            [0, 0],
            [hw * 0.7, 0.1],
            [hw, 0.33],
            [hw * 0.8, 0.58],
            [0, 0.66],
            [-hw * 0.8, 0.58],
            [-hw, 0.33],
            [-hw * 0.7, 0.1],
          ]),
        ],
      };
    }
    case "building": {
      const a = aspect ?? 0.4;
      const hw = a / 2;
      return {
        aspect: a,
        paths: [`M${-hw},1V0.04H${-hw * 0.2}V0H${hw * 0.2}V0.04H${hw}V1Z`],
      };
    }
    case "tower": {
      const a = aspect ?? 0.22;
      const hw = a / 2;
      return {
        aspect: a,
        paths: [`M${-hw},1L${-hw * 0.18},0.12L0,0L${hw * 0.18},0.12L${hw},1Z`],
      };
    }
    default: {
      const a = aspect ?? 0.5;
      const hw = a / 2;
      const r = Math.min(0.04, hw * 0.3);
      return {
        aspect: a,
        paths: [`M${-hw},1V${r}Q${-hw},0 ${-hw + r},0H${hw - r}Q${hw},0 ${hw},${r}V1Z`],
      };
    }
  }
}

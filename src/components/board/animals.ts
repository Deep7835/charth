import { smoothClosed, type Shape } from "./figures";

/**
 * Side-profile silhouettes sketched on a grid (y down, facing right) and
 * normalised so the top of the silhouette is y=0 and the ground is y=1.
 * `refY` marks the conventional measuring point (e.g. shoulder height for
 * dogs and horses) as a fraction of the total height, so library entries can
 * convert a published shoulder height into overall height.
 */
type Sketch = {
  h: number;
  w: number;
  parts: { pts: [number, number][]; tension?: number; circle?: never }[];
  circles?: [number, number, number][];
  refY?: number;
};

const sketches = {
  cat: {
    h: 100,
    w: 175,
    refY: 0.3,
    parts: [
      {
        tension: 0.7,
        pts: [
          [12, 6], [6, 20], [8, 34], [20, 42], [32, 37], [60, 34], [95, 32], [116, 28], [126, 12], [130, 0], [137, 10],
          [145, 7], [151, 0], [153, 13], [161, 22], [170, 32], [165, 40], [152, 46], [140, 50], [132, 62], [135, 80],
          [134, 97], [140, 100], [125, 100], [124, 80], [120, 67], [100, 66], [70, 66], [58, 70], [62, 86], [64, 97],
          [68, 100], [52, 100], [48, 86], [42, 70], [36, 54], [26, 48], [14, 42], [12, 28], [16, 12],
        ],
      },
    ],
  },
  dog: {
    h: 100,
    w: 138,
    refY: 0.28,
    parts: [
      {
        tension: 0.7,
        pts: [
          [0, 54], [6, 40], [16, 32], [26, 29], [45, 29], [72, 29], [84, 27], [93, 17], [98, 6], [108, 0], [117, 4],
          [121, 11], [133, 15], [138, 19], [134, 25], [121, 27], [110, 31], [106, 44], [101, 56], [104, 70], [103, 96],
          [109, 100], [94, 100], [94, 80], [92, 62], [80, 60], [55, 60], [45, 62], [41, 76], [46, 95], [50, 100],
          [36, 100], [34, 88], [30, 74], [26, 57], [22, 42], [12, 42], [5, 50], [2, 58],
        ],
      },
    ],
  },
  horse: {
    h: 100,
    w: 128,
    refY: 0.36,
    parts: [
      {
        tension: 0.65,
        pts: [
          [22, 38], [30, 36], [55, 42], [72, 41], [84, 36], [92, 26], [99, 13], [103, 5], [103, 0], [107, 4], [111, 8],
          [119, 24], [125, 36], [125, 42], [118, 44], [112, 42], [106, 34], [100, 30], [94, 40], [95, 52], [97, 60],
          [95, 72], [95, 90], [98, 100], [88, 100], [89, 88], [88, 72], [86, 62], [84, 60], [70, 63], [52, 63],
          [42, 60], [40, 70], [38, 80], [37, 92], [40, 100], [30, 100], [30, 90], [27, 78], [28, 68], [24, 56], [22, 44],
        ],
      },
      // Tail
      { tension: 0.7, pts: [[23, 40], [14, 47], [10, 62], [11, 78], [15, 84], [19, 74], [20, 60], [25, 48]] },
    ],
  },
  giraffe: {
    h: 100,
    w: 80,
    parts: [
      {
        tension: 0.6,
        pts: [
          [14, 52], [26, 47], [40, 40], [44, 30], [50, 18], [56, 6], [58, 3], [59, 0], [61, 0], [62, 3], [66, 3], [74, 7],
          [77, 11], [72, 14], [65, 13], [61, 14], [56, 24], [51, 36], [48, 46], [48, 54], [47, 62], [47, 78], [46, 96],
          [48, 100], [42, 100], [41, 80], [41, 66], [39, 63], [30, 63], [22, 62], [19, 62], [20, 72], [19, 96],
          [21, 100], [15, 100], [14, 86], [13, 70], [11, 60],
        ],
      },
      // Tail
      { tension: 0.7, pts: [[13, 53], [8, 60], [6, 72], [5, 78], [7, 79], [8, 72], [10, 62], [15, 57]] },
    ],
  },
  elephant: {
    h: 100,
    w: 128,
    refY: 0.04,
    parts: [
      {
        tension: 0.7,
        pts: [
          [8, 40], [4, 50], [2, 60], [5, 60], [8, 48], [10, 20], [30, 6], [60, 2], [80, 4], [92, 0], [108, 8], [116, 28],
          [118, 55], [121, 80], [124, 90], [117, 93], [114, 82], [110, 60], [106, 46], [101, 46], [100, 60], [100, 97],
          [102, 100], [84, 100], [84, 70], [76, 64], [40, 64], [34, 68], [34, 97], [36, 100], [16, 100], [15, 70],
          [11, 50],
        ],
      },
      // Tusk
      { tension: 0.6, pts: [[104, 44], [112, 52], [120, 54], [113, 49], [107, 41]] },
    ],
  },
  ostrich: {
    h: 100,
    w: 62,
    parts: [
      {
        tension: 0.7,
        pts: [
          [0, 38], [5, 29], [16, 25], [32, 24], [41, 28], [43, 18], [44, 7], [47, 1], [52, 0], [55, 2], [61, 4], [55, 6],
          [50, 7], [48, 16], [47, 30], [49, 41], [42, 51], [30, 54], [32, 68], [34, 79], [31, 96], [35, 100], [26, 100],
          [27, 80], [28, 64], [22, 55], [16, 51], [7, 46],
        ],
      },
    ],
  },
  penguin: {
    h: 100,
    w: 46,
    parts: [
      {
        tension: 0.8,
        pts: [
          [20, 1], [28, 0], [34, 6], [44, 10], [35, 13], [37, 30], [41, 58], [38, 84], [42, 100], [18, 100], [10, 86],
          [6, 60], [8, 34], [13, 16],
        ],
      },
      // Flipper
      { tension: 0.8, pts: [[14, 34], [6, 52], [2, 66], [8, 62], [16, 48]] },
    ],
  },
  trex: {
    h: 100,
    w: 310,
    refY: 0.04,
    parts: [
      {
        tension: 0.6,
        pts: [
          [0, 36], [40, 24], [90, 12], [130, 2], [160, 6], [190, 18], [205, 10], [230, 7], [255, 11], [270, 18],
          [268, 28], [240, 34], [212, 32], [200, 40], [186, 50], [190, 58], [194, 64], [187, 62], [180, 56], [170, 58],
          [160, 56], [158, 70], [150, 84], [162, 97], [166, 100], [138, 100], [137, 90], [135, 78], [128, 62],
          [110, 42], [60, 34], [10, 38],
        ],
      },
    ],
  },
  brachiosaurus: {
    h: 100,
    w: 172,
    parts: [
      {
        tension: 0.6,
        pts: [
          [0, 62], [30, 52], [60, 44], [80, 40], [110, 30], [122, 18], [134, 6], [140, 1], [146, 0], [156, 3], [158, 7],
          [150, 9], [144, 9], [137, 19], [128, 34], [125, 48], [126, 62], [126, 97], [128, 100], [115, 100], [115, 70],
          [104, 62], [90, 64], [88, 70], [88, 97], [90, 100], [76, 100], [74, 76], [72, 62], [60, 54], [30, 59],
          [4, 65],
        ],
      },
    ],
  },
  car: {
    h: 100,
    w: 310,
    parts: [
      {
        tension: 0.35,
        pts: [
          [0, 44], [6, 32], [44, 28], [92, 4], [182, 0], [232, 30], [292, 38], [310, 52], [308, 74], [300, 82],
          [40, 82], [4, 76],
        ],
      },
    ],
    circles: [
      [66, 80, 20],
      [248, 80, 20],
    ],
  },
  bus: {
    h: 100,
    w: 250,
    parts: [
      {
        tension: 0.2,
        pts: [
          [2, 4], [8, 0], [242, 0], [248, 4], [250, 86], [246, 90], [4, 90], [0, 86],
        ],
      },
    ],
    circles: [
      [44, 90, 10],
      [206, 90, 10],
    ],
  },
} satisfies Record<string, Sketch>;

export type AnimalKind = keyof typeof sketches;

export const animalKinds = Object.keys(sketches) as AnimalKind[];

export function isAnimalKind(kind: string): kind is AnimalKind {
  return kind in sketches;
}

function circlePath(cx: number, cy: number, r: number) {
  return `M${cx - r},${cy}a${r},${r} 0 1,0 ${r * 2},0a${r},${r} 0 1,0 ${-r * 2},0Z`;
}

const cache = new Map<AnimalKind, Shape>();

export function animalShape(kind: AnimalKind): Shape {
  const hit = cache.get(kind);
  if (hit) return hit;
  const s: Sketch = sketches[kind];
  const aspect = s.w / s.h;
  const norm = ([x, y]: [number, number]): [number, number] => [x / s.h - aspect / 2, y / s.h];
  const paths = s.parts.map((part) => smoothClosed(part.pts.map(norm), part.tension ?? 0.7));
  for (const [cx, cy, r] of s.circles ?? []) {
    const [nx, ny] = norm([cx, cy]);
    paths.push(circlePath(nx, ny, r / s.h));
  }
  const shape = { paths, aspect };
  cache.set(kind, shape);
  return shape;
}

/** Overall silhouette height from a published reference height (e.g. shoulder). */
export function overallFromReference(kind: AnimalKind, referenceCm: number) {
  const refY = (sketches[kind] as Sketch).refY ?? 0;
  return Math.round((referenceCm / (1 - refY)) * 10) / 10;
}

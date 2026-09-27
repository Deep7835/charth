const three = {
  metaTitle: "3D Height Comparison – Compare Heights in 3D Online",
  metaDescription:
    "Free 3D height comparison: see people, celebrities, animals and objects side by side as 3D models. Rotate, zoom, switch cm or ft/in and share the result.",
  h1: "3D height comparison",
  intro: "Compare heights as 3D models you can rotate and zoom. Switch to 2D any time for an exact chart.",
  contentTitle: "Why compare heights in 3D?",
  content: [
    "A flat chart is the most precise way to read a height difference, but a 3D view shows how the gap feels in real life: you can walk around the figures, look up from a child’s eye level or see how an animal’s body length compares with a person.",
    "People are drawn as mannequins with age-appropriate proportions, so a 115 cm child has a larger head and shorter legs than an adult. Animals and objects use the same silhouettes as the 2D chart, extruded into 3D.",
    "Everything stays on one true scale. The measuring pole on the left shows the height in centimeters or feet and inches.",
  ],
  faq: [
    {
      q: "Is the 3D height comparison accurate?",
      a: "Yes. Every model is scaled to the exact height you enter; only body width and depth are based on average proportions.",
    },
    {
      q: "Does the 3D view work on phones?",
      a: "Yes. Drag with one finger to rotate and pinch to zoom. The 3D engine only loads when you open this view, so the rest of the site stays fast.",
    },
    {
      q: "Can I download the 3D comparison?",
      a: "Yes. Rotate to the angle you like and tap Download PNG to save exactly what you see.",
    },
  ],
};

export default three;

type Widen<T> = T extends string
  ? string
  : T extends readonly (infer U)[]
    ? Widen<U>[]
    : T extends object
      ? { [K in keyof T]: Widen<T[K]> }
      : T;

export type ThreeMessages = Widen<typeof three>;

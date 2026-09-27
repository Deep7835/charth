const hug = {
  metaTitle: "Hug Simulator – See Your Height Difference in a Hug",
  metaDescription:
    "Free hug simulator: enter two heights to see a to-scale front or back hug, where heads land, the eye-level gap and head tilt. Download or share it.",
  h1: "Hug simulator",
  intro: "Enter two heights to see how a front hug or a back hug looks at your exact height difference.",
  personA: "Person A",
  personB: "Person B",
  name: "Name",
  hugType: "Hug",
  front: "Front hug",
  back: "Back hug",
  behind: "Who hugs from behind?",
  download: "Download PNG",
  share: "Share",
  linkCopied: "Link copied",
  headLands: "Top of {b}’s head reaches {a}’s",
  parts: {
    eyes: "eyes",
    nose: "nose or mouth",
    chin: "chin",
    shoulders: "shoulders",
    chest: "chest",
    waist: "waist",
    below: "hips",
  },
  eyeGap: "Eye-level difference",
  tilt: "Head tilt for eye contact",
  tiltNote: "looking up at 30 cm apart",
  armsTitle: "Natural arm position",
  arms: {
    even: "Similar heights: one arm over the shoulder, one under",
    tallOver: "{tall}: arms over the shoulders · {short}: arms around the waist",
    backShoulders: "{hugger} wraps both arms across {other}’s shoulders",
    backWaist: "{hugger} wraps both arms around {other}’s waist",
  },
  chinRest: "{hugger} can rest their chin on {other}’s shoulder",
  note: "Drawn with average adult proportions in side view. Posture, shoes and hair change the real result.",
  contentTitle: "How height difference changes a hug",
  content: [
    "In a front hug the taller person usually wraps their arms over the shorter person’s shoulders while the shorter person hugs around the waist. With a gap of about 15 cm (6 in) the shorter person’s head ends up around the taller person’s nose; at 25 cm (10 in) it reaches the chin, and from about 40 cm (16 in) it lands on the chest.",
    "Back hugs are easiest when the person behind is about the same height or up to roughly 20 cm (8 in) taller: in that range they can rest their chin on their partner’s shoulder. When the person behind is clearly shorter, arms naturally go around the waist.",
    "Eye contact matters too. A 10 cm (4 in) eye-level difference means tilting the head up about 18° at close range, which is why big height gaps make face-to-face moments feel different.",
  ],
  faq: [
    {
      q: "What is the ideal height difference for hugging?",
      a: "There is no single ideal, but many people find 10–20 cm (4–8 in) comfortable: the shorter person’s head fits under the taller person’s chin without either person bending much.",
    },
    {
      q: "Where does my head land when hugging someone taller?",
      a: "Enter both heights above. The simulator uses average body proportions to show whether your head reaches their eyes, chin, shoulders or chest.",
    },
    {
      q: "Can I share or save my hug?",
      a: "Yes. Use Share to copy a link that recreates your hug, or Download PNG to save the picture.",
    },
  ],
};

export default hug;

type Widen<T> = T extends string
  ? string
  : T extends readonly (infer U)[]
    ? Widen<U>[]
    : T extends object
      ? { [K in keyof T]: Widen<T[K]> }
      : T;

export type HugMessages = Widen<typeof hug>;

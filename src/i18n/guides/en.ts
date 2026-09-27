/** Long-form guides. Numbers come from the site's datasets or are cited in the text. */
const guides = [
  {
    slug: "how-to-measure-height",
    tool: "height-converter",
    minutes: 4,
    title: "How to measure your height accurately at home",
    metaTitle: "How to Measure Your Height at Home (Accurately, Step by Step)",
    metaDescription:
      "Measure your height at home to within a few millimetres: the right posture, tools and time of day, plus how to convert the result to feet and inches.",
    intro:
      "You don’t need a doctor’s stadiometer to get an accurate height. With a wall, a flat object and a tape measure you can measure yourself to within a few millimetres — if you get the details right.",
    sections: [
      {
        h: "What you need",
        p: [
          "A flat wall without skirting boards in the way, a hard floor (not carpet), a hardcover book or a box with a right angle, a pencil and a metal tape measure. A second person makes it easier, but you can do it alone.",
        ],
      },
      {
        h: "Step by step",
        p: [
          "Take off shoes, thick socks and anything on your head, and undo buns or ponytails that push your head forward.",
          "Stand with your heels, buttocks and shoulder blades touching the wall, feet together and weight evenly on both legs.",
          "Look straight ahead so the line from the lower edge of your eye socket to the top of your ear opening is level. Tilting your chin up or down changes the reading.",
          "Slide the book down the wall until it rests firmly on the top of your head, keeping it flat against the wall. Mark the underside with the pencil.",
          "Step away and measure from the floor to the mark with the tape held straight against the wall. Repeat two or three times and use the average.",
        ],
      },
      {
        h: "Measure in the morning",
        p: [
          "Your spine’s discs compress during the day, so most people are about 1 cm (0.4 in) shorter in the evening than just after getting up. For a height you can compare over time, always measure at the same time of day — ideally in the morning.",
        ],
      },
      {
        h: "Converting and comparing",
        p: [
          "Heights in feet are usually rounded to the nearest inch, and one inch is 2.54 cm, so a quoted height can differ from yours by more than a centimetre. Use the height converter for exact values, and the comparison chart to see yourself next to friends, celebrities or the average person in your country.",
        ],
      },
    ],
  },
  {
    slug: "when-do-you-stop-growing",
    tool: "growth-chart",
    minutes: 5,
    title: "When do you stop growing? What the data shows",
    metaTitle: "When Do You Stop Growing? Ages for Girls and Boys (Data)",
    metaDescription:
      "At what age do girls and boys stop growing? Average growth by age from 200 countries shows when growth spurts peak and when height levels off.",
    intro:
      "Most people stop growing in their mid-to-late teens, but the exact age depends on sex and on when puberty starts. Average height data for 200 countries (NCD-RisC) shows the typical pattern clearly.",
    sections: [
      {
        h: "Steady growth, then a spurt",
        p: [
          "From age 5 until puberty, children grow about 5–6 cm (2 in) a year. Puberty then brings a growth spurt: across 200 countries, girls’ fastest growth year is typically between 10 and 11, and boys’ between 12 and 13 — around 6–7 cm in that year on average.",
        ],
      },
      {
        h: "When girls stop growing",
        p: [
          "Girls reach adult height earlier. On average they are at 94% of adult height at 12 and 98% at 14. After 15, average growth falls below 1 cm a year, and most girls are within a centimetre or so of their final height by 16.",
        ],
      },
      {
        h: "When boys stop growing",
        p: [
          "Boys start their spurt later and grow for longer. On average they are at 86% of adult height at 12, 94% at 14 and 98% at 16. Growth drops below 1 cm a year after about 17, with a little more possible until 18–19.",
        ],
      },
      {
        h: "Why individuals differ",
        p: [
          "These are national averages, which smooth out individual growth spurts. Early developers grow sooner and stop sooner; late developers keep growing longer. Growth ends when the growth plates in the long bones close, which doctors can check on an X-ray of the hand if there is a medical reason.",
          "Nutrition and health matter too: average adult height has risen by several centimetres in many countries since 1985 as childhood nutrition improved.",
        ],
      },
      {
        h: "Estimate your own adult height",
        p: [
          "The height predictor combines your parents’ heights with your current height for your age to estimate your adult height and a likely range.",
        ],
      },
    ],
  },
  {
    slug: "couple-height-difference",
    tool: "height-difference-calculator",
    minutes: 4,
    title: "Couple height difference: what’s typical and what it looks like",
    metaTitle: "Couple Height Difference – What’s Typical and What It Looks Like",
    metaDescription:
      "What is the average height difference between partners? See typical gaps, what 5, 10, 15 and 20 cm look like side by side, and how height affects hugs.",
    intro:
      "Height differences are one of the first things people notice in couple photos. Here is what is typical, and what different gaps actually look like.",
    sections: [
      {
        h: "The average gap",
        p: [
          "Worldwide, young men average 170.8 cm and young women 158.6 cm — a difference of about 12 cm (4.8 in). In most countries the gap is between 10 and 15 cm, so a partner about a head-width taller is the statistical norm.",
          "Couples do not pair up completely at random: a 2013 study of British couples (Stulp et al.) found the man was taller in about 92.5% of couples, slightly more often than the roughly 88.5% expected by chance.",
        ],
      },
      {
        h: "What different gaps look like",
        p: [
          "Under 5 cm (2 in): you look level in photos, and heels or shoes easily reverse it.",
          "About 10 cm (4 in): the shorter partner’s eyes are around the taller partner’s mouth.",
          "About 15 cm (6 in): the top of the shorter partner’s head reaches about the taller partner’s nose, a clearly visible but comfortable gap.",
          "20–25 cm (8–10 in): the shorter partner’s head reaches the chin, and eye contact at close range means tilting the head up noticeably.",
        ],
      },
      {
        h: "Try it with your own heights",
        p: [
          "The height difference calculator shows the exact gap and where your heads land, and the hug simulator draws a to-scale front or back hug for any two heights.",
        ],
      },
    ],
  },
];

export default guides;

type Widen<T> = T extends string
  ? string
  : T extends number
    ? number
    : T extends readonly (infer U)[]
      ? Widen<U>[]
      : T extends object
        ? { [K in keyof T]: Widen<T[K]> }
        : T;

export type GuidesMessages = Widen<typeof guides>;

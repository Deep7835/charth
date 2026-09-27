/** Phase 4 pages: height predictor, growth chart, BMI, subject (celebrity/character) pages, guide hub. */
const more = {
  names: {
    "height-predictor": {
      name: "Height predictor",
      blurb: "How tall will I be? Predict adult height from parents’ heights or a child’s current height.",
    },
    "growth-chart": {
      name: "Average height by age",
      blurb: "Growth chart for boys and girls aged 5–19 in 200 countries, with a child height check.",
    },
    "bmi-calculator": {
      name: "BMI & healthy weight",
      blurb: "Calculate BMI and see the healthy weight range for your height.",
    },
  },
  common: {
    boy: "Boy",
    girl: "Girl",
    age: "Age",
    years: "{n} years",
    father: "Father’s height",
    mother: "Mother’s height",
    childHeight: "Child’s current height",
    optional: "optional",
    estimateNote: "Estimates only — genetics, nutrition, health and puberty timing all affect real growth.",
  },
  predictor: {
    metaTitle: "Height Predictor – How Tall Will I Be? (Child Height Calculator)",
    metaDescription:
      "Predict adult height from the parents’ heights (mid-parental method) and from a child’s current height for their age, using growth data for 200 countries.",
    h1: "Height predictor: how tall will I be?",
    intro:
      "Estimate adult height two ways: from both parents’ heights, and from a child’s current height compared with average growth in their country.",
    parentsResult: "Based on parents’ heights",
    currentResult: "Based on current height for age",
    range: "Likely range: {low} – {high}",
    currentUnavailable: "Enter the child’s height (ages 5–17) for a second estimate.",
    howTitle: "How the prediction works",
    how: [
      "Parents’ heights (mid-parental method): add the mother’s and father’s heights, add 13 cm for a boy or subtract 13 cm for a girl, then divide by 2. This is the target height paediatricians use; most children (about 95%) end up within roughly 8.5 cm (3.3 in) of it.",
      "Current height for age: the child’s height is compared with the national average for their age and sex (NCD-RisC data), assuming they stay at the same relative position until adulthood. It works best before puberty; early or late puberty can shift the result.",
      "When both estimates agree, the prediction is more reliable. A large gap between them is common during growth spurts and is not a reason for concern on its own.",
    ],
    faq: [
      {
        q: "How accurate is a height prediction?",
        a: "The mid-parental method places most children within about ±8.5 cm of the target. No calculator can account for puberty timing, nutrition or medical conditions, so treat results as a guide.",
      },
      {
        q: "Can I predict my height if I’m a teenager?",
        a: "Yes. Enter your age and current height. After about 15 for girls and 17 for boys, most people grow less than 1 cm a year, so your current height is already close to your adult height.",
      },
      {
        q: "Does the father or mother determine height more?",
        a: "Both parents contribute roughly equally, which is why the formula averages their heights and then adjusts for the typical difference between men and women.",
      },
    ],
  },
  growth: {
    metaTitle: "Average Height by Age – Growth Chart for Boys & Girls (5–19)",
    metaDescription:
      "Average height at every age from 5 to 19 for boys and girls in 200 countries, with a growth chart and a quick check of your child’s height against the average.",
    h1: "Average height by age: growth chart for boys and girls",
    intro: "See the average height at each age from 5 to 19 in any country, and compare a child’s height with it.",
    tableTitle: "Average height by age — {country}",
    above: "{diff} above the average for age {age}",
    below: "{diff} below the average for age {age}",
    atAverage: "Right at the average for age {age}",
    chartBoys: "Boys",
    chartGirls: "Girls",
    childPoint: "Your child",
    contentTitle: "How children grow",
    content: [
      "From age 5 until puberty, children grow about 5–6 cm (2 in) a year. Across 200 countries, girls’ fastest growth year is typically between ages 10 and 11, and boys’ between 12 and 13.",
      "By 14, girls have on average reached 98% of their adult height and boys about 94%. Boys reach roughly 98% by 16. After 17, average growth drops below 1 cm (0.4 in) a year.",
      "These are national averages, which smooth out individual growth spurts. A healthy child can be well above or below the average line; what matters most is steady growth over time.",
    ],
    faq: [
      {
        q: "What is the average height for a 12-year-old?",
        a: "It depends on the country: in the United States about 155 cm (5′1″) for boys and girls, in Japan about 151 cm (just under 5 ft) and in India about 142–144 cm (4′8″–4′9″). Choose a country above to see the exact figures.",
      },
      {
        q: "At what age do girls and boys stop growing?",
        a: "Most girls are close to their adult height by 15–16 and most boys by 17–18. After that, average growth is under 1 cm a year.",
      },
      {
        q: "Is my child’s height normal?",
        a: "Children vary widely around the average, so one measurement above or below it is usually normal. Talk to a doctor if growth suddenly slows or a child moves far from their usual position over time.",
      },
    ],
  },
  bmi: {
    metaTitle: "BMI Calculator & Healthy Weight for Your Height",
    metaDescription:
      "Calculate your BMI in metric or imperial units and see the healthy weight range for your height, with a height–weight chart based on WHO BMI categories.",
    h1: "BMI calculator and healthy weight for your height",
    intro: "Enter your height and weight to get your body mass index (BMI) and the healthy weight range for your height.",
    weight: "Weight",
    yourBmi: "Your BMI",
    categories: {
      underweight: "Underweight",
      normal: "Healthy weight",
      overweight: "Overweight",
      obese: "Obesity",
    },
    healthyRange: "Healthy weight for {height}: {low} – {high}",
    chartTitle: "Healthy weight range by height",
    colHeight: "Height",
    colRange: "Healthy weight (BMI 18.5–24.9)",
    note: "For adults aged 18 and over. BMI does not distinguish muscle from fat; children and teenagers need age-specific BMI charts.",
    contentTitle: "What BMI tells you",
    content: [
      "BMI is weight in kilograms divided by height in metres squared. The World Health Organization classifies adult BMI as underweight below 18.5, healthy from 18.5 to 24.9, overweight from 25 to 29.9 and obesity from 30.",
      "Because it only uses height and weight, BMI is a quick screening number rather than a diagnosis. Very muscular people can have a high BMI without excess fat, and some health guidelines use lower thresholds for people of Asian descent.",
    ],
    faq: [
      { q: "What is a healthy BMI?", a: "For adults, the WHO healthy range is 18.5 to 24.9." },
      { q: "How is BMI calculated?", a: "Divide weight in kilograms by height in metres squared. For example, 70 kg at 1.75 m is 70 ÷ 3.06 = 22.9." },
      {
        q: "What is a healthy weight for 170 cm?",
        a: "For 170 cm (5′7″), a BMI of 18.5–24.9 corresponds to about 53.5–72.0 kg (118–159 lb).",
      },
    ],
  },
  person: {
    metaTitle: "{name} Height – How Tall Is {name}? ({cm} / {ftin})",
    metaDescription:
      "{name} is {cm} ({ftin}) tall. Compare {name}’s height with the average man and woman and see who else is about the same height.",
    h1: "{name} height",
    answer: "{name} is {cm} ({ftin}) tall.",
    boardTitle: "{name} next to the average man and woman",
    statsTitle: "How tall is that?",
    tallerThan: "Taller than {pct} of {group} worldwide",
    groupMen: "men",
    groupWomen: "women",
    diffTaller: "{diff} taller than the average {who}",
    diffShorter: "{diff} shorter than the average {who}",
    whoMan: "man",
    whoWoman: "woman",
    similarTitle: "About the same height",
    compareCta: "Compare {name} with yourself",
    sourceNote: "Height as commonly reported for {name}; figures can differ slightly between sources.",
    faqFeet: "How tall is {name} in feet?",
    faqFeetA: "{name} is {ftin} tall, which is {cm}.",
    faqTall: "Is {name} tall?",
    faqTallAbove: "Yes. At {cm}, {name} is taller than {pct} of {group} worldwide.",
    faqTallAverage: "{name} is close to average: at {cm}, taller than {pct} of {group} worldwide.",
    faqTallBelow: "{name} is shorter than average: at {cm}, taller than only {pct} of {group} worldwide.",
    faqVs: "Is {name} taller than {other}?",
    faqVsTaller: "Yes. {name} ({cm}) is {diff} taller than {other} ({otherCm}).",
    faqVsShorter: "No. {name} ({cm}) is {diff} shorter than {other} ({otherCm}).",
    faqVsSame: "They are the same height: {cm}.",
  },
  people: {
    metaTitle: "Celebrity Heights – How Tall Are Famous People & Characters?",
    metaDescription:
      "Heights of athletes, actors, musicians and anime characters in cm and feet, each with a visual comparison against the average man and woman.",
    h1: "Celebrity, athlete and character heights",
    intro: "Pick a name to see their height on a to-scale chart and compare it with yours.",
  },
  guides: {
    metaTitle: "Height Guides – Measuring, Growth and Height Differences",
    metaDescription: "Practical guides on measuring height at home, when people stop growing and what height differences look like.",
    h1: "Height guides",
    intro: "Short, practical guides with the numbers behind them.",
    read: "Read guide",
    minutes: "{n} min read",
  },
};

export default more;

type Widen<T> = T extends string
  ? string
  : T extends readonly (infer U)[]
    ? Widen<U>[]
    : T extends object
      ? { [K in keyof T]: Widen<T[K]> }
      : T;

export type MoreMessages = Widen<typeof more>;

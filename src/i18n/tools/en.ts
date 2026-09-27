const tools = {
  common: {
    tools: "Tools",
    home: "Home",
    hubMetaTitle: "Free Height Tools – Converter, Calculators & Data",
    hubMetaDescription:
      "Free height tools: convert cm to feet and inches, calculate height differences, check your height percentile and compare average heights by country.",
    hubH1: "Height tools",
    hubIntro: "Quick calculators and reference data that work alongside the height comparison chart.",
    relatedTitle: "More height tools",
    boardCta: "Compare on the height chart",
    boardCtaBody: "Line people, characters and objects up side by side on one visual scale.",
    openInBoard: "Open in height chart",
    faqTitle: "Frequently asked questions",
    men: "Men",
    women: "Women",
    man: "Man",
    woman: "Woman",
    sex: "Sex",
    country: "Country",
    height: "Height",
    source: "Source",
    sourceNcd:
      "NCD Risk Factor Collaboration (NCD-RisC), Lancet 2020 — mean height of 19-year-olds, latest estimates. Licensed CC BY 4.0.",
  },
  names: {
    "height-converter": {
      name: "Height converter",
      blurb: "Convert cm to feet and inches and back, with a full conversion table.",
    },
    "height-difference-calculator": {
      name: "Height difference calculator",
      blurb: "Find the exact gap between two heights and see where one person reaches on the other.",
    },
    "average-height-by-country": {
      name: "Average height by country",
      blurb: "Average height of men and women in 200 countries, ranked and searchable.",
    },
    "height-percentile-calculator": {
      name: "Height percentile calculator",
      blurb: "See what percentage of men or women you are taller than, in your country and worldwide.",
    },
    "hug-simulator": {
      name: "Hug simulator",
      blurb: "See a to-scale front or back hug for any two heights, and where your heads meet.",
    },
    "3d-height-comparison": {
      name: "3D height comparison",
      blurb: "Compare people, animals and objects as 3D models you can rotate and zoom.",
    },
  },
  converter: {
    metaTitle: "Height Converter – cm to Feet and Inches (and Back)",
    metaDescription:
      "Convert height from cm to feet and inches or from ft/in to cm instantly. Includes a height conversion chart from 4′6″ to 7′0″ and 140 to 215 cm.",
    h1: "Height converter: cm ↔ feet and inches",
    intro: "Type a height in any box and the others update instantly. Results are rounded to the nearest inch or 0.1 cm.",
    centimeters: "Centimeters",
    meters: "Meters",
    feetInches: "Feet + inches",
    totalInches: "Total inches",
    result: "{cm} is {ftin}",
    tableCmTitle: "Centimeters to feet and inches chart",
    tableFtTitle: "Feet and inches to centimeters chart",
    colCm: "cm",
    colFtIn: "ft / in",
    colInches: "inches",
    howTitle: "How to convert height",
    how: [
      "One inch is exactly 2.54 cm and one foot is 12 inches (30.48 cm).",
      "cm to feet and inches: divide the centimeters by 2.54 to get total inches, then divide by 12. The whole number is the feet and the remainder is the inches. Example: 175 cm ÷ 2.54 = 68.9 in → 5 ft 8.9 in ≈ 5′9″.",
      "Feet and inches to cm: multiply feet by 12, add the inches, then multiply by 2.54. Example: 5′10″ = 70 in × 2.54 = 177.8 cm.",
    ],
    faq: [
      { q: "How tall is 170 cm in feet?", a: "170 cm is about 5 feet 7 inches (5′6.9″)." },
      { q: "What is 6 feet in cm?", a: "6 feet is exactly 182.88 cm, usually rounded to 183 cm." },
      { q: "What is 5′5″ in cm?", a: "5 feet 5 inches is 165.1 cm." },
      {
        q: "Why do height conversions sometimes differ by a centimeter?",
        a: "Heights in feet are usually rounded to the nearest inch, and one inch is 2.54 cm, so a rounded value can shift by up to about 1.3 cm.",
      },
    ],
  },
  difference: {
    metaTitle: "Height Difference Calculator – Compare Two Heights",
    metaDescription:
      "Calculate the height difference between two people in cm and feet/inches, see the percentage gap and where the shorter person reaches on the taller one.",
    h1: "Height difference calculator",
    intro: "Enter two heights to get the exact gap in cm and ft/in, the percentage difference and a to-scale preview.",
    personA: "Person A",
    personB: "Person B",
    name: "Name",
    difference: "Difference",
    percentTaller: "{a} is {pct} taller than {b}",
    sameHeight: "Both are the same height",
    reachTitle: "Where the top of {b}’s head reaches on {a}",
    reach: {
      eyes: "Eye level",
      nose: "Nose or mouth",
      chin: "Chin",
      shoulders: "Shoulders",
      chest: "Chest",
      waist: "Waist",
      below: "Below the waist",
    },
    reachNote: "Based on average adult body proportions; posture, footwear and hair change the real result.",
    categoryTitle: "How big is the gap?",
    categories: {
      tiny: "Barely noticeable (under 3 cm / 1 in)",
      small: "Small (3–7 cm / 1–3 in)",
      medium: "Noticeable (8–14 cm / 3–5.5 in)",
      large: "Large (15–24 cm / 6–9.5 in)",
      huge: "Very large (25 cm / 10 in or more)",
    },
    contentTitle: "Understanding height differences",
    content: [
      "Height gaps feel bigger or smaller than the raw number suggests. A 10 cm (4 in) difference means the shorter person’s eyes are roughly level with the taller person’s mouth, which is very visible in photos.",
      "The percentage difference is useful when comparing different sizes: a 20 cm gap between adults of 165 and 185 cm is about 12%, while the same 20 cm between children of 100 and 120 cm is 20%.",
      "For couples, a gap of around 12 cm (5 in) is typical, because that is roughly how much taller average men are than average women worldwide.",
    ],
    faq: [
      {
        q: "How do I calculate a height difference?",
        a: "Subtract the shorter height from the taller one. To get the percentage, divide the difference by the shorter height and multiply by 100.",
      },
      {
        q: "Is a 15 cm height difference a lot?",
        a: "15 cm (about 6 in) is a clearly visible gap: the top of the shorter person’s head usually reaches about the taller person’s nose.",
      },
      {
        q: "What is the average height difference between men and women?",
        a: "Worldwide, 19-year-old men average 170.8 cm and women 158.6 cm, a gap of about 12 cm (4.8 in).",
      },
    ],
  },
  countries: {
    metaTitle: "Average Height by Country 2026 – Men & Women (200 Countries)",
    metaDescription:
      "Average height of men and women in 200 countries in cm and feet, ranked from tallest to shortest, with the change since 1985. Based on NCD-RisC data.",
    h1: "Average height by country",
    intro:
      "Mean height of 19-year-old men and women in 200 countries — the age at which most people reach their adult height.",
    search: "Search country…",
    sortBy: "Sort by",
    rank: "#",
    change: "Since 1985",
    compare: "Compare",
    world: "World",
    tallestMen: "Tallest men",
    tallestWomen: "Tallest women",
    shortestMen: "Shortest men",
    shortestWomen: "Shortest women",
    worldAverage: "World average",
    contentTitle: "What the data shows",
    content: [
      "The Netherlands has the tallest young adults in the world: men average 183.8 cm (6′0″) and women 170.4 cm (5′7″). The shortest averages are found in Timor-Leste for men (160.1 cm) and Guatemala for women (150.9 cm).",
      "Worldwide, men average 170.8 cm (5′7″) and women 158.6 cm (5′2″). The gap between the tallest and shortest countries is more than 20 cm.",
      "Height is shaped by genetics, but differences between countries mostly reflect childhood nutrition, health and living conditions. That is why average height has risen by several centimeters in many countries since 1985.",
    ],
    methodTitle: "About the data",
    method:
      "Figures are NCD-RisC estimates of mean height at age 19 for the latest available year, pooled from population-based measurement studies (not self-reported heights). Values are rounded to 0.1 cm.",
    faq: [
      { q: "Which country has the tallest people?", a: "The Netherlands, with an average of 183.8 cm for men and 170.4 cm for women." },
      { q: "Which country has the shortest people?", a: "Timor-Leste has the shortest average for men (160.1 cm) and Guatemala for women (150.9 cm)." },
      { q: "What is the average height in the world?", a: "About 170.8 cm (5′7″) for men and 158.6 cm (5′2″) for women." },
      {
        q: "Why use 19-year-olds?",
        a: "Most people have reached their adult height by 19, and using one age makes countries directly comparable across generations.",
      },
    ],
  },
  percentile: {
    metaTitle: "Height Percentile Calculator – How Tall Are You Really?",
    metaDescription:
      "Find your height percentile: see what percent of men or women you are taller than in your country and in the world, based on NCD-RisC average heights.",
    h1: "Height percentile calculator",
    intro: "Enter your height and sex to see how you rank against adults in your country and around the world.",
    yourHeight: "Your height",
    result: "You are taller than {pct} of {group} in {country}.",
    groupMen: "men",
    groupWomen: "women",
    oneIn: "About 1 in {n} is taller than you.",
    zScore: "{sd} standard deviations from the average ({avg})",
    otherCountries: "Your percentile in other countries",
    percentile: "Percentile",
    average: "Average",
    note:
      "Estimate: assumes heights follow a normal distribution around each country’s NCD-RisC average, with a typical spread of 7.1 cm for men and 6.6 cm for women. Real distributions vary slightly by country.",
    contentTitle: "What a height percentile means",
    content: [
      "A percentile tells you the share of people who are shorter than you. At the 50th percentile you are exactly average; at the 90th percentile you are taller than 9 out of 10 people of the same sex.",
      "Because averages differ between countries, the same height can be tall in one place and average in another. 175 cm is above average for men in India or Japan, but below average in the Netherlands.",
    ],
    faq: [
      {
        q: "Is 180 cm tall for a man?",
        a: "Yes, in most countries. Worldwide, 180 cm (5′11″) is taller than roughly 90% of men, though in the Netherlands, where men average 183.8 cm, it is below average.",
      },
      {
        q: "Is 170 cm tall for a woman?",
        a: "Yes. 170 cm (5′7″) is taller than about 96% of women worldwide and is about the average for women in the Netherlands.",
      },
      {
        q: "How accurate is this calculator?",
        a: "Averages come from measured national data, but the spread is modeled with a typical standard deviation, so treat results as a good estimate rather than an exact rank.",
      },
    ],
  },
};

export default tools;

type Widen<T> = T extends string
  ? string
  : T extends readonly (infer U)[]
    ? Widen<U>[]
    : T extends object
      ? { [K in keyof T]: Widen<T[K]> }
      : T;

export type ToolsMessages = Widen<typeof tools>;

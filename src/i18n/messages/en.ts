const en = {
  meta: {
    title: "Height Comparison Tool – Compare Heights on a Visual Chart",
    description:
      "Free height comparison tool: compare people, celebrities, anime characters and objects side by side on an accurate chart in cm or feet and inches. Share or download in one click.",
    ogAlt: "Height comparison chart with several people side by side",
  },
  nav: {
    tool: "Height Comparison",
    tools: "Tools",
    language: "Language",
    skip: "Skip to content",
  },
  board: {
    title: "Height comparison board",
    add: "Add",
    addMan: "Man",
    addWoman: "Woman",
    addObject: "Object",
    addImage: "Image",
    library: "Library",
    searchPlaceholder: "Search people, characters, objects…",
    noResults: "No matches. Add a custom person instead.",
    categories: {
      generic: "People",
      athlete: "Athletes",
      celebrity: "Celebrities",
      character: "Characters",
      record: "Records",
      object: "Objects",
      animal: "Animals",
    },
    defaultMan: "Man",
    defaultWoman: "Woman",
    defaultObject: "Object",
    defaultImage: "Image",
    name: "Name",
    height: "Height",
    feet: "ft",
    inches: "in",
    unitMetric: "cm",
    unitImperial: "ft/in",
    type: "Type",
    kinds: { male: "Man", female: "Woman", object: "Object", image: "Image" },
    build: "Build",
    builds: { slim: "Slim", average: "Average", broad: "Broad" },
    shape: "Shape",
    shapes: { block: "Block", door: "Door", tree: "Tree", building: "Building", tower: "Tower" },
    adultProportions: "Adult proportions",
    color: "Color",
    remove: "Remove",
    duplicate: "Duplicate",
    moveLeft: "Move left",
    moveRight: "Move right",
    share: "Share",
    linkCopied: "Link copied",
    download: "Download PNG",
    reset: "Reset",
    clearAll: "Clear all",
    subjects: "Subjects",
    empty: "Add a person, object or image to start comparing.",
    tallerBy: "{a} is {diff} ({pct}) taller than {b}",
    sameHeight: "{a} and {b} are the same height",
    imageNote: "Uploaded images stay on your device and are not included in share links.",
    edit: "Edit",
    done: "Done",
    fitAll: "Fit all",
    focus: "Focus",
    resize: "Drag to change height",
    loading3d: "Loading 3D…",
    orbitHint: "Drag to rotate · scroll or pinch to zoom",
  },
  home: {
    h1: "Height Comparison Tool",
    tagline:
      "Compare the height of people, celebrities, characters and objects side by side on one accurate chart, in centimeters or feet and inches.",
    howTitle: "How to compare heights",
    how: [
      {
        title: "Add subjects",
        body: "Add a man, woman, object or your own image, or pick from the library of celebrities, athletes and anime characters.",
      },
      {
        title: "Set exact heights",
        body: "Type heights in cm or ft/in. Figures are drawn to scale with age-appropriate body proportions.",
      },
      {
        title: "Share or download",
        body: "Copy a link that recreates your chart, or download a PNG for chats, social posts and reference sheets.",
      },
    ],
    featuresTitle: "Why use this height comparison chart",
    features: [
      {
        title: "True-to-scale drawing",
        body: "Every figure shares one vertical scale with a grid in both metric and imperial units, so gaps are exact.",
      },
      {
        title: "Realistic proportions",
        body: "Children are drawn with larger heads and shorter legs; adults use a 7.5-head canon. Choose slim, average or broad builds.",
      },
      {
        title: "People, characters and objects",
        body: "Compare yourself with athletes, actors, anime heroes, doors, cars, trees and landmarks as tall as the Burj Khalifa.",
      },
      {
        title: "Free, fast, no sign-up",
        body: "Everything runs in your browser. Share links store the chart itself, so nothing is uploaded.",
      },
    ],
    useCasesTitle: "Popular ways to use it",
    useCases: [
      { title: "Couple height difference", body: "See how you and your partner line up, and how big the gap looks in photos." },
      { title: "Celebrity height check", body: "Stand next to LeBron James, Taylor Swift or Tom Cruise and see the real difference." },
      { title: "Character size reference", body: "Artists and writers can line up characters to keep scale consistent across scenes." },
      { title: "Kids’ growth", body: "Track how a child compares with siblings, parents or the average height for their age." },
    ],
    faqTitle: "Frequently asked questions",
    faq: [
      {
        q: "How accurate is the height comparison?",
        a: "Figures are drawn on a single linear scale, so the visual difference exactly matches the numbers you enter. Library heights are commonly reported values and may differ slightly from other sources.",
      },
      {
        q: "Can I switch between centimeters and feet?",
        a: "Yes. Use the cm / ft-in toggle above the chart. You can type heights in either unit and both are always shown on the labels and grid.",
      },
      {
        q: "How do I compare my height with a celebrity?",
        a: "Add a person with your height, then open the library, search for the celebrity and tap to add them next to you.",
      },
      {
        q: "Can I save or share my chart?",
        a: "Tap Share to copy a link that rebuilds the same chart for anyone who opens it, or Download PNG to save an image.",
      },
      {
        q: "Why do short figures look like children?",
        a: "Body proportions change with age, so heights below adult range get a child’s proportions. Tick “Adult proportions” for short adults.",
      },
      {
        q: "Can I compare objects and buildings?",
        a: "Yes. Add doors, cars, trees or landmarks, or create a custom object with any height and width, up to kilometers tall.",
      },
    ],
    ctaTitle: "Start comparing heights",
    ctaBody: "Your chart is at the top of the page. It updates as you type.",
    ctaButton: "Go to the chart",
  },
  footer: {
    about: "A free visual height comparison tool for people, characters and objects.",
    rights: "All rights reserved.",
  },
};

export default en;

type Widen<T> = T extends string
  ? string
  : T extends readonly (infer U)[]
    ? Widen<U>[]
    : T extends object
      ? { [K in keyof T]: Widen<T[K]> }
      : T;

export type Messages = Widen<typeof en>;

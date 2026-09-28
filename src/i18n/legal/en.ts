/**
 * Privacy policy and terms. Plain-language templates describing what the site
 * actually does; have them reviewed before launch in regulated markets.
 * `{email}` and `{site}` are filled in from siteConfig.
 */
const legal = {
  privacy: {
    metaTitle: "Privacy Policy",
    metaDescription: "How {site} handles your data: no accounts, charts stay in your browser, and anonymous usage statistics with Google Analytics.",
    h1: "Privacy policy",
    intro:
      "{site} is a free height comparison tool. We collect as little data as possible. This policy explains what is processed when you use the site and the choices you have.",
    sections: [
      {
        h: "Data you enter",
        p: [
          "Names and heights you type into the tools are processed in your browser. We do not store them on our servers.",
          "When you use Share, the chart is encoded into the link itself. Anyone with the link can see that chart, so avoid putting private information in names.",
          "Images you upload are read locally by your browser and are never uploaded or included in share links.",
        ],
      },
      {
        h: "Cookies and local storage",
        p: [
          "We store a few technical preferences in your browser’s local storage. These are necessary for the site to work as you expect.",
          "We use Google Analytics to measure anonymous usage such as pages visited, country and device type. Google Analytics sets cookies for this purpose. You can block or delete cookies in your browser settings, or install Google’s opt-out browser add-on (tools.google.com/dlpage/gaoptout).",
          "If we show advertising in the future, it will only use personalised ad cookies with your consent, and this policy will be updated first.",
        ],
      },
      {
        h: "Server logs",
        p: [
          "Our hosting provider automatically processes technical data such as IP address, browser type and requested pages to deliver the site and protect it from abuse. These logs are kept for a limited time and are not used to identify you.",
        ],
      },
      {
        h: "Your rights",
        p: [
          "Depending on where you live (for example under the GDPR in the EU or the CCPA in California), you may have the right to access, correct or delete personal data and to object to processing. Because we do not keep accounts or chart data, most requests can be handled by clearing your browser storage. For anything else, contact us at {email}.",
        ],
      },
      {
        h: "Children",
        p: ["The site is suitable for general audiences and does not knowingly collect personal data from children."],
      },
      {
        h: "Changes",
        p: ["We may update this policy. The date at the top of the page shows the latest version."],
      },
    ],
  },
  terms: {
    metaTitle: "Terms of Service",
    metaDescription: "The terms for using {site}, a free visual height comparison tool, including acceptable use and disclaimers.",
    h1: "Terms of service",
    intro: "By using {site} you agree to these terms. If you do not agree, please do not use the site.",
    sections: [
      {
        h: "Using the tools",
        p: [
          "The tools are free for personal, educational and commercial use. You may share and publish charts you create, including downloaded images.",
          "Do not misuse the site, for example by attempting to disrupt it, scraping it at a volume that affects other users, or using it to create unlawful or harassing content.",
        ],
      },
      {
        h: "Accuracy",
        p: [
          "Heights of public figures, characters, animals and objects are commonly reported values and may differ from other sources. Statistics come from the cited research datasets. Body proportions in drawings and 3D models are approximations.",
          "The site is for information and entertainment. It is not medical advice; consult a professional about growth or health questions.",
        ],
      },
      {
        h: "Intellectual property",
        p: [
          "The site’s design, code and illustrations belong to {site}. Names of people, characters and landmarks belong to their respective owners and are used for identification only.",
          "Average-height data is © NCD Risk Factor Collaboration and used under the CC BY 4.0 licence.",
        ],
      },
      {
        h: "Liability",
        p: [
          "The site is provided “as is” without warranties. To the extent permitted by law, we are not liable for losses arising from its use.",
        ],
      },
      {
        h: "Contact",
        p: ["Questions about these terms: {email}."],
      },
    ],
  },
};

export default legal;

type Widen<T> = T extends string
  ? string
  : T extends readonly (infer U)[]
    ? Widen<U>[]
    : T extends object
      ? { [K in keyof T]: Widen<T[K]> }
      : T;

export type LegalMessages = Widen<typeof legal>;

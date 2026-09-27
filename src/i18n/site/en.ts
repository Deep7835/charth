/** Site chrome: menus, search, theme, consent, dialogs and error pages. */
const site = {
  menu: "Menu",
  close: "Close",
  search: "Search",
  searchPlaceholder: "Search tools, people, animals…",
  searchEmpty: "No results",
  searchPages: "Pages & tools",
  searchLibrary: "Compare on the chart",
  backToTop: "Back to top",
  notFoundTitle: "Page not found",
  notFoundBody: "The page you’re looking for doesn’t exist or has moved.",
  notFoundCta: "Go to the height comparison tool",
  lastUpdated: "Last updated: {date}",
  cookieText:
    "We use cookies for anonymous analytics to improve the site. You can accept or decline non-essential cookies at any time.",
  cookieAccept: "Accept",
  cookieDecline: "Decline",
  cookieSettings: "Cookie settings",
  privacy: "Privacy policy",
  terms: "Terms of service",
  contact: "Contact",
  footerProduct: "Product",
  footerResources: "Resources",
  footerCompany: "Company",
  footerLegal: "Legal",
  footerHowItWorks: "How it works",
  footerFaq: "FAQ",
  footerAllTools: "All tools",
  footerTagline: "Heights are stored in centimeters and drawn on a single shared scale.",
  confirmResetTitle: "Reset the chart?",
  confirmResetBody: "This removes all subjects and restores the default chart. Your current chart can’t be recovered.",
  confirmReset: "Reset chart",
  cancel: "Cancel",
  copy: "Copy",
  copied: "Copied",
  copyFailed: "Couldn’t copy. Select the text and copy it manually.",
  invalidHeight: "Enter a height greater than 0.",
};

export default site;

type Widen<T> = T extends string
  ? string
  : T extends readonly (infer U)[]
    ? Widen<U>[]
    : T extends object
      ? { [K in keyof T]: Widen<T[K]> }
      : T;

export type SiteMessages = Widen<typeof site>;

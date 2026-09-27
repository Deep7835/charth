/** Localized country name from an ISO alpha-2 code, falling back to the dataset name. */
export function countryNamer(locale: string) {
  let names: Intl.DisplayNames | null = null;
  try {
    names = new Intl.DisplayNames([locale], { type: "region" });
  } catch {
    names = null;
  }
  return (code: string, fallback: string) => {
    try {
      const n = names?.of(code);
      return n && n !== code ? n : fallback;
    } catch {
      return fallback;
    }
  };
}

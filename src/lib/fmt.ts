/**
 * Replace `{name}` placeholders. Values are wrapped in Unicode first-strong
 * isolates (U+2068…U+2069) so numbers and Latin names keep their order inside
 * right-to-left sentences; the marks are invisible in every language.
 */
export function fmt(template: string, values: Record<string, string | number>) {
  return template.replace(/\{(\w+)\}/g, (_, key) => (key in values ? `⁨${values[key]}⁩` : `{${key}}`));
}

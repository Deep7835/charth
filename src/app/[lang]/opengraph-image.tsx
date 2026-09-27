import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";
import { locales } from "@/i18n/config";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${siteConfig.name} – height comparison chart`;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

const bars = [
  { h: 330, c: "#1e3a8a" },
  { h: 290, c: "#be185d" },
  { h: 200, c: "#0f766e" },
  { h: 380, c: "#7c3aed" },
  { h: 250, c: "#b45309" },
];

// Latin-only text keeps the image font-safe for every locale.
export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "linear-gradient(135deg, #eff6ff 0%, #ffffff 60%)",
          padding: 64,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", width: 560 }}>
          <div style={{ fontSize: 34, fontWeight: 700, color: "#1d4ed8" }}>{siteConfig.name}</div>
          <div style={{ fontSize: 68, fontWeight: 800, color: "#0f172a", lineHeight: 1.05, marginTop: 16 }}>
            Height Comparison Chart
          </div>
          <div style={{ fontSize: 30, color: "#475569", marginTop: 20 }}>cm · ft/in · people · characters · objects</div>
        </div>
        <div style={{ display: "flex", alignItems: "flex-end", gap: 26, marginLeft: 40, borderBottom: "6px solid #94a3b8" }}>
          {bars.map((b, i) => (
            <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div style={{ width: 46, height: 46, borderRadius: 23, background: b.c }} />
              <div style={{ width: 62, height: b.h, background: b.c, borderRadius: "22px 22px 0 0", marginTop: 6 }} />
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}

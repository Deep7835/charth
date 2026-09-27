import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "flex-end", justifyContent: "center", gap: 14, padding: "36px 30px", background: "#1d4ed8" }}>
        <div style={{ width: 30, height: 90, borderRadius: 10, background: "#fff" }} />
        <div style={{ width: 30, height: 62, borderRadius: 10, background: "#93c5fd" }} />
        <div style={{ width: 30, height: 108, borderRadius: 10, background: "#fff" }} />
      </div>
    ),
    size,
  );
}

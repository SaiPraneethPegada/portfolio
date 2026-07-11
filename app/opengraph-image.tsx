import { ImageResponse } from "next/og";
import { site } from "@/lib/content/site";

export const dynamic = "force-static";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          backgroundColor: "#0a0a0b",
          padding: "80px",
        }}
      >
        <div
          style={{
            fontSize: 28,
            color: "#8ffbf7",
            fontFamily: "monospace",
            marginBottom: 24,
          }}
        >
          {"{ SP }"}
        </div>
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: "#fafafa",
            marginBottom: 16,
          }}
        >
          {site.name}
        </div>
        <div style={{ fontSize: 36, color: "#a1a1aa" }}>{site.role}</div>
        <div style={{ fontSize: 28, color: "#8ffbf7", marginTop: 32 }}>
          {site.tagline}
        </div>
      </div>
    ),
    { ...size }
  );
}

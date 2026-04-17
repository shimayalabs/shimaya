import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Shimaya — Senior Frontend Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background: "linear-gradient(135deg, #0f0c29 0%, #1a1560 50%, #3b309e 100%)",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            background: "rgba(138,247,207,0.15)",
            border: "1px solid rgba(138,247,207,0.3)",
            borderRadius: "100px",
            padding: "8px 20px",
            width: "fit-content",
          }}
        >
          <div
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "#8af7cf",
            }}
          />
          <span
            style={{
              fontSize: "14px",
              fontWeight: 600,
              color: "#8af7cf",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            Available for projects
          </span>
        </div>

        {/* Main content */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div
            style={{
              fontSize: "72px",
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
            }}
          >
            Senior Frontend
            <br />
            <span style={{ color: "#c5c0ff" }}>Engineer</span>
          </div>
          <div
            style={{
              fontSize: "24px",
              color: "rgba(255,255,255,0.65)",
              maxWidth: "700px",
              lineHeight: 1.5,
            }}
          >
            Next.js · React · Design Systems · 7+ Years · 98 Lighthouse
          </div>
        </div>

        {/* Bottom row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            <span style={{ fontSize: "32px", fontWeight: 700, color: "#ffffff" }}>
              Shimaya
            </span>
            <span style={{ fontSize: "16px", color: "rgba(255,255,255,0.5)" }}>
              shimayalabs.com
            </span>
          </div>
          <div style={{ display: "flex", gap: "32px" }}>
            {[
              { value: "7+", label: "Years" },
              { value: "12+", label: "Projects" },
              { value: "98", label: "Lighthouse" },
            ].map((stat) => (
              <div
                key={stat.label}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                <span style={{ fontSize: "36px", fontWeight: 800, color: "#c5c0ff" }}>
                  {stat.value}
                </span>
                <span
                  style={{
                    fontSize: "12px",
                    color: "rgba(255,255,255,0.5)",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                  }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}

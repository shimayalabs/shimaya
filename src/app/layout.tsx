import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.scss";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://shimayalabs.com";

// Self-hosted Archivo (same files as the Stackave site) so builds don't
// depend on a Google Fonts network fetch.
const archivo = localFont({
  src: [
    { path: "./fonts/archivo-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/archivo-500.woff2", weight: "500", style: "normal" },
    { path: "./fonts/archivo-600.woff2", weight: "600", style: "normal" },
    { path: "./fonts/archivo-700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-archivo",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0070eb",
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "Shimaya Labs - AI Products & Digital Engineering Agency",
    template: "%s | Shimaya Labs",
  },
  description:
    "Shimaya Labs builds intelligent digital products and AI experiences for high-growth startups and enterprises. Custom LLMs, SaaS platforms, web development, and automation.",

  keywords: [
    "AI development agency",
    "digital product engineering",
    "SaaS platform development",
    "Next.js agency India",
    "LLM integration",
    "web development agency",
    "AI automation",
    "enterprise software development",
    "Shimaya Labs",
    "frontend engineering",
    "full stack product development",
  ],

  authors: [{ name: "Shimaya Labs", url: BASE_URL }],
  creator: "Shimaya Labs",
  publisher: "Shimaya Labs",

  alternates: {
    canonical: BASE_URL,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Shimaya Labs",
    title: "Shimaya Labs - AI Products & Digital Engineering Agency",
    description:
      "Building intelligent digital products and AI experiences for high-growth startups and enterprises. Custom LLMs, SaaS platforms, and precision-engineered web products.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Shimaya Labs - AI Products & Digital Engineering",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Shimaya Labs - AI Products & Digital Engineering Agency",
    description:
      "Building intelligent digital products and AI experiences for high-growth startups and enterprises.",
    images: ["/opengraph-image"],
    creator: "@shimayalabs",
  },

  category: "technology",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: "Shimaya Labs",
      url: BASE_URL,
      email: "shimayalabs@gmail.com",
      description:
        "Shimaya Labs builds intelligent digital products and AI experiences for high-growth startups and enterprises.",
      serviceType: [
        "AI Solutions",
        "Web Development",
        "SaaS Platforms",
        "UI/UX Design",
        "Automation",
        "Digital Strategy",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: "Shimaya Labs",
      description:
        "AI products and digital engineering for high-growth startups and enterprises.",
      publisher: { "@id": `${BASE_URL}/#organization` },
      inLanguage: "en-US",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={archivo.variable}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

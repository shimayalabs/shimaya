import type { Metadata, Viewport } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://shimayalabs.com";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#3b309e",
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "Shimaya — Senior Frontend Engineer | Next.js & React",
    template: "%s | Shimaya",
  },
  description:
    "Shivangi is a Senior Frontend Engineer (7+ yrs) specialising in Next.js, React & design systems. Based in Noida, India — building fast, conversion-ready web products for SMBs worldwide.",

  keywords: [
    "frontend engineer Noida",
    "Next.js developer India",
    "React developer freelance",
    "hire frontend developer India",
    "web development SMB",
    "design systems engineer",
    "JavaScript consultant India",
    "Next.js App Router expert",
    "TypeScript developer",
    "Shivangi Shukla developer",
    "Shimaya web",
    "senior React engineer",
    "full stack product development",
    "Lighthouse 98 website",
  ],

  authors: [{ name: "Shivangi", url: BASE_URL }],
  creator: "Shivangi",
  publisher: "Shimaya",

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
    siteName: "Shimaya",
    title: "Shimaya — Senior Frontend Engineer | Next.js & React",
    description:
      "7+ years building enterprise-grade web products. React, Next.js, design systems — end to end. 98 Lighthouse score. Book a free discovery call.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Shimaya — Senior Frontend Engineer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Shimaya — Senior Frontend Engineer | Next.js & React",
    description:
      "7+ years building enterprise-grade web products. React, Next.js, design systems — end to end.",
    images: ["/opengraph-image"],
    creator: "@shimayalabs",
  },

  category: "technology",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${BASE_URL}/#person`,
      name: "Shivangi",
      jobTitle: "Senior Frontend Engineer",
      description:
        "Senior Frontend Engineer with 7+ years of experience building high-performance Next.js and React web products for SMBs and enterprises.",
      url: BASE_URL,
      email: "shimayalabs@gmail.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Noida",
        addressRegion: "Uttar Pradesh",
        addressCountry: "IN",
      },
      worksFor: {
        "@type": "Organization",
        name: "Shimaya",
        url: BASE_URL,
      },
      alumniOf: [
        { "@type": "Organization", name: "Monotype" },
        { "@type": "Organization", name: "Accenture" },
        { "@type": "Organization", name: "Publicis Sapient" },
      ],
      knowsAbout: [
        "React",
        "Next.js",
        "TypeScript",
        "Design Systems",
        "Web Performance",
        "Core Web Vitals",
        "Frontend Architecture",
      ],
      sameAs: [`${BASE_URL}`],
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: "Shimaya",
      description:
        "Senior Frontend Engineer building fast, conversion-ready Next.js web products for SMBs.",
      publisher: { "@id": `${BASE_URL}/#person` },
      inLanguage: "en-US",
    },
    {
      "@type": "ProfessionalService",
      "@id": `${BASE_URL}/#service`,
      name: "Shimaya — Frontend Engineering Services",
      url: BASE_URL,
      description:
        "Expert frontend and full-stack development services. Specialising in Next.js, React, and design systems for SMBs.",
      provider: { "@id": `${BASE_URL}/#person` },
      areaServed: "Worldwide",
      serviceType: [
        "Web Development",
        "Frontend Engineering",
        "Full-Stack Product Development",
        "Design System Engineering",
        "Next.js Development",
        "React Development",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Engineering Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Web & Frontend Development",
              description:
                "Bespoke interfaces built with React and Next.js — performance, accessibility, and pixel-perfect execution.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Full-stack Product Development",
              description:
                "End-to-end engineering from database design to deployment for SMB growth.",
            },
          },
        ],
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${inter.variable} h-full scroll-smooth`}
      suppressHydrationWarning
    >
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
      <body className="min-h-full bg-surface text-on-surface antialiased">
        {children}
      </body>
    </html>
  );
}

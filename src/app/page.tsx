import type { Metadata } from "next";
import { HomeClient } from "./home-client";

export const metadata: Metadata = {
  title:
    "ShimayaLabs | Web Development Agency for SMBs in Noida & India",
  
  description:
    "ShimayaLabs builds high-performance websites, SaaS platforms, and eCommerce solutions for SMBs. Fast, SEO-optimized, and conversion-focused web development agency based in Noida, India.",

  keywords: [
    "web development agency India",
    "website development Noida",
    "SMB website development",
    "custom web development",
    "ecommerce website development India",
    "frontend development services",
    "SaaS development India"
  ],

  authors: [{ name: "ShimayaLabs" }],
  creator: "ShimayaLabs",

  alternates: {
    canonical: "https://shimaya.co.in/",
  },

  openGraph: {
    title:
      "ShimayaLabs | High-Performance Web Development for SMBs",
    description:
      "We build fast, scalable, and SEO-optimized websites for SMBs. Get a modern website that converts visitors into customers.",
    url: "https://shimaya.co.in/",
    siteName: "ShimayaLabs",
    images: [
      {
        url: "https://shimaya.co.in/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "ShimayaLabs Web Development Agency",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "ShimayaLabs | Web Development Agency for SMBs",
    description:
      "Custom websites, SaaS platforms & eCommerce solutions built for growth.",
    images: ["https://shimaya.co.in/opengraph-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Home() {
  return <HomeClient />;
}
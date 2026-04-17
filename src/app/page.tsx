import type { Metadata } from "next";
import { HomeClient } from "./home-client";

export const metadata: Metadata = {
  title: "Shimaya — Senior Frontend Engineer | Next.js & React Expert",
  description:
    "Hire Shivangi — Senior Frontend Engineer with 7+ years building fast, conversion-ready Next.js web products for SMBs. Based in Noida, India. 98 Lighthouse score. Enterprise experience at Monotype, Accenture & Publicis Sapient.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Shimaya — Senior Frontend Engineer | Next.js & React",
    description:
      "7+ years building enterprise-grade web products. React, Next.js, design systems — end to end. Book a free discovery call.",
    url: "/",
    type: "profile",
  },
};

export default function Home() {
  return <HomeClient />;
}

export const stats = [
  { label: "Years Exp", value: "7+" },
  { label: "Projects", value: "12+" },
  { label: "Lighthouse", value: "98" },
] as const;

export const services = [
  {
    title: "Web & Frontend Development",
    description:
      "Bespoke interfaces built with React and Next.js. I focus on performance, accessibility, and pixel-perfect execution that converts visitors into customers.",
    tags: ["React", "Next.js", "Tailwind CSS"],
    icon: "layers",
    iconBg: "bg-primary-fixed",
    iconColor: "text-primary",
  },
  {
    title: "Full-stack Product Development",
    description:
      "End-to-end engineering from database design to deployment. I build scalable backends that power dynamic user experiences for SMB growth.",
    tags: ["TypeScript", "Node.js", "Prisma"],
    icon: "terminal",
    iconBg: "bg-secondary-fixed",
    iconColor: "text-secondary",
  },
] as const;

export const projects = [
  {
    title: "Antiqua Design System",
    description: "A unified component library for a multi-brand ecosystem serving 1M+ users.",
    category: "Enterprise Engineering",
    metricValue: "40%",
    metricLabel: "Dev Efficiency Boost",
    metric: "40% Efficiency",
    gradient: "from-on-surface/80 to-transparent",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCaMaaLYfRoaSoIlQ8hM2tqIsIVZ9h_3SPIovBipHzpJymtrfgVyTqMsZ_POa-rpKdFUdKkQ_pmyHL5faD99XwyXovhrww7Y9ZX3D_fGKm6m7_urZlqMi67kgnEhubyqnvOH1HKGPR0Vxg3ELW9ahZUPHOEc-vZZTEBZ2dfTjam7EEKh2Ia2At65o8YI5mB5ORCKQvxGCPgMeLpEkYqRldcBKtSRMfuGSExDNEIX-YM2s26S3JaBOi-hRCoz0v-qCrfrT6nxdY02_SL",
    tone: "purple",
  },
  {
    title: "Storefront v2",
    description: "Headless Next.js App Router migration with real-time inventory.",
    category: "E-Commerce",
    metricValue: "99",
    metricLabel: "Performance",
    metric: "99 Performance",
    gradient: "from-primary/90 to-transparent",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAUBUI9QYhG0QD-AQW8AElHXue2y8ZzgMmnSKfHjck3-P0QHTNED8_qbZlOxIwoBkBeywEBNd4c7_TMKENNtY_hLLV47yu72WWoTg6cgP-2fxUGbrZabnebDNN3Pvmz8UMfsQDQ27WNJoTU2Y02-BRXiVOslRBrVzD1HPHRb_bFLh4MH98leXOFU975k1Z6MjY6B4LbFTxosk-rc3vghCNB57gPLi6cxHD1aYvq3euobuKBFGFzamS8aLXDRob1exauhCq9c62kkcSz",
    tone: "teal",
  },
] as const;

export const steps = [
  {
    title: "Discovery Call",
    body: "30-minute deep dive into your business goals, technical hurdles, and desired outcomes.",
  },
  {
    title: "Proposal & Timeline",
    body: "A detailed blueprint outlining the tech stack, milestones, and fixed-price investment.",
  },
  {
    title: "Build & Deliver",
    body: "Iterative development with weekly demos, leading to a robust, high-performance launch.",
  },
] as const;

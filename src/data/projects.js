export const projects = {
  primary: {
    title: "Portfolio Pro",
    subtitle:
      "Full-stack portfolio platform with authentication, template systems, and scalable architecture.",
    stack: [
      "React",
      "Supabase",
      "Authentication",
      "Database",
      "Routing",
    ],
    description: [
      "Portfolio Pro is a full-stack platform where users authenticate, explore multiple portfolio templates, preview them live, and manage their selections from a protected dashboard.",
      "The core challenge was designing a system where templates, authentication, and routing could evolve independently without introducing breaking changes.",
      "Templates were structured as data-driven systems instead of hard-coded views, allowing new templates to be added without refactoring the core application.",
    ],
    insights: [
      "Role-aware authentication with protected routes",
      "Template architecture designed for scalability",
      "Clear separation between UI, logic, and data",
      "Maintainability prioritized over short-term speed",
    ],
  },

  experience: [
    {
      name: "Mithari Agro Agency — Business Website",
      summary:
        "Designed and built the official website for a real agricultural business, focusing on clarity, trust, and usability for non-technical users.",
      highlights: [
        "Structured content for easy daily updates",
        "Focused on responsiveness and accessibility",
        "Built for long-term maintainability",
      ],
      tags: ["Client Work", "Business Systems", "UI Clarity"],
    },

    {
      name: "Dream Traders — Production Frontend Rebuild",
      summary:
        "Rebuilt a production frontend under strict constraints to preserve existing animations and user experience while improving performance and internal structure.",
      highlights: [
        "Preserved visual identity and animations",
        "Improved performance without UX regression",
        "Refactored codebase for maintainability",
      ],
      tags: ["Production Systems", "Frontend Architecture"],
    },

    {
      name: "Zenith — Real-Time Collaboration Platform",
      summary:
        "A real-time collaboration platform built around low-latency communication and shared presence.",
      highlights: [
        "WebRTC-based video calling and screen sharing",
        "Real-time chat and shared sketch board",
        "State synchronization under latency constraints",
      ],
      tags: ["WebRTC", "Real-Time Systems", "Collaboration"],
    },

    {
      name: "Cinematic Portfolio Engine",
      summary:
        "A custom canvas-driven background engine powering cinematic motion, depth, and time-based interactions across this portfolio.",
      highlights: [
        "Canvas-based rendering for performance",
        "Device-adaptive scaling",
        "Reusable animation architecture",
      ],
      tags: ["Canvas", "Animation Systems", "Performance Engineering"],
    },

    {
      name: "Agricultural E-commerce Platform (Concept)",
      summary:
        "A futuristic e-commerce concept designed for agricultural products with emphasis on clarity, scalability, and long-term extensibility.",
      highlights: [
        "Scalable product catalog structure",
        "Clear information hierarchy",
        "Accessibility-first layout approach",
      ],
      tags: ["E-commerce", "UI Architecture", "Scalability"],
    },
  ],
};

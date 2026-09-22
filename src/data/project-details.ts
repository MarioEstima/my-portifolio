export interface ProjectDetail {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  image?: string;
  repoUrl?: string;
  /** When defined, the "visit live app" button is rendered; omit for internal-only projects */
  liveUrl?: string;
  role: string[];
  status: string;
  period: string;
  highlights: string[];
  features: { group: string; items: string[] }[];
  stack: { name: string; note: string }[];
  architecture: string[];
}

export const projectDetails: Record<string, ProjectDetail> = {
  nomadgo: {
    slug: "nomadgo",
    title: "NomadGo",
    tagline: "The all-in-one companion for immigrants settling in Portugal.",
    description:
      "NomadGo guides newcomers through every step of the relocation process — from finding housing and handling documentation to discovering jobs, connecting with the community, and accessing support services. The platform adapts to two distinct user profiles: Seekers (immigrants navigating the journey) and Publishers (services, landlords, and employers publishing offers).",
    image: "/projects/nomadgo.png",
    role: ["Mobile Developer", "Full-Stack Developer", "Product Designer"],
    status: "In development",
    period: "2026",
    highlights: [
      "Dual-role architecture: Seeker and Publisher experiences in a single app",
      "Journey Roadmap with per-step checklists, status tracking and progress visualisation",
      "Encrypted Document Vault for critical personal documents",
      "Geo-located map of banks, clinics, shops and essential services",
      "AI assistant available contextually throughout the app",
      "EAS Build pipelines for development, preview APK and production AAB",
    ],
    features: [
      {
        group: "Seeker",
        items: [
          "Journey Roadmap — step-by-step relocation milestones with per-step checklists, status tracking (done / current / upcoming / skipped) and progress visualisation",
          "Housing — browse and save housing listings",
          "Jobs — discover job opportunities tailored to immigrants",
          "Document Vault — encrypted storage for critical personal documents",
          "Map — geo-located view of banks, shops, clinics and essential services nearby",
          "Community — groups and discussions with other immigrants",
          "Chat — direct messaging with service providers and contacts",
          "AI Assistant — floating AI button available throughout the app for contextual help",
          "Notifications — real-time alerts and reminders",
          "Profile & Settings — account management and preferences",
        ],
      },
      {
        group: "Publisher",
        items: [
          "Listing Management — create, edit and monitor housing or job listings",
          "Analytics Dashboard — stat cards and performance metrics per listing",
          "Contact & Booking — receive enquiries and manage bookings directly in the app",
        ],
      },
    ],
    stack: [
      { name: "Expo SDK 57", note: "New Architecture enabled" },
      { name: "TypeScript 6.0", note: "End-to-end type safety" },
      { name: "Expo Router 57", note: "File-based typed routes" },
      { name: "NativeWind 4", note: "Tailwind CSS for React Native" },
      { name: "Reanimated 4", note: "Gestures & animations" },
      { name: "react-native-maps", note: "Geo-located essential services" },
      { name: "expo-secure-store", note: "Encrypted document vault" },
      { name: "EAS Build", note: "dev / preview APK / production AAB" },
    ],
    architecture: [
      "File-based routing via Expo Router — every file under src/app/ maps directly to a route; route groups group related screens without affecting the URL path.",
      "Feature-sliced design — each domain (journey, housing, jobs, chat…) lives as a self-contained module under src/features/, and app/ only contains thin route files delegating to feature screens.",
      "Dual-role UI — home screen and navigation adapt at runtime based on user.role (SEEKER | PUBLISHER), rendering entirely different layouts without separate route trees.",
      "React Compiler enabled for automatic memoisation, plus New Architecture (JSI-based bridging) for improved performance.",
    ],
  },
};

export function getProjectDetail(slug: string): ProjectDetail | undefined {
  return projectDetails[slug];
}

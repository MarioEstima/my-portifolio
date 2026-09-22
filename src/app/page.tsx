"use client";

import About from "../components/layout/About";
import GetInTouch from "../components/layout/GetInTouch";
import WorkPreview from "../components/layout/WorkPreview";
import Hero from "../components/layout/Hero";
import PageLayout from "../components/pages/PageLayout";
import { useTheme } from "@/src/components/theme/ThemeProvider";

export default function Home() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <PageLayout nextRoute="/projects">
      <main className="relative">
        <Hero />

        <div
          className={`relative z-10 transition-colors duration-300 ${
            isDark ? "bg-black text-white" : "bg-white text-black"
          }`}
        >
          <About />

          <WorkPreview />

          <GetInTouch />
        </div>
      </main>
    </PageLayout>
  );
}

"use client";

import { MenuBar } from "@/src/components/menuBar";
import SkillsCards from "./components/SkillsCard";
import SkillMeters from "./components/SkillMeters";
import GetInTouch from "@/src/components/layout/GetInTouch";
import { skillsData } from "@/src/data/skills";
import { useLanguage } from "@/src/components/language/LanguageProvider";
import { useTheme } from "@/src/components/theme/ThemeProvider";

export function SkillsPageContent() {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const frontendWeb = skillsData[0];
  const frontendMobile = skillsData[1];
  const backend = skillsData[2];
  const database = skillsData[3];
  const devTools = skillsData[4];
  const services = skillsData[5];

  return (
    <main className={isDark ? "w-full bg-black" : "w-full bg-white"}>
      <section className="w-full pt-24 pb-14 md:py-20 flex justify-center px-4">
        <div className="w-full max-w-[1212px] text-center">
          <h1 className={`${isDark ? "text-white" : "text-black"} text-[11vw] sm:text-[7.5vw] md:text-[225px] font-normal whitespace-nowrap`}>
            {t("skills.heading1")} <br />
            {t("skills.heading2")}
          </h1>

          <div className="mt-10 md:mt-20 relative z-30 overflow-x-auto pb-2">
            <MenuBar />
          </div>
        </div>
      </section>

      <section className={`w-full px-5 md:px-12 lg:px-20 py-14 md:py-24 ${isDark ? "bg-black text-white" : "bg-white text-black"}`}>
        <div className="max-w-[1400px] mx-auto">
          {/* Skill level meters */}
          <div className="mb-12 md:mb-16 max-w-2xl mx-auto">
            <h2 className={`text-sm font-medium uppercase tracking-widest mb-8 text-center ${isDark ? "text-white/50" : "text-black/50"}`}>
              {t("skills.metersTitle")}
            </h2>
            <SkillMeters />
          </div>
          <div
            className="
              grid
              grid-cols-1
              lg:grid-cols-[1.15fr_0.9fr_1.15fr]
              gap-4
              items-start
            "
          >
            <div className="flex flex-col gap-4">
              {frontendMobile && <SkillsCards {...frontendMobile} />}
              {backend && <SkillsCards {...backend} />}
            </div>

            <div className="flex flex-col gap-4">
              {database && <SkillsCards {...database} />}
              {devTools && <SkillsCards {...devTools} />}
            </div>

            <div className="flex flex-col gap-4">
              {frontendWeb && <SkillsCards {...frontendWeb} />}
              {services && <SkillsCards {...services} />}
            </div>
          </div>
        </div>
      </section>

      <GetInTouch variant="dark" />
    </main>
  );
}

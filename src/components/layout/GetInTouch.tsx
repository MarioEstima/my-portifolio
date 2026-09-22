"use client";

import Link from "next/link";
import { useLanguage } from "@/src/components/language/LanguageProvider";
import { useTheme } from "@/src/components/theme/ThemeProvider";

interface GetInTouchProps {
  variant?: "light" | "dark";
}

export default function GetInTouch(_props: GetInTouchProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const { t } = useLanguage();
  const fg = isDark ? "text-white" : "text-black";

  return (
    <section
      className={`w-full py-16 md:py-24 px-6 md:px-16 lg:px-24 transition-colors duration-300 ${
        isDark ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className="max-w-[1400px] mx-auto flex flex-col gap-10 md:gap-16">
        <div className="flex flex-col gap-2">
          <span className="font-mono text-xs md:text-sm text-neutral-500">
            {t("touch.label")}
          </span>
          <h2 className={`text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-normal ${fg}`}>
            {t("touch.title1")}
          </h2>
          <h2 className={`text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-normal ${fg}`}>
            {t("touch.title2")}
          </h2>
        </div>

        <div className="relative w-full flex items-center justify-end my-6 md:my-10 min-h-[7rem] sm:min-h-[9rem] md:min-h-[11rem]">
          <div className={`w-full h-[1px] ${isDark ? "bg-white" : "bg-[#000000]"}`} />
          <Link
            href="/contact"
            className="absolute right-[6%] md:right-[15%] top-1/2 -translate-y-1/2 w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-full bg-[#455CE9] text-white font-thin text-sm sm:text-base md:text-lg flex items-center justify-center text-center px-4 hover:scale-105 transition-transform duration-300 shadow-lg z-20"
          >
            {t("touch.cta")}
          </Link>
        </div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-24 pt-2">
          <div className="flex flex-col gap-1">
            <span className="text-xs text-neutral-400 font-light">{t("touch.email")}</span>
            <a
              href="mailto:marioestima21@gmail.com"
              className={`text-lg sm:text-base md:text-[24px] font-thin hover:opacity-70 transition-opacity break-all ${fg}`}
            >
              marioestima21@gmail.com
            </a>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-xs text-neutral-400 font-light">{t("touch.phone")}</span>
            <a
              href="tel:+244974863664"
              className={`text-lg sm:text-base md:text-[24px] font-thin hover:opacity-70 transition-opacity ${fg}`}
            >
              (+244) 974863664
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

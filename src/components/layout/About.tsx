"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/src/components/language/LanguageProvider";
import { useTheme } from "@/src/components/theme/ThemeProvider";

export default function About() {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const fg = isDark ? "text-white" : "text-black";
  const fgSoft = isDark ? "text-neutral-400" : "text-[#616161]";

  return (
    <section id="about" className="w-full py-16 md:py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-start gap-8 md:gap-12">
        <div className="max-w-3xl">
          <h2 className={`text-[20px] sm:text-[26px] md:text-[35px] font-medium leading-tight tracking-tight ${fg}`}>
            {t("about.heading")}
          </h2>
        </div>

        <div className="flex flex-col items-start md:items-end text-left md:text-right max-w-sm space-y-6">
          <p className={`text-[15px] md:text-[16px] font-light leading-relaxed ${fgSoft}`}>
            {t("about.text")}
          </p>

          <Link
            href="/contact"
            className={`inline-flex items-center gap-2 text-base font-medium hover:opacity-80 transition-opacity group ${fg}`}
          >
            <span>{t("about.more")}</span>
            <span className={`w-8 h-8 rounded-full border flex items-center justify-center transition-colors ${
              isDark ? "border-white/20 group-hover:border-white" : "border-black/20 group-hover:border-black"
            }`}>
              <ArrowUpRight className={`w-4 h-4 ${fg}`} />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

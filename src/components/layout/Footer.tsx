"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/src/components/language/LanguageProvider";
import { useTheme } from "@/src/components/theme/ThemeProvider";

interface FooterProps {
  nextRoute?: string;
}

export default function Footer({ nextRoute = "/skills" }: FooterProps) {
  const { theme } = useTheme();
  const isLight = theme === "light";
  const { t } = useLanguage();

  return (
    <footer
      className={`w-full pt-16 pb-12 px-6 md:px-16 lg:px-24 transition-colors duration-300 ${
        isLight ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className="max-w-350 mx-auto flex flex-col gap-8 md:gap-12">
        <div className="flex items-center justify-between gap-4">
          <p className="text-xl sm:text-3xl md:text-[90px] font-thin tracking-tight">
            {t("footer.tagline")}
          </p>

          <Link
            href={nextRoute}
            aria-label="Go to next section"
            className={`w-14 h-14 md:w-16 md:h-16 rounded-full flex-shrink-0 flex items-center justify-center hover:scale-105 transition-transform ${
              isLight ? "bg-white text-black" : "bg-black text-white"
            }`}
          >
            <ArrowUpRight className="w-7 h-7 md:w-8 md:h-8" />
          </Link>
        </div>

        <div className="overflow-hidden">
          <h1 className="text-[14vw] md:text-[13vw] font-thin leading-none tracking-tight select-none -ml-1">
            Mário Estima
          </h1>
        </div>
      </div>
    </footer>
  );
}

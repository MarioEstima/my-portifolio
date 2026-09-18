"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface FooterProps {
  nextRoute?: string;
  theme?: "dark" | "light";
}

export default function Footer({ nextRoute = "/skills", theme = "dark" }: FooterProps) {
  const isLight = theme === "light";

  return (
    <footer
      className={`w-full pt-16 pb-12 px-8 md:px-16 lg:px-24 ${isLight ? "bg-black text-white" : "bg-white text-black"
        }`}
    >
      <div className="max-w-350 mx-auto flex flex-col gap-12">
        <div className="flex items-center justify-between">
          <p className="text-3xl md:text-[90px] font-thin tracking-tight">
            your friendly chaos creator
          </p>

          <Link
            href={nextRoute}
            aria-label="Go to next section"
            className={`w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center hover:scale-105 transition-transform ${isLight ? "bg-white text-black" : "bg-black text-white"
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
"use client";

import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useRef } from "react";
import { MenuBar } from "../menuBar";
import { useLanguage } from "@/src/components/language/LanguageProvider";
import { useTheme } from "@/src/components/theme/ThemeProvider";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { t } = useLanguage();
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const titleY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className={`sticky top-0 w-full h-[100svh] overflow-hidden flex flex-col justify-between pt-10 z-0 transition-colors duration-300 ${
        isDark ? "bg-[#7E7E7E] text-[#FFFFFF]" : "bg-[#B5B5B5] text-[#111111]"
      }`}
    >
      <div className="absolute inset-0 flex items-end justify-center pointer-events-none z-0">
        <div className="relative flex items-end justify-center max-w-[1400px] w-full h-full">
          <motion.div
            className="relative w-full h-full flex items-end justify-center overflow-hidden"
            style={{ y: imageY }}
          >
            <motion.div
              initial={{ opacity: 0, y: 60, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-end"
            >
              <Image
                src="/images/me.png"
                alt="Profile"
                width={800}
                height={1000}
                className="object-contain object-bottom h-[42svh] sm:h-[55vh] md:h-[90vh] w-auto grayscale drop-shadow-2xl"
                priority
                unoptimized
              />
            </motion.div>
          </motion.div>

          <motion.div
            className="pointer-events-auto absolute right-[8%] sm:right-[15%] top-[30%] z-10"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1, rotate: [0, -8, 0] }}
            transition={{
              opacity: { delay: 0.8, duration: 0.5 },
              scale: { delay: 0.8, type: "spring", bounce: 0.5 },
              rotate: { delay: 1.6, duration: 1.6, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            <Image
              src="/images/arrow_up.png"
              alt="Arrow"
              width={120}
              height={120}
              className="object-contain w-16 sm:w-24 md:w-[120px]"
            />
          </motion.div>
        </div>
      </div>

      <div className="flex-1" />

      <div className="w-full flex flex-col items-center z-20 pb-4">
        <motion.div
          style={{ y: titleY, opacity }}
          className="w-full whitespace-nowrap overflow-hidden flex justify-center px-4"
        >
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className={`text-[9.5vw] sm:text-[7.5vw] md:text-[225px] font-medium leading-none tracking-tight select-none text-center ${
              isDark ? "text-[#FFFFFF]" : "text-[#111111]"
            }`}
          >
            {t("hero.title")}
          </motion.h1>
        </motion.div>

        <motion.div
          className="mt-4 relative z-30 max-w-full"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <MenuBar />
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { showcaseProjects } from "@/src/data/projects";
import { useLanguage } from "@/src/components/language/LanguageProvider";
import { useTheme } from "@/src/components/theme/ThemeProvider";

export default function WorkPreview() {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const fg = isDark ? "text-white" : "text-black";
  const fgSoft = isDark ? "text-neutral-400" : "text-[#616161]";

  return (
    <section className="w-full py-16 md:py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-[1400px] mx-auto flex flex-col gap-10 md:gap-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`text-3xl sm:text-4xl md:text-6xl font-medium tracking-tight ${fg}`}
          >
            {t("work.title")}
          </motion.h2>

          <p className={`max-w-xs text-xs font-light uppercase tracking-wider leading-relaxed ${fgSoft}`}>
            {t("work.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 md:gap-y-12">
          {showcaseProjects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: (index % 2) * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-4 group cursor-pointer"
            >
              <div className="relative w-full aspect-[807/470] rounded-3xl overflow-hidden bg-neutral-200/40">
                <Image
                  src={project.image!}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>

              <div className="flex items-center gap-3">
                <span className={`w-8 h-8 rounded-full border flex items-center justify-center transition-colors flex-shrink-0 ${
                  isDark ? "border-white/20 group-hover:border-white" : "border-black/20 group-hover:border-black"
                }`}>
                  <ArrowUpRight className={`w-4 h-4 ${fg}`} />
                </span>
                <div className="min-w-0">
                  <h3 className={`text-lg sm:text-xl md:text-2xl font-medium ${fg}`}>
                    {project.title}
                  </h3>
                  {project.description && (
                    <p className={`text-xs sm:text-sm ${fgSoft}`}>{project.description}</p>
                  )}
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="flex justify-center mt-4 md:mt-8">
          <Link
            href="/projects"
            className={`px-6 py-2.5 rounded-full border text-sm font-medium transition-colors flex items-center gap-2 ${
              isDark
                ? "border-neutral-400 text-white hover:bg-white hover:text-black"
                : "border-neutral-700 text-black hover:bg-black hover:text-white"
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-current" />
            {t("work.explore")}
          </Link>
        </div>
      </div>
    </section>
  );
}

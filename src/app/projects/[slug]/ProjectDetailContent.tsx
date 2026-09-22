"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "@/src/components/theme/ThemeProvider";
import { siteConfig } from "@/src/lib/site";
import type { ProjectDetail } from "@/src/data/project-details";
import { SiGithub } from "react-icons/si";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";

export function ProjectDetailContent({ detail }: { detail: ProjectDetail }) {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const cardBorder = isDark ? "border-white/10" : "border-black/10";
  const cardBg = isDark ? "bg-[#141414]" : "bg-neutral-50";
  const fgSoft = isDark ? "text-neutral-400" : "text-neutral-500";

  return (
    <main className="mx-auto w-full max-w-7xl px-5 md:px-6 py-24 md:py-28">
      <Link
        href="/projects"
        className={`inline-flex items-center gap-2 text-xs md:text-sm font-medium underline underline-offset-4 transition-opacity hover:opacity-100 ${fgSoft}`}
      >
        <ArrowLeft className="w-4 h-4" />
        All projects
      </Link>

      <header className="mt-8 md:mt-12">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-medium tracking-tight text-current">
          {detail.title}
        </h1>
        <p className={`mt-4 md:mt-6 max-w-2xl text-sm md:text-lg ${fgSoft}`}>{detail.tagline}</p>

        <div className={`mt-6 md:mt-8 flex flex-wrap gap-x-6 gap-y-2 text-xs md:text-sm ${fgSoft}`}>
          <span>
            <strong className="font-medium text-current">Role:</strong> {detail.role.join(" · ")}
          </span>
          <span>
            <strong className="font-medium text-current">Status:</strong> {detail.status}
          </span>
          <span>
            <strong className="font-medium text-current">Year:</strong> {detail.period}
          </span>
        </div>

        <div className="mt-6 md:mt-8 flex flex-wrap gap-3">
          <Link
            href="/contact"
            className={`inline-flex items-center gap-2 rounded-full px-5 md:px-6 py-2.5 md:py-3 text-xs md:text-sm font-medium transition-transform hover:scale-105 ${
              isDark ? "bg-white text-black" : "bg-black text-white"
            }`}
          >
            Get in touch about this project
          </Link>
          {detail.repoUrl && (
            <a
              href={detail.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 rounded-full border px-5 md:px-6 py-2.5 md:py-3 text-xs md:text-sm font-medium transition-transform hover:scale-105 ${
                isDark ? "border-white/25 text-white" : "border-black/25 text-black"
              }`}
            >
              <SiGithub className="w-4 h-4" />
              Repository
            </a>
          )}
          {detail.liveUrl && (
            <a
              href={detail.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 rounded-full border px-5 md:px-6 py-2.5 md:py-3 text-xs md:text-sm font-medium transition-transform hover:scale-105 ${
                isDark ? "border-white/25 text-white" : "border-black/25 text-black"
              }`}
            >
              <ArrowUpRight className="w-4 h-4" />
              Live app
            </a>
          )}
        </div>
      </header>

      {detail.image && (
        <div className="mt-10 md:mt-14 relative w-full aspect-[807/470] rounded-3xl overflow-hidden bg-neutral-200/40">
          <Image
            src={detail.image}
            alt={`${detail.title} screenshot`}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      <p className={`mt-10 md:mt-14 max-w-3xl text-sm md:text-base leading-relaxed ${fgSoft}`}>
        {detail.description}
      </p>

      <section className="mt-12 md:mt-16">
        <h2 className={`text-xs md:text-sm font-medium uppercase tracking-widest ${fgSoft}`}>
          Highlights
        </h2>
        <ul className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
          {detail.highlights.map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm md:text-base">
              <Check className={`mt-1 h-4 w-4 shrink-0 ${fgSoft}`} />
              <span className="text-current/80">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12 md:mt-16">
        <h2 className={`text-xs md:text-sm font-medium uppercase tracking-widest ${fgSoft}`}>
          Features
        </h2>
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {detail.features.map((group) => (
            <div key={group.group} className={`rounded-3xl border ${cardBorder} ${cardBg} p-6 md:p-8`}>
              <h3 className="text-lg md:text-xl font-medium text-current">{group.group}</h3>
              <ul className="mt-4 space-y-2.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className={`flex items-start gap-3 text-sm leading-relaxed ${fgSoft}`}
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-current opacity-50" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 md:mt-16">
        <h2 className={`text-xs md:text-sm font-medium uppercase tracking-widest ${fgSoft}`}>
          Tech stack
        </h2>
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {detail.stack.map((tech) => (
            <div key={tech.name} className={`rounded-2xl border ${cardBorder} ${cardBg} p-4 md:p-5`}>
              <p className="text-sm md:text-base font-medium text-current">{tech.name}</p>
              <p className={`mt-1 text-xs md:text-sm ${fgSoft}`}>{tech.note}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 md:mt-16">
        <h2 className={`text-xs md:text-sm font-medium uppercase tracking-widest ${fgSoft}`}>
          Architecture
        </h2>
        <ul className="mt-5 max-w-3xl space-y-4">
          {detail.architecture.map((item) => (
            <li
              key={item}
              className={`flex items-start gap-3 text-sm md:text-base leading-relaxed ${fgSoft}`}
            >
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-current opacity-50" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <footer
        className={`mt-16 md:mt-24 border-t ${cardBorder} pt-8 flex flex-wrap items-center justify-between gap-4`}
      >
        <p className={`text-xs md:text-sm ${fgSoft}`}>
          Want to know more about {detail.title}? Reach out —{" "}
          <a href={`mailto:${siteConfig.email}`} className="underline underline-offset-4">
            {siteConfig.email}
          </a>
        </p>
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-xs md:text-sm font-medium underline underline-offset-4 text-current"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to projects
        </Link>
      </footer>
    </main>
  );
}

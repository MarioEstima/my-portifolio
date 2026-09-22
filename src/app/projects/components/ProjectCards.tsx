"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Star, GitFork, ArrowUpRight } from "lucide-react";
import { languageColor } from "@/src/lib/language-colors";
import type { FeaturedRepo } from "@/src/lib/github";
import { useTheme } from "@/src/components/theme/ThemeProvider";

export default function GitHubRepoCard({ repo, index }: { repo: FeaturedRepo; index: number }) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <motion.a
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={`group flex flex-col justify-between rounded-3xl border p-5 md:p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${
        isDark
          ? "border-white/10 bg-[#141414] hover:border-white/25"
          : "border-neutral-200 bg-white hover:border-neutral-400"
      }`}
    >
      <div>
        <div className="flex items-start justify-between gap-4">
          <h3 className={`text-lg md:text-xl font-medium tracking-tight flex items-center gap-2 ${isDark ? "text-white" : "text-black"}`}>
            {repo.name}
            <ArrowUpRight className={`w-4 h-4 opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all ${isDark ? "text-white" : "text-black"}`} />
          </h3>
        </div>

        <p className={`mt-3 text-sm leading-relaxed min-h-[3.5rem] ${isDark ? "text-neutral-400" : "text-neutral-600"}`}>
          {repo.description}
        </p>

        {repo.topics.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {repo.topics.slice(0, 4).map((topic) => (
              <span
                key={topic}
                className={`rounded-full px-3 py-1 text-[11px] font-medium ${
                  isDark ? "bg-white/10 text-neutral-300" : "bg-neutral-100 text-neutral-700"
                }`}
              >
                {topic}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className={`mt-6 flex items-center gap-5 text-sm ${isDark ? "text-neutral-400" : "text-neutral-500"}`}>
        {repo.language && (
          <span className="flex items-center gap-1.5">
            <span
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: languageColor(repo.language) }}
            />
            {repo.language}
          </span>
        )}
        <span className="flex items-center gap-1.5">
          <Star className="w-4 h-4" /> {repo.stargazers_count}
        </span>
        <span className="flex items-center gap-1.5">
          <GitFork className="w-4 h-4" /> {repo.forks_count}
        </span>
        {repo.homepage && (
          <Link
            href={repo.homepage.startsWith("http") ? repo.homepage : `https://${repo.homepage}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className={`ml-auto underline underline-offset-4 transition-colors ${isDark ? "hover:text-white" : "hover:text-black"}`}
          >
            Live
          </Link>
        )}
      </div>
    </motion.a>
  );
}

export function StaticProjectCard({
  title,
  image,
  url,
  description,
  index,
  slug,
}: {
  title: string;
  image: string;
  url: string;
  description?: string;
  index: number;
  slug?: string;
}) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const inner = (
    <>
      <div className="relative w-full aspect-[807/470] rounded-3xl overflow-hidden bg-neutral-100">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />
      </div>

      <div className="flex items-center gap-3">
        <span className={`w-8 h-8 rounded-full border flex items-center justify-center transition-colors ${
          isDark ? "border-white/20 group-hover:border-white" : "border-black/20 group-hover:border-black"
        }`}>
          <ArrowUpRight className={`w-4 h-4 ${isDark ? "text-white" : "text-black"}`} />
        </span>
        <div>
          <h3 className={`text-xl md:text-2xl font-medium ${isDark ? "text-white" : "text-black"}`}>{title}</h3>
          {description && <p className={`text-sm ${isDark ? "text-neutral-400" : "text-neutral-500"}`}>{description}</p>}
        </div>
      </div>

      {slug && (
        <span
          className={`w-fit rounded-full px-4 py-2 text-xs font-medium transition-transform group-hover:scale-105 ${
            isDark ? "bg-white text-black" : "bg-black text-white"
          }`}
        >
          Ver detalhes
        </span>
      )}
    </>
  );

  const sharedClassName = "group flex flex-col gap-4 cursor-pointer";

  // Internal case study page — navigate with next/link so the card never opens an external tab
  if (slug) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, delay: (index % 2) * 0.1, ease: [0.22, 1, 0.36, 1] }}
        className={sharedClassName}
      >
        <Link href={`/projects/${slug}`} className={sharedClassName} aria-label={`Open ${title} project details`}>
          {inner}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: (index % 2) * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={sharedClassName}
    >
      {inner}
    </motion.a>
  );
}

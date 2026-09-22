"use client";

import GitHubRepoCard, { StaticProjectCard } from "./components/ProjectCards";
import { showcaseProjects } from "@/src/data/projects";
import { siteConfig } from "@/src/lib/site";
import { useLanguage } from "@/src/components/language/LanguageProvider";
import { useTheme } from "@/src/components/theme/ThemeProvider";
import type { FeaturedRepo, GitHubStats } from "@/src/lib/github";
import { SiGithub } from "react-icons/si";

interface ProjectsContentProps {
  repos: FeaturedRepo[];
  stats: GitHubStats;
}

export function ProjectsContent({ repos, stats }: ProjectsContentProps) {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const fg = isDark ? "text-white" : "text-black";
  const fgSoft = isDark ? "text-white/60" : "text-black/60";

  return (
    <main className="mx-auto max-w-7xl px-5 md:px-6 py-24 md:py-28">
      <h1 className={`text-4xl sm:text-5xl md:text-7xl font-medium tracking-tight ${fg}`}>
        {t("projects.title")}
      </h1>
      <p className={`mt-4 md:mt-6 max-w-xl text-sm md:text-base ${fgSoft}`}>
        {t("projects.subtitle")}
      </p>

      <div className="mt-8 md:mt-10 flex flex-wrap items-center gap-4">
        <a
          href={siteConfig.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-2 rounded-full px-5 md:px-6 py-2.5 md:py-3 text-xs md:text-sm font-medium transition-transform hover:scale-105 ${
            isDark ? "bg-white text-black" : "bg-black text-white"
          }`}
        >
          <SiGithub className="w-4 h-4" />
          @{siteConfig.githubUsername}
        </a>
        {stats.publicRepos > 0 && (
          <span className={`text-xs md:text-sm ${fgSoft}`}>
            {t("projects.reposAndFollowers", { n: stats.followers }).replace(
              /^\d+/,
              String(stats.publicRepos),
            )}
          </span>
        )}
      </div>

      {/* GitHub repos */}
      <section className="mt-12 md:mt-16">
        <h2 className={`text-xs md:text-sm font-medium uppercase tracking-widest ${fgSoft}`}>
          {t("projects.fromGithub")}
        </h2>
        {repos.length > 0 ? (
          <div className="mt-5 md:mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {repos.map((repo, i) => (
              <GitHubRepoCard key={repo.name} repo={repo} index={i} />
            ))}
          </div>
        ) : (
          <p className={`mt-6 text-sm ${fgSoft}`}>{t("projects.loadError")}</p>
        )}
      </section>

      {/* Static showcase with screenshots */}
      <section className="mt-16 md:mt-24">
        <h2 className={`text-xs md:text-sm font-medium uppercase tracking-widest ${fgSoft}`}>
          {t("projects.featured")}
        </h2>
        <div className="mt-5 md:mt-6 grid grid-cols-1 gap-x-8 gap-y-10 md:gap-y-12 md:grid-cols-2">
          {showcaseProjects.map((project, i) => (
            <StaticProjectCard
              key={project.title}
              title={project.title}
              image={project.image!}
              url={project.url}
              description={project.description}
              index={i}
              slug={project.slug}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

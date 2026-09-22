"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/src/components/language/LanguageProvider";
import { useTheme } from "@/src/components/theme/ThemeProvider";
import type { BlogPost } from "@/src/lib/blog";

export function BlogList({ posts }: { posts: BlogPost[] }) {
  const { t, lang } = useLanguage();
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const fg = isDark ? "text-white" : "text-black";
  const fgSoft = isDark ? "text-white/60" : "text-black/60";

  return (
    <main className="mx-auto max-w-4xl px-5 md:px-6 py-24 md:py-28">
      <h1 className={`text-4xl sm:text-5xl md:text-7xl font-medium tracking-tight ${fg}`}>
        {t("blog.title")}
      </h1>
      <p className={`mt-4 md:mt-6 text-sm md:text-base ${fgSoft}`}>
        {t("blog.subtitle")}
      </p>

      <div className="mt-10 md:mt-16 flex flex-col">
        {posts.length === 0 && <p className={fgSoft}>{t("blog.empty")}</p>}

        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className={`group flex flex-col gap-2 border-b py-6 md:py-8 first:pt-0 transition-colors ${
              isDark ? "border-white/10 hover:bg-white/[0.03]" : "border-black/10 hover:bg-black/[0.03]"
            }`}
          >
            <div className={`flex items-center gap-3 text-xs ${fgSoft}`}>
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString(lang === "pt" ? "pt-PT" : "en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <span>·</span>
              <span>
                {post.readingTime.replace("min read", t("blog.readTime"))}
              </span>
            </div>

            <div className="flex items-center justify-between gap-4">
              <h2 className={`text-xl sm:text-2xl font-medium tracking-tight group-hover:opacity-70 transition-opacity ${fg}`}>
                {post.title}
              </h2>
              <ArrowUpRight className={`w-5 h-5 transition-colors flex-shrink-0 ${isDark ? "text-white/40 group-hover:text-white" : "text-black/40 group-hover:text-black"}`} />
            </div>

            <p className={`max-w-2xl text-sm md:text-base ${fgSoft}`}>{post.excerpt}</p>

            {post.tags.length > 0 && (
              <div className="mt-2 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`rounded-full px-3 py-1 text-[11px] font-medium ${
                      isDark ? "bg-white/10 text-white/70" : "bg-black/5 text-black/70"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </Link>
        ))}
      </div>
    </main>
  );
}

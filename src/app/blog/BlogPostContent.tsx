"use client";

import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { useLanguage } from "@/src/components/language/LanguageProvider";
import { useTheme } from "@/src/components/theme/ThemeProvider";
import type { BlogPost } from "@/src/lib/blog";

interface BlogPostContentProps {
  frontmatter: BlogPost;
  content: string;
  prev: { slug: string; title: string } | null;
  next: { slug: string; title: string } | null;
}

export function BlogPostContent({ frontmatter, content, prev, next }: BlogPostContentProps) {
  const { t, lang } = useLanguage();
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const fg = isDark ? "text-white" : "text-black";
  const fgSoft = isDark ? "text-white/60" : "text-black/60";

  return (
    <main className="mx-auto max-w-3xl px-5 md:px-6 py-24 md:py-28">
      <Link
        href="/blog"
        className={`inline-flex items-center gap-2 text-sm transition-colors ${fgSoft} ${isDark ? "hover:text-white" : "hover:text-black"}`}
      >
        <ArrowLeft className="w-4 h-4" />
        {t("blog.allPosts")}
      </Link>

      <article className={`mt-8 md:mt-10 ${fg}`}>
        <div className={`flex items-center gap-3 text-xs ${fgSoft}`}>
          <time dateTime={frontmatter.date}>
            {new Date(frontmatter.date).toLocaleDateString(lang === "pt" ? "pt-PT" : "en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <span>·</span>
          <span>
            {frontmatter.readingTime.replace("min read", t("blog.readTime"))}
          </span>
        </div>

        <h1 className="mt-4 text-3xl sm:text-4xl md:text-6xl font-medium tracking-tight">
          {frontmatter.title}
        </h1>

        {frontmatter.tags.length > 0 && (
          <div className="mt-5 md:mt-6 flex flex-wrap gap-2">
            {frontmatter.tags.map((tag) => (
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

        <div className={`mt-10 md:mt-12 text-[15px] md:text-base [&_h1]:mt-10 [&_h1]:mb-4 [&_h1]:text-2xl md:[&_h1]:text-3xl [&_h1]:font-semibold [&_h2]:mt-10 [&_h2]:mb-3 [&_h2]:text-xl md:[&_h2]:text-2xl [&_h2]:font-semibold [&_h3]:mt-8 [&_h3]:mb-2 [&_h3]:text-lg md:[&_h3]:text-xl [&_h3]:font-semibold [&_p]:mb-4 [&_p]:leading-relaxed [&_p]:opacity-80 [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-6 [&_ol]:mb-4 [&_ol]:list-decimal [&_ol]:space-y-1.5 [&_ol]:pl-6 [&_a]:underline [&_a]:underline-offset-4 [&_blockquote]:mb-4 [&_blockquote]:border-l-2 [&_blockquote]:pl-4 [&_blockquote]:italic [&_code]:rounded-md [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-[0.9em] [&_pre]:mb-6 [&_pre]:overflow-x-auto [&_pre]:rounded-2xl [&_pre]:p-4 md:[&_pre]:p-5 [&_pre]:text-[13px] md:[&_pre]:text-sm [&_pre_code]:bg-transparent [&_pre_code]:p-0 [&_hr]:my-8 [&_img]:my-6 [&_img]:rounded-2xl ${
          isDark
            ? "[&_a]:decoration-white/60 [&_blockquote]:border-white/30 [&_code]:bg-white/10 [&_pre]:bg-neutral-900 [&_pre]:text-neutral-100 [&_hr]:border-white/20"
            : "[&_a]:decoration-black/60 [&_blockquote]:border-black/30 [&_code]:bg-black/10 [&_pre]:bg-neutral-100 [&_pre]:text-neutral-900 [&_hr]:border-black/20"
        }`}>
          <MDXRemote source={content} />
        </div>
      </article>

      {(prev || next) && (
        <nav className={`mt-16 md:mt-20 flex flex-col gap-4 border-t pt-8 sm:flex-row sm:justify-between ${isDark ? "border-white/10" : "border-black/10"}`}>
          {prev ? (
            <Link href={`/blog/${prev.slug}`} className="group flex flex-col gap-1">
              <span className={`text-xs uppercase tracking-widest ${isDark ? "text-white/40" : "text-black/40"}`}>
                {t("blog.previous")}
              </span>
              <span className={`flex items-center gap-2 group-hover:opacity-70 transition-opacity ${fg}`}>
                {prev.title}
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </Link>
          ) : (
            <span />
          )}
          {next && (
            <Link
              href={`/blog/${next.slug}`}
              className="group flex flex-col gap-1 sm:text-right"
            >
              <span className={`text-xs uppercase tracking-widest ${isDark ? "text-white/40" : "text-black/40"}`}>
                {t("blog.next")}
              </span>
              <span className={`flex items-center gap-2 group-hover:opacity-70 transition-opacity sm:justify-end ${fg}`}>
                {next.title}
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </Link>
          )}
        </nav>
      )}
    </main>
  );
}

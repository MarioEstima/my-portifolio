import { readdir, readFile } from "fs/promises";
import path from "path";
import matter from "gray-matter";

const POSTS_DIR = path.join(process.cwd(), "src/content/blog");

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  readingTime: string;
}

function estimateReadingTime(content: string): string {
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} min read`;
}

export async function getAllPosts(): Promise<BlogPost[]> {
  let files: string[];
  try {
    files = await readdir(POSTS_DIR);
  } catch {
    return [];
  }

  const posts = await Promise.all(
    files
      .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"))
      .map(async (file) => {
        const slug = file.replace(/\.mdx?$/, "");
        const raw = await readFile(path.join(POSTS_DIR, file), "utf-8");
        const { data, content } = matter(raw);
        return {
          slug,
          title: (data.title as string) ?? slug,
          excerpt: (data.excerpt as string) ?? "",
          date: (data.date as string) ?? new Date().toISOString(),
          tags: (data.tags as string[]) ?? [],
          readingTime: estimateReadingTime(content),
        } satisfies BlogPost;
      }),
  );

  return posts.sort((a, b) => b.date.localeCompare(a.date));
}

export async function getPostBySlug(slug: string): Promise<{ frontmatter: BlogPost; content: string } | null> {
  try {
    const raw = await readFile(path.join(POSTS_DIR, `${slug}.mdx`), "utf-8");
    const { data, content } = matter(raw);
    return {
      frontmatter: {
        slug,
        title: (data.title as string) ?? slug,
        excerpt: (data.excerpt as string) ?? "",
        date: (data.date as string) ?? new Date().toISOString(),
        tags: (data.tags as string[]) ?? [],
        readingTime: estimateReadingTime(content),
      },
      content,
    };
  } catch {
    return null;
  }
}

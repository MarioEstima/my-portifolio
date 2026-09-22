import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageLayout from "@/src/components/pages/PageLayout";
import { getAllPosts, getPostBySlug } from "@/src/lib/blog";
import { BlogPostContent } from "../BlogPostContent";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: "Post not found" };
  return {
    title: post.frontmatter.title,
    description: post.frontmatter.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const posts = await getAllPosts();
  const index = posts.findIndex((p) => p.slug === slug);
  const prev = posts[index + 1];
  const next = posts[index - 1];

  return (
    <PageLayout nextRoute="/blog">
      <BlogPostContent
        frontmatter={post.frontmatter}
        content={post.content}
        prev={prev ? { slug: prev.slug, title: prev.title } : null}
        next={next ? { slug: next.slug, title: next.title } : null}
      />
    </PageLayout>
  );
}

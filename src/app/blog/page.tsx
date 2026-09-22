import type { Metadata } from "next";
import PageLayout from "@/src/components/pages/PageLayout";
import { BlogList } from "./BlogList";
import { getAllPosts } from "@/src/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "Thoughts on frontend development, React, Next.js and more.",
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <PageLayout nextRoute="/contact">
      <BlogList posts={posts} />
    </PageLayout>
  );
}

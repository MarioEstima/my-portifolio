import type { Metadata } from "next";
import PageLayout from "@/src/components/pages/PageLayout";
import { ProjectsContent } from "./ProjectsContent";
import { getGitHubStats, getFeaturedRepos } from "@/src/lib/github";
import { siteConfig } from "@/src/lib/site";

export const metadata: Metadata = {
  title: "Projects",
  description: `Showcase projects and open-source repositories by ${siteConfig.name}.`,
};

export const revalidate = 3600;

export default async function ProjectsPage() {
  const [repos, stats] = await Promise.all([getFeaturedRepos(), getGitHubStats()]);

  return (
    <PageLayout nextRoute="/skills">
      <ProjectsContent repos={repos} stats={stats} />
    </PageLayout>
  );
}

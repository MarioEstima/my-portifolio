import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageLayout from "@/src/components/pages/PageLayout";
import { getProjectDetail, projectDetails } from "@/src/data/project-details";
import { ProjectDetailContent } from "./ProjectDetailContent";

interface ProjectDetailPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return Object.keys(projectDetails).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const detail = getProjectDetail(slug);
  if (!detail) return { title: "Project not found" };
  return {
    title: `${detail.title} — Project`,
    description: detail.tagline,
  };
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const detail = getProjectDetail(slug);
  if (!detail) notFound();

  return (
    <PageLayout nextRoute="/skills">
      <ProjectDetailContent detail={detail} />
    </PageLayout>
  );
}

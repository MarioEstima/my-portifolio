import PageLayout from "@/src/components/pages/PageLayout";
import { SkillsPageContent } from "./SkillsPageContent";

export default function SkillsPage() {
  return (
    <PageLayout nextRoute="/projects">
      <SkillsPageContent />
    </PageLayout>
  );
}

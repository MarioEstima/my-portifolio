import type { Metadata } from "next";
import PageLayout from "@/src/components/pages/PageLayout";
import { ContactContent } from "./ContactContent";
import { siteConfig } from "@/src/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${siteConfig.name} — available for freelance projects and collaborations.`,
};

export default function ContactPage() {
  return (
    <PageLayout nextRoute="/blog">
      <ContactContent />
    </PageLayout>
  );
}

"use client";

import { ReactNode } from "react";

import { PageContainer } from "../layout/PageContainer";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import { useTheme } from "@/src/components/theme/ThemeProvider";

interface PageLayoutProps {
  children: ReactNode;
  nextRoute?: string;
}

export default function PageLayout({
  children,
  nextRoute = "/skills",
}: PageLayoutProps) {
  const { theme } = useTheme();

  return (
    <PageContainer>
      <Header variant={theme} />

      {children}

      <Footer nextRoute={nextRoute} />
    </PageContainer>
  );
}

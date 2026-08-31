import { ReactNode } from "react";

import { PageContainer } from "../layout/PageContainer";
import Footer from "../layout/Footer";
import Header from "../layout/Header";

interface PageLayoutProps {
  children: ReactNode;
  theme?: "dark" | "light";
  nextRoute?: string;
}

export default function PageLayout({
  children,
  theme = "light",
  nextRoute = "/skills",
}: PageLayoutProps) {
  return (
    <PageContainer variant={theme}>
      <Header variant={theme} />

      {children}

      <Footer nextRoute={nextRoute} />
    </PageContainer>
  );
}

"use client";

import { cn } from "@/src/lib/utils";
import { ReactNode } from "react";
import { useTheme } from "@/src/components/theme/ThemeProvider";

interface PageContainerProps {
  children: ReactNode;
  className?: string;
}

export function PageContainer({ children, className }: PageContainerProps) {
  const { theme } = useTheme();

  return (
    <div
      className={cn(
        "min-h-screen w-full",
        "transition-colors duration-300",
        theme === "dark" ? ["bg-black", "text-white"] : ["bg-white", "text-black"],
        className,
      )}
    >
      {children}
    </div>
  );
}

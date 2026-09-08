"use client";

import { cn } from "@/src/lib/utils";
import Link from "next/link";
import { useState } from "react";

interface HeaderProps {
  variant?: "dark" | "light";
}

export default function Header({ variant = "dark" }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className={cn(
        "absolute top-0 left-0 w-full px-6 md:px-8 py-6 z-20",
        variant === "dark" && "text-white",
        variant === "light" && "text-black",
      )}
    >
      <section className="flex justify-between items-start w-full">
        <div>
          <Link href="/" className="font-medium text-sm text-[#FFFFFF]">
            Mario Estima
          </Link>
        </div>

        <div className="hidden md:block max-w-xs text-right">
          <p className="font-thin text-xs text-[#FFFFFF] leading-relaxed">
            Passionate Creative Designer and Developer, dedicated to crafting
            innovative solutions and exceptional digital experiences through
            modern technologies
          </p>
        </div>

        <div className="block md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col gap-1.5 p-1 items-end justify-center cursor-pointer"
            aria-label="Toggle Menu"
          >
            <span className="w-8 h-[2px] bg-white transition-all block" />
            <span className="w-6 h-[2px] bg-white transition-all block" />
            <span className="w-4 h-[2px] bg-white transition-all block" />
          </button>
        </div>
      </section>
    </header>
  );
}

"use client";

import { cn } from "@/src/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";

interface HeaderProps {
  variant?: "dark" | "light";
}

export default function Header({ variant = "dark" }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full px-6 md:px-8 py-6 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/70 backdrop-blur-md shadow-sm"
          : "bg-transparent",
        !isScrolled && variant === "dark" && "text-white",
        !isScrolled && variant === "light" && "text-black",
      )}
    >
      <section className="flex justify-between items-start w-full">
        <div>
          <Link
            href="/"
            className={cn(
              "font-medium text-sm",
              isScrolled ? "text-black" : "text-[#FFFFFF]",
            )}
          >
            Mario Estima
          </Link>
        </div>

        <div className="hidden md:block max-w-xs text-right">
          <p
            className={cn(
              "font-thin text-xs leading-relaxed",
              isScrolled ? "text-black" : "text-[#FFFFFF]",
            )}
          >
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
            <span className={cn("w-8 h-[2px] transition-all block", isScrolled ? "bg-black" : "bg-white")} />
            <span className={cn("w-6 h-[2px] transition-all block", isScrolled ? "bg-black" : "bg-white")} />
            <span className={cn("w-4 h-[2px] transition-all block", isScrolled ? "bg-black" : "bg-white")} />
          </button>
        </div>
      </section>
    </header>
  );
}
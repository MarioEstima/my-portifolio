"use client";

import { cn } from "@/src/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useTheme } from "@/src/components/theme/ThemeProvider";
import { useLanguage } from "@/src/components/language/LanguageProvider";
import { Moon, Sun, X, Globe } from "lucide-react";

interface HeaderProps {
  variant?: "dark" | "light";
}

export default function Header({ variant = "dark" }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { lang, toggleLang } = useLanguage();
  const pathname = usePathname();

  // Close drawer on navigation
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Lock body scroll while drawer is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "/", key: "nav.home" },
    { href: "/projects", key: "nav.projects" },
    { href: "/skills", key: "nav.skills" },
    { href: "/blog", key: "nav.blog" },
    { href: "/contact", key: "nav.contact" },
  ];

  // Follows the GLOBAL theme: dark theme → white text; light theme → black text
  const isDark = theme === "dark";
  const fg = isDark ? "text-white" : "text-black";

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 w-full px-6 md:px-8 py-6 z-50 transition-all duration-300",
          isScrolled
            ? isDark
              ? "bg-black/70 backdrop-blur-md shadow-sm"
              : "bg-white/70 backdrop-blur-md shadow-sm"
            : "bg-transparent",
        )}
      >
        <section className="flex justify-between items-center w-full">
          <div>
            <Link
              href="/"
              className={cn("font-medium text-sm", isScrolled ? fg : isDark ? "text-white" : "text-black")}
            >
              Mario Estima
            </Link>
          </div>

          <div className="hidden md:block max-w-xs text-right">
            <p
              className={cn(
                "font-thin text-xs leading-relaxed",
                isScrolled ? fg : isDark ? "text-white" : "text-black",
              )}
            >
              Passionate Creative Designer and Developer, dedicated to crafting
              innovative solutions and exceptional digital experiences through
              modern technologies
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleLang}
              aria-label="Toggle language"
              className={cn(
                "h-9 px-3 rounded-full flex items-center gap-1.5 cursor-pointer transition-colors text-xs font-semibold",
                isDark
                  ? "bg-white/10 hover:bg-white/20 text-white"
                  : "bg-black/5 hover:bg-black/10 text-black",
              )}
            >
              <Globe className="w-4 h-4" />
              {lang.toUpperCase()}
            </button>

            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className={cn(
                "w-9 h-9 rounded-full flex items-center justify-center cursor-pointer transition-colors",
                isDark
                  ? "bg-white/10 hover:bg-white/20 text-white"
                  : "bg-black/5 hover:bg-black/10 text-black",
              )}
            >
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Hamburger (all breakpoints) */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
              aria-expanded={isOpen}
              className="flex flex-col gap-1.5 p-2 items-end justify-center cursor-pointer"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <>
                  <span className={cn("w-8 h-[2px] transition-all block", isScrolled ? (isDark ? "bg-white" : "bg-black") : "bg-black")} />
                  <span className={cn("w-6 h-[2px] transition-all block", isScrolled ? (isDark ? "bg-white" : "bg-black") : "bg-black")} />
                  <span className={cn("w-4 h-[2px] transition-all block", isScrolled ? (isDark ? "bg-white" : "bg-black") : "bg-black")} />
                </>
              )}
            </button>
          </div>
        </section>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setIsOpen(false)}
            />
            <motion.aside
              className="fixed top-0 right-0 h-full w-[78vw] max-w-xs bg-[#111111] text-white z-[60] flex flex-col px-7 pt-24 pb-10 shadow-2xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            >
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close Menu"
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 flex items-center justify-center cursor-pointer hover:bg-white/20 transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>

              <nav className="flex flex-col gap-6">
                {links.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + i * 0.06, duration: 0.35 }}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        "text-2xl font-medium tracking-tight hover:opacity-60 transition-opacity",
                        pathname === link.href && "underline underline-offset-8",
                      )}
                    >
                      <T k={link.key} />
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                className="mt-auto flex flex-col gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <a
                  href="https://github.com/MarioEstima"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  github.com/MarioEstima
                </a>
                <p className="text-xs text-white/40">
                  © {new Date().getFullYear()} Mário Estima
                </p>
              </motion.div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

function T({ k }: { k: string }) {
  const { t } = useLanguage();
  return <>{t(k)}</>;
}

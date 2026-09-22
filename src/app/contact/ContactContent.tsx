"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { siteConfig } from "@/src/lib/site";
import { useLanguage } from "@/src/components/language/LanguageProvider";
import { useTheme } from "@/src/components/theme/ThemeProvider";
import ContactForm from "./ContactForm";

export function ContactContent() {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const fg = isDark ? "text-white" : "text-black";
  const fgSoft = isDark ? "text-white/60" : "text-black/60";
  const circle = isDark
    ? "bg-white/10 group-hover:bg-white/20"
    : "bg-black/5 group-hover:bg-black/10";

  return (
    <main className="mx-auto max-w-6xl px-5 md:px-6 py-24 md:py-28">
      <h1 className={`text-4xl sm:text-5xl md:text-7xl font-medium tracking-tight ${fg}`}>
        {t("contact.title")}
      </h1>
      <p className={`mt-4 md:mt-6 max-w-xl text-sm md:text-base ${fgSoft}`}>
        {t("contact.subtitle")}
      </p>

      <div className="mt-12 md:mt-16 grid gap-12 md:gap-16 lg:grid-cols-[1fr_1.2fr]">
        {/* Contact info */}
        <div className="flex flex-col gap-6 md:gap-8">
          <a href={`mailto:${siteConfig.email}`} className="group flex items-center gap-4">
            <span className={`w-11 h-11 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-colors flex-shrink-0 ${circle}`}>
              <Mail className={`w-5 h-5 ${fg}`} />
            </span>
            <div className="min-w-0">
              <p className="text-xs ${fgSoft}">
                {t("contact.email")}
              </p>
              <p className={`${fg} font-medium text-sm md:text-base break-all`}>
                {siteConfig.email}
              </p>
            </div>
          </a>

          <a href={siteConfig.phoneHref} className="group flex items-center gap-4">
            <span className={`w-11 h-11 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-colors flex-shrink-0 ${circle}`}>
              <Phone className={`w-5 h-5 ${fg}`} />
            </span>
            <div>
              <p className={fgSoft}>{t("contact.phone")}</p>
              <p className={`${fg} font-medium text-sm md:text-base`}>{siteConfig.phone}</p>
            </div>
          </a>

          <div className="flex items-center gap-4">
            <span className={`w-11 h-11 md:w-12 md:h-12 rounded-full flex items-center justify-center flex-shrink-0 ${circle}`}>
              <MapPin className={`w-5 h-5 ${fg}`} />
            </span>
            <div>
              <p className={fgSoft}>{t("contact.location")}</p>
              <p className={`${fg} font-medium text-sm md:text-base`}>
                {t("contact.locationValue")}
              </p>
            </div>
          </div>

          <a
            href={siteConfig.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4"
          >
            <span className={`w-11 h-11 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-colors flex-shrink-0 ${circle}`}>
              <SiGithub className={`w-5 h-5 ${fg}`} />
            </span>
            <div>
              <p className={fgSoft}>GitHub</p>
              <p className={`${fg} font-medium text-sm md:text-base`}>
                @{siteConfig.githubUsername}
              </p>
            </div>
          </a>
        </div>

        {/* Form */}
        <ContactForm />
      </div>
    </main>
  );
}

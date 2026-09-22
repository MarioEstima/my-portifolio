"use client";

import { SkillItem } from "@/src/data/skills";
import { useTheme } from "@/src/components/theme/ThemeProvider";

interface SkillsCardsProps extends SkillItem {
  className?: string;
}

export default function SkillsCards({
  title,
  description,
  icons,
  className = "",
}: SkillsCardsProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      className={`${isDark ? "bg-[#1E1E1E]" : "bg-neutral-100 border border-black/5"} rounded-4xl p-6 md:p-10 flex flex-col justify-between transition-all duration-300 ${className}`}
    >
      <div>
        {icons && icons.length > 0 && (
          <div className="flex flex-wrap gap-3 mb-6 items-center">
            {icons.map((icon, index) => (
              <div
                key={index}
                className={`w-12 h-12 md:w-15 md:h-15 rounded-full flex items-center justify-center text-xl shadow-inner ${
                  isDark ? "bg-[#141414] text-white" : "bg-white text-black"
                }`}
              >
                {icon}
              </div>
            ))}
          </div>
        )}

        <h3 className={`text-lg md:text-xl font-semibold tracking-tight mb-2 ${isDark ? "text-white" : "text-black"}`}>
          {title}
        </h3>

        {description && (
          <p className={`text-sm font-normal leading-relaxed ${isDark ? "text-gray-400" : "text-neutral-600"}`}>
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
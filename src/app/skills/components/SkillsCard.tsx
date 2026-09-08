import { SkillItem } from "@/src/data/skills";

interface SkillsCardsProps extends SkillItem {
  className?: string;
}

export default function SkillsCards({
  title,
  description,
  icons,
  tags,
  className = "",
}: SkillsCardsProps) {
  return (
    <div
      className={`bg-[#1E1E1E]   rounded-4xl p-6 flex flex-col justify-between transition-all duration-300  ${className}`}
    >
      <div>
        {icons && icons.length > 0 && (
          <div className="flex flex-wrap gap-3 mb-6 items-center">
            {icons.map((icon, index) => (
              <div
                key={index}
                className="w-20 h-20 rounded-full bg-[#1A1A1A] flex items-center justify-center text-white text-xl shadow-inner"
              >
                {icon}
              </div>
            ))}
          </div>
        )}

        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1.5 rounded-lg bg-[#1A1A1A] border border-white/10 text-xs font-medium text-gray-300"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <h3 className="text-xl font-semibold text-white tracking-tight mb-2">
          {title}
        </h3>

        {description && (
          <p className="text-sm text-gray-400 font-normal leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}

import { SkillItem } from "@/src/data/skills";

interface SkillsCardsProps extends SkillItem {
  className?: string;
}

export default function SkillsCards({
  title,
  description,
  icons,
  className = "",
}: SkillsCardsProps) {
  return (
    <div
      className={`bg-[#1E1E1E] rounded-4xl p-10 flex flex-col justify-between transition-all duration-300  ${className}`}
    >
      <div>
        {icons && icons.length > 0 && (
          <div className="flex flex-wrap gap-3 mb-6 items-center">
            {icons.map((icon, index) => (
              <div
                key={index}
                className="w-15 h-15 rounded-full bg-[#141414] flex items-center justify-center text-white text-xl shadow-inner"
              >
                {icon}
              </div>
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
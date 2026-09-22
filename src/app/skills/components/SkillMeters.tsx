"use client";

import { motion } from "motion/react";
import { useTheme } from "@/src/components/theme/ThemeProvider";

const meters = [
  { label: "React / Next.js", value: 90, color: "#61DAFB" },
  { label: "TypeScript", value: 85, color: "#3178C6" },
  { label: "React Native / Expo", value: 80, color: "#A97BFF" },
  { label: "Node.js / NestJS", value: 75, color: "#339933" },
  { label: "CSS / Tailwind", value: 88, color: "#06B6D4" },
  { label: "Databases (SQL/NoSQL)", value: 70, color: "#4169E1" },
];

export default function SkillMeters() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="flex flex-col gap-6">
      {meters.map((meter, i) => (
        <motion.div
          key={meter.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.01 }}
          transition={{ duration: 0.5, delay: i * 0.06 }}
        >
          <div className="mb-2 flex items-center justify-between text-sm">
            <span className={isDark ? "text-white font-medium" : "text-black font-medium"}>{meter.label}</span>
            <span className={isDark ? "text-white/50" : "text-black/50"}>{meter.value}%</span>
          </div>
          <div className={`h-2 w-full overflow-hidden rounded-full ${isDark ? "bg-white/10" : "bg-black/10"}`}>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: meter.value / 100 }}
              viewport={{ once: true, amount: 0.01 }}
              transition={{ duration: 1.1, delay: 0.15 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="h-full w-full origin-left rounded-full"
              style={{
                background: `linear-gradient(90deg, ${meter.color}55, ${meter.color})`,
              }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
}

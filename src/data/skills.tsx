import type { ReactNode } from "react";
import { FaAws } from "react-icons/fa";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiPython,
  SiCplusplus,
  SiC,
  SiNodedotjs,
  SiExpress,
  SiDjango,
  SiMongodb,
  SiPostgresql,
  SiFigma,
  SiGit,
  SiGithub,
  SiDocker,
} from "react-icons/si";

export interface SkillItem {
  title: string;
  description?: string;
  icons?: ReactNode[];
  tags?: string[];
}

export const skillsData: SkillItem[] = [
  {
    title: "Programming Languages",
    description:
      "Proficient in problem-solving and applying programming logic.",
    icons: [
      <SiPython key="py" className="text-[#3776AB]" />,
      <SiC key="c" className="text-[#A8B9CC]" />,
      <SiCplusplus key="cpp" className="text-[#00599C]" />,
      <SiJavascript key="js" className="text-[#F7DF1E]" />,
      <SiTypescript key="ts" className="text-[#3178C6]" />,
    ],
  },
  {
    title: "Front-End Development",
    description:
      "Building engaging and user-friendly web interfaces using modern frameworks.",
    icons: [
      <SiHtml5 key="html" className="text-[#E34F26]" />,
      <SiCss key="css" className="text-[#1572B6]" />,
      <SiJavascript key="js" className="text-[#F7DF1E]" />,
      <SiTypescript key="ts" className="text-[#3178C6]" />,
      <SiReact key="react" className="text-[#61DAFB]" />,
      <SiNextdotjs key="next" className="text-white" />,
    ],
  },
  {
    title: "Styling & Design",
    description: "Crafting visually appealing and responsive designs.",
    icons: [
      <SiTailwindcss key="tailwind" className="text-[#06B6D4]" />,
      <SiBootstrap key="bootstrap" className="text-[#7952B3]" />,
      <SiCss key="css" className="text-[#1572B6]" />,
    ],
  },
  {
    title: "Back-End Development",
    description: "Developing robust server-side logic and APIs.",
    icons: [
      <SiNodedotjs key="node" className="text-[#339933]" />,
      <SiExpress key="express" className="text-white" />,
      <SiDjango key="django" className="text-[#092E20]" />,
      <SiPython key="python" className="text-[#3776AB]" />,
    ],
  },
  {
    title: "Database Management",
    description: "Designing and managing databases.",
    icons: [
      <SiMongodb key="mongo" className="text-[#47A248]" />,
      <SiPostgresql key="postgres" className="text-[#4169E1]" />,
    ],
  },
  {
    title: "UI/UX Design & Tools",
    description: "Designing user-centric interfaces.",
    icons: [
      <SiFigma key="figma" className="text-[#F24E1E]" />,
      <SiGit key="git" className="text-[#F05032]" />,
      <SiGithub key="github" className="text-white" />,
      <SiDocker key="docker" className="text-[#2496ED]" />,
      <FaAws key="aws" className="text-[#FF9900]" />,
    ],
  },
];

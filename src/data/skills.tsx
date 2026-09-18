import type { ReactNode } from "react";
import { FaAws } from "react-icons/fa";
import {
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiVercel,
  SiDocker,
  SiNestjs,
  SiFirebase,
  SiStripe,
  SiExpo,
} from "react-icons/si";

export interface SkillItem {
  title: string;
  description?: string;
  icons?: ReactNode[];
  tags?: string[];
}

export const skillsData: SkillItem[] = [
  {
    title: "Frontend Web",
    description: "Building engaging and responsive web applications with modern frameworks, UI libraries, and animations.",
    icons: [
      <SiReact key="react" className="text-[#61DAFB]" />,
      <SiNextdotjs key="next" className="text-white" />,
      <SiTypescript key="ts" className="text-[#3178C6]" />,
      <SiTailwindcss key="tailwind" className="text-[#06B6D4]" />,
    ],
    tags: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn/ui",
      "Responsive design",
      "Framer Motion",
      "REST APIs",
      "PWA",
    ],
  },
  {
    title: "Frontend Mobile",
    description: "Developing cross-platform mobile apps for Android and iOS with native navigation and features.",
    icons: [
      <SiReact key="react-native" className="text-[#61DAFB]" />,
      <SiExpo key="expo" className="text-white" />,
    ],
    tags: [
      "React Native",
      "Expo / Expo Router",
      "NativeWind",
      "React Native Maps",
      "Deep Linking",
      "Notificações",
    ],
  },
  {
    title: "Backend Development",
    description: "Developing robust server-side logic, scalable APIs, and real-time communication systems.",
    icons: [
      <SiNodedotjs key="node" className="text-[#339933]" />,
      <SiNestjs key="nestjs" className="text-[#E0234E]" />,
      <SiExpress key="express" className="text-white" />,
    ],
    tags: [
      "Node.js",
      "NestJS",
      "APIs REST",
      "Autenticação/autorização",
      "WebSockets / Socket.IO",
      "Lógica de negócio",
    ],
  },
  {
    title: "Bases de Dados",
    description: "Designing, modeling, and integrating relational and non-relational databases.",
    icons: [
      <SiPostgresql key="postgres" className="text-[#4169E1]" />,
      <SiMongodb key="mongo" className="text-[#47A248]" />,
    ],
    tags: ["SQL", "NoSQL", "Modelagem de Dados", "Integração com Aplicação"],
  },
  {
    title: "Dev & Ferramentas",
    description: "Managing version control, deployments, environment variables, and project architecture.",
    icons: [
      <SiGit key="git" className="text-[#F05032]" />,
      <SiGithub key="github" className="text-white" />,
      <SiVercel key="vercel" className="text-white" />,
      <SiDocker key="docker" className="text-[#2496ED]" />,
    ],
    tags: [
      "Git / GitHub",
      "Vercel",
      "EAS / Expo",
      "Deploy",
      "Variáveis de Ambiente",
      "Arquitetura de Projetos",
      "MVVM",
    ],
  },
  {
    title: "Serviços & Outras Tecnologias",
    description: "Integrating external APIs, payment gateways, real-time services, and AI capabilities.",
    icons: [
      <SiFirebase key="firebase" className="text-[#FFCA28]" />,
      <SiStripe key="stripe" className="text-[#635BFF]" />,
      <FaAws key="aws" className="text-[#FF9900]" />,
    ],
    tags: [
      "Firebase",
      "Stripe",
      "LiveKit",
      "Socket.IO",
      "Automação",
      "Integração com IA",
    ],
  },
];
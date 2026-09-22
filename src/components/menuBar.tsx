import Image from "next/image";
import Link from "next/link";
import {
  Home,
  SquareTerminal,
  Box,
  FileText,
  ArrowUpRight,
} from "lucide-react";
import { SiGithub } from "react-icons/si";

const menuOptions = [
  { id: "home", icon: Home, href: "/", label: "Home", active: true },
  { id: "projects", icon: SquareTerminal, href: "/projects", label: "Projects", active: false },
  { id: "skills", icon: Box, href: "/skills", label: "Skills", active: false },
  {
    id: "avatar",
    type: "avatar" as const,
    src: "/images/menu-avatar.png",
    alt: "Avatar",
  },
  { id: "blog", icon: FileText, href: "/blog", label: "Blog", active: false },
  { id: "contact", icon: ArrowUpRight, href: "/contact", label: "Contact", active: false },
  {
    id: "github",
    icon: SiGithub,
    href: "https://github.com/MarioEstima",
    label: "GitHub",
    external: true,
    active: false,
  },
];

export const MenuBar = () => {
  return (
    <div className="bg-[#171717] rounded-[18px] p-2 md:p-2.5 inline-flex items-center gap-1.5 md:gap-3 shadow-2xl max-w-full overflow-x-auto">
      {menuOptions.map((item) => {
        if ("type" in item && item.type === "avatar") {
          return (
            <div
              key={item.id}
              className="relative w-9 h-9 md:w-12 md:h-12 rounded-full overflow-hidden bg-[#C6C6C6] flex-shrink-0 flex items-center justify-center cursor-pointer hover:scale-105 transition-transform"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover"
              />
            </div>
          );
        }

        const IconComponent = item.icon!;

        return (
          <Link
            key={item.id}
            href={item.href!}
            title={item.label}
            aria-label={item.label}
            target={"external" in item && item.external ? "_blank" : undefined}
            rel={"external" in item && item.external ? "noopener noreferrer" : undefined}
            className={`w-9 h-9 md:w-12 md:h-12 rounded-full flex-shrink-0 flex items-center justify-center transition-all ${
              item.active
                ? "bg-[#E0E0E0] text-black"
                : "bg-[#262626] text-white hover:bg-[#333333] hover:scale-105"
            }`}
          >
            <IconComponent className="w-4 h-4 md:w-5 md:h-5 stroke-[1.75]" />
          </Link>
        );
      })}
    </div>
  );
};

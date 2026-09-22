import { siteConfig } from "./../lib/site";
import { getFeaturedRepos, type FeaturedRepo } from "./../lib/github";

export interface Project {
  title: string;
  image?: string;
  url: string;
  repoUrl?: string;
  description?: string;
  language?: string | null;
  stars?: number;
  forks?: number;
  /** When set, the card links to the internal detail page /projects/[slug] */
  slug?: string;
}

/** Static showcase projects with local screenshots. */
export const showcaseProjects: Project[] = [
  {
    title: "NomadGo",
    image: "/projects/nomadgo.png",
    url: "/projects/nomadgo",
    slug: "nomadgo",
    description:
      "All-in-one companion app for immigrants settling in Portugal — journey roadmap, housing, jobs, vault and community.",
  },
  {
    title: "Learnlogicify Landing Page",
    image: "/projects/learnlogicify.png",
    url: `${siteConfig.githubUrl}`,
    description: "Modern landing page with animations and responsive design.",
  },
  {
    title: "Winzee Web Chat application",
    image: "/projects/winzee.png",
    url: `${siteConfig.githubUrl}`,
    description: "Real-time chat application with WebSocket communication.",
  },
  {
    title: "ChatGPT clone",
    image: "/projects/chatgpt.png",
    url: `${siteConfig.githubUrl}`,
    description: "AI chat interface clone with streaming responses.",
  },
  {
    title: "Gemini Clone",
    image: "/projects/gemini.png",
    url: `${siteConfig.githubUrl}`,
    description: "Google Gemini-inspired AI assistant UI.",
  },
];

export async function getAllProjects(): Promise<{ showcase: Project[]; github: FeaturedRepo[] }> {
  const githubRepos = await getFeaturedRepos();
  return { showcase: showcaseProjects, github: githubRepos };
}

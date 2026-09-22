import type { GitHubRepo } from "./github-types";

const API = "https://api.github.com";
const USERNAME = "MarioEstima";

/** Curated repos (excludes forks, config/profile repos and the portfolio itself). */
const PINNED = new Set([
  "glass-toast",
  "rnmaps",
  "test-frontend",
  "test-backend",
  "way2",
]);

export interface FeaturedRepo {
  name: string;
  html_url: string;
  description: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  homepage: string | null;
  topics: string[];
}

function mapRepo(repo: GitHubRepo): FeaturedRepo {
  return {
    name: repo.name,
    html_url: repo.html_url,
    description: repo.description ?? "No description yet — check the repo for details.",
    language: repo.language,
    stargazers_count: repo.stargazers_count,
    forks_count: repo.forks_count,
    homepage: repo.homepage || null,
    topics: repo.topics ?? [],
  };
}

export async function getFeaturedRepos(): Promise<FeaturedRepo[]> {
  try {
    const res = await fetch(`${API}/users/${USERNAME}/repos?sort=updated&per_page=100`, {
      headers: { Accept: "application/vnd.github+json" },
      next: { revalidate: 3600 }, // ISR: revalidate hourly
    });
    if (!res.ok) throw new Error(`GitHub API ${res.status}`);
    const repos = (await res.json()) as GitHubRepo[];

    return repos
      .filter((r) => !r.fork && !r.archived && PINNED.has(r.name))
      .sort((a, b) => b.updated_at.localeCompare(a.updated_at))
      .map(mapRepo);
  } catch {
    return [];
  }
}

export interface GitHubStats {
  followers: number;
  publicRepos: number;
}

export async function getGitHubStats(): Promise<GitHubStats> {
  try {
    const res = await fetch(`${API}/users/${USERNAME}`, {
      headers: { Accept: "application/vnd.github+json" },
      next: { revalidate: 3600 },
    });
    if (!res.ok) throw new Error(`GitHub API ${res.status}`);
    const user = (await res.json()) as { followers: number; public_repos: number };
    return { followers: user.followers, publicRepos: user.public_repos };
  } catch {
    return { followers: 0, publicRepos: 0 };
  }
}

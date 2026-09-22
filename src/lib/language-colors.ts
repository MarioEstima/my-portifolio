const LANGUAGE_COLORS: Record<string, string> = {
  TypeScript: "#3178C6",
  JavaScript: "#F1E05A",
  CSS: "#563D7C",
  HTML: "#E34C26",
  PHP: "#4F5D95",
  Python: "#3572A5",
  Dart: "#00B4AB",
  Kotlin: "#A97BFF",
  Swift: "#F05138",
  Java: "#B07219",
  Go: "#00ADD8",
  Rust: "#DEA584",
  Shell: "#89E051",
  C: "#555555",
  "C++": "#F34B7D",
  "C#": "#178600",
  Vue: "#41B883",
  Ruby: "#701516",
};

export function languageColor(language?: string | null): string {
  if (!language) return "#8B8B8B";
  return LANGUAGE_COLORS[language] ?? "#8B8B8B";
}

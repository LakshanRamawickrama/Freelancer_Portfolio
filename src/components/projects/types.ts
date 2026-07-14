export type ProjectCategory =
  | "ai-content"
  | "campaign-results"
  | "posters"
  | "reels";

export type ProjectItem = {
  slug: string;
  type: "image" | "video";
  category: ProjectCategory;
  title: string;
  brand: string | null;
  src: string;
  poster?: string;
};

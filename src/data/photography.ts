export type Orientation = "portrait" | "landscape" | "square";
export type PhotographyCategory = "hero" | "featured" | "portrait" | "editorial" | "environmental" | "gallery" | "archive";

export interface PhotographyImage {
  id: string;
  src: string;
  alt: string;
  orientation: Orientation;
  category: PhotographyCategory;
  role: "hero" | "featured" | "gallery" | "archive";
  width: number;
  height: number;
  // Visual characteristics for the portfolio curator
  visualCharacteristics?: string[];
  // If contextual verification is needed
  verifiedContext?: string | null;
}

export interface PhotographyCollection {
  id: string;
  title: string;
  description: string;
  images: PhotographyImage[];
}

export interface InstagramVideo {
  id: string;
  title: string;
  thumbnail: string;
  url: string;
}

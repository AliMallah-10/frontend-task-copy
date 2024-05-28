export interface SearchBarProps {
  isVisible: boolean;
  onClose: () => void;
}
// types.ts (or you can include this directly in your component file)
export interface Movie {
  name: string;
  landscapeImage: string;
  portraitImage: string;
  bannerImage: string;
  genres: string[];
  rating: string;
  directors: string[];
  year: string;
  duration: string;
  description: string;
  long_description: string;
  isOriginal: boolean;
}


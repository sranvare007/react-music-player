import { SongElement } from "./apiResponseTypes";

export type CategoriesBarProps = {
  categoriesList: string[];
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string | undefined>>;
};

export type SongsCategoryRowProps = {
  title: string;
  songsList: SongElement[];
};

export type SongCardProps = {
  imageUrl: string;
};

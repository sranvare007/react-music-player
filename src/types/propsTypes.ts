import { SongElement } from "./apiResponseTypes";

export type CategoriesBarProps = {
  categoriesList: string[];
};

export type SongsCategoryRowProps = {
  title: string;
  songsList: SongElement[];
};

export type SongCardProps = {
  imageUrl: string;
};

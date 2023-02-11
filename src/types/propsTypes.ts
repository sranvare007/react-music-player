import store from "../app/store";
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
  title?: string;
  artist?: string;
};

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

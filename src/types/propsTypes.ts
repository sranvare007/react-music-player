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
};

export type SongPlayerBottomProps = {
  songName: string;
  artistName: string;
  thumbnailUrl: string;
};

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

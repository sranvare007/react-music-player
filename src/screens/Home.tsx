import React from "react";
import SongCategoryRow from "../components/SongCategoryRow";
import { SongElement } from "../types/apiResponseTypes";

type HomeProps = {
  selectedCategory: string;
  songsList: SongElement[];
};

export default function Home({ selectedCategory, songsList }: HomeProps) {
  return (
    <SongCategoryRow title={selectedCategory as string} songsList={songsList} />
  );
}

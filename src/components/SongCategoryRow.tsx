import React from "react";
import { SongElement } from "../types/apiResponseTypes";
import { SongsCategoryRowProps } from "../types/propsTypes";
import SongCard from "./SongCard";

export default function SongCategoryRow({
  title,
  songsList,
}: SongsCategoryRowProps) {
  const getSongsList = () => {
    return (
      <div className={`flex flex-row items-center`}>
        {songsList != null &&
          songsList.length > 0 &&
          songsList.map((item: SongElement, index: number) => {
            return (
              <div className={`mx-4 my-2`} key={index}>
                <SongCard imageUrl={item.image[2].link} />
              </div>
            );
          })}
      </div>
    );
  };

  return (
    <div className={`flex flex-col w-full mr-4`}>
      <p
        className={`text-2xl font-sofia-sans font-semibold capitalize ml-4 my-3`}
      >
        {title}
      </p>
      <div className={`flex-1 overflow-scroll song-category-container`}>
        {getSongsList()}
      </div>
    </div>
  );
}

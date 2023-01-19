import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { globalConstants } from "../constants";
import { setIsSongPlaying } from "../features/songList/isSongPlaying";
import { setSongPlaying } from "../features/songList/songPlaying";
import { NetworkManager } from "../networkManager/networkManager";
import { SongElement } from "../types/apiResponseTypes";
import {
  AppDispatch,
  RootState,
  SongsCategoryRowProps,
} from "../types/propsTypes";
import SongCard from "./SongCard";

export default function SongCategoryRow({
  title,
  songsList,
}: SongsCategoryRowProps) {
  const songPlaying = useSelector<RootState>(
    (state) => state.songPlaying.value
  );
  const dispatch = useDispatch<AppDispatch>();

  const getSongsList = () => {
    return (
      <div className={`flex flex-row items-center`}>
        {songsList != null &&
          songsList.length > 0 &&
          songsList.map((item: SongElement, index: number) => {
            return (
              <div
                className={`mx-4 my-2`}
                key={index}
                onClick={async () => {
                  if (songPlaying == null || songPlaying.id != item.id) {
                    const songDetails = await NetworkManager.getSongDetails(
                      item.url
                    );
                    if (songDetails.status === globalConstants.status.SUCCESS) {
                      dispatch(setSongPlaying(songDetails.data[0]));
                      dispatch(setIsSongPlaying(true));
                    }
                  }
                }}
              >
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

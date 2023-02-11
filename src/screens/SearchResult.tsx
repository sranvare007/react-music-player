import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import LoaderAnimation from "../components/LoaderAnimation";
import SongCard from "../components/SongCard";
import { setIsSongPlaying } from "../features/songList/isSongPlaying";
import { setSongPlaying } from "../features/songList/songPlaying";
import { NetworkManager } from "../networkManager/networkManager";
import { SongDetails } from "../types/apiResponseTypes";
import { AppDispatch, RootState } from "../types/propsTypes";

export default function SearchResult() {
  const searchVal = useSelector((state: RootState) => state.searchVal.value);
  const prevSearchVal = useRef(searchVal);
  const [isLoading, setIsLoading] = useState(true);
  const [songsList, setSongsList] = useState<SongDetails[]>([]);
  const songPlaying: SongDetails = useSelector<RootState>(
    (state) => state.songPlaying.value
  ) as SongDetails;
  const dispatch = useDispatch<AppDispatch>();
  const LIMIT_VAL = 10;

  const getSongSearchResult = async () => {
    setIsLoading(true);
    const songSearchDetails = await NetworkManager.getSongSearchDetails(
      searchVal,
      songsList.length + LIMIT_VAL
    );
    if (
      songSearchDetails != null &&
      songSearchDetails.data != null &&
      songSearchDetails.data.results != null &&
      songSearchDetails.data.results.length >= 0
    ) {
      if (prevSearchVal.current != searchVal) {
        setSongsList(songSearchDetails.data.results);
      } else {
        setSongsList([...songsList, ...songSearchDetails.data.results]);
      }
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getSongSearchResult();
  }, [searchVal]);

  if (isLoading) {
    return <LoaderAnimation />;
  }

  return (
    !isLoading && (
      <div
        className={`flex flex-col items-center w-full  ${
          songPlaying ? "pb-32" : ""
        }`}
      >
        <div
          className={`flex flex-row items-center justify-center flex-wrap mt-6 mx-4 gap-y-8`}
        >
          {songsList.map((item: SongDetails, index: number) => {
            return (
              <div
                className={`mx-4 my-2`}
                key={index}
                onClick={async () => {
                  if (songPlaying == null || songPlaying.id != item.id) {
                    dispatch(setSongPlaying(item));
                    dispatch(setIsSongPlaying(true));
                  }
                }}
              >
                <SongCard
                  imageUrl={item.image[2].link}
                  title={item.name}
                  artist={item.primaryArtists}
                />
              </div>
            );
          })}
        </div>
        <div className={`mt-12`} onClick={() => getSongSearchResult()}>
          <p className={`font-sofia-sans font-semibold text-lg`}>Show more</p>
        </div>
      </div>
    )
  );
}

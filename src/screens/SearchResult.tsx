import React, { useEffect, useState } from "react";
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
  const { searchVal } = useParams<{ searchVal: string }>();
  const [isLoading, setIsLoading] = useState(true);
  const [songsList, setSongsList] = useState<SongDetails[]>([]);
  const songPlaying: SongDetails = useSelector<RootState>(
    (state) => state.songPlaying.value
  ) as SongDetails;
  const dispatch = useDispatch<AppDispatch>();

  const getSongSearchResult = async () => {
    const songSearchDetails = await NetworkManager.getSongSearchDetails(
      searchVal
    );
    if (
      songSearchDetails != null &&
      songSearchDetails.data != null &&
      songSearchDetails.data.results != null &&
      songSearchDetails.data.results.length >= 0
    ) {
      setSongsList(songSearchDetails.data.results);
    }
  };

  useEffect(() => {
    getSongSearchResult();
    setIsLoading(false);
  }, [searchVal]);

  if (isLoading) {
    return <LoaderAnimation />;
  }

  return (
    !isLoading && (
      <div className={`flex flex-row items-center flex-wrap mt-6`}>
        {songsList.map((item: SongDetails, index: number) => {
          return (
            <div
              className={`mx-4 my-2`}
              key={index}
              onClick={async () => {
                if (songPlaying == null || songPlaying.id != item.id) {
                  //   const songDetails = await NetworkManager.getSongDetails(
                  //     item.url
                  //   );
                  //   if (
                  //     songDetails.status === globalConstants.status.SUCCESS
                  //   ) {
                  // dispatch(setSongPlaying(songDetails.data[0]));
                  dispatch(setSongPlaying(item));
                  dispatch(setIsSongPlaying(true));
                  //   }
                }
              }}
            >
              <SongCard imageUrl={item.image[2].link} />
            </div>
          );
        })}
      </div>
    )
  );
}

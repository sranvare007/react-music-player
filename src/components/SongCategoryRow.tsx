import React, { useEffect, useRef, useState } from "react";
import { globalConstants } from "../constants";
import { NetworkManager } from "../networkManager/networkManager";
import { SongElement } from "../types/apiResponseTypes";
import { SongsCategoryRowProps } from "../types/propsTypes";
import AudioPlayer from "./AudioPlayer";
import SongCard from "./SongCard";

export default function SongCategoryRow({
  title,
  songsList,
}: SongsCategoryRowProps) {
  const [songUrl, setSongUrl] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const audioPlayerRef = useRef<HTMLAudioElement>(null);

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
                  const songDetails = await NetworkManager.getSongDetails(
                    item.url
                  );
                  if (songDetails.status === globalConstants.status.SUCCESS) {
                    setSongUrl(songDetails.data[0].downloadUrl[0].link);
                    if (songUrl) {
                      audioPlayerRef.current?.play();
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
      <audio src={songUrl} ref={audioPlayerRef} />
    </div>
  );
}

import React, { useEffect, useRef, useState } from "react";
import { BiRewind, BiFastForward, BiPlay, BiPause } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useSelector } from "react-redux";
import { RootState, SongPlayerBottomProps } from "../types/propsTypes";

export default function SongPlayerBottom({
  songName,
  artistName,
  thumbnailUrl,
}: SongPlayerBottomProps) {
  const songPlaying = useSelector<RootState>(
    (state) => state.songPlaying.value
  );
  const audioPlayerRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    audioPlayerRef.current?.play();
  }, [songPlaying]);

  return (
    <div
      className={`flex flex-row items-center absolute bottom-0 left-0 right-0 bg-[#7B2869] py-4 px-6 justify-between text-white rounded-tl-lg rounded-tr-lg`}
    >
      <audio src={songPlaying.downloadUrl[0].link} ref={audioPlayerRef} />
      {/* Song details container */}
      <div className={`flex flex-row items-center flex-1`}>
        <img
          src={songPlaying.image[2].link}
          className={`w-14 h-14 rounded-lg mr-4`}
        />
        <div className={`flex flex-col items-start justify-start`}>
          <p className={`font-bold text-lg font-sofia-sans`}>
            {songPlaying.name}
          </p>
          <p className={`font-light text-sm font-sofia-sans`}>
            {songPlaying.primaryArtists}
          </p>
        </div>
      </div>

      {/* Song controller */}
      <div className={`flex flex-row items-center justify-center flex-1`}>
        <BiRewind size={50} />
        {/* {isSongPlaying ? (
          <BiPause
            size={50}
            onClick={() => {
              setIsSongPlaying(false);
            }}
          />
        ) : (
          <BiPlay
            onClick={() => {
              setIsSongPlaying(true);
            }}
            size={50}
          />
        )} */}
        <BiFastForward size={50} />
      </div>

      <div className={`flex flex-row flex-1 justify-end`}>
        <BsThreeDotsVertical size={25} />
      </div>
    </div>
  );
}

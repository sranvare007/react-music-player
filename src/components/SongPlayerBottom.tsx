import React, { useState } from "react";
import { BiRewind, BiFastForward, BiPlay, BiPause } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { SongPlayerBottomProps } from "../types/propsTypes";

export default function SongPlayerBottom({
  songName,
  artistName,
}: SongPlayerBottomProps) {
  const [isSongPlaying, setIsSongPlaying] = useState(false);
  return (
    <div
      className={`flex flex-row items-center absolute bottom-0 left-0 right-0 bg-[#7B2869] py-4 px-6 justify-between text-white rounded-tl-lg rounded-tr-lg`}
    >
      {/* Song details container */}
      <div className={`flex flex-col items-start justify-start flex-1`}>
        <p className={`font-bold text-lg font-sofia-sans`}>{songName}</p>
        <p className={`font-light text-sm font-sofia-sans -mt-1`}>
          {artistName}
        </p>
      </div>

      {/* Song controller */}
      <div className={`flex flex-row items-center justify-center flex-1`}>
        <BiRewind size={50} />
        {isSongPlaying ? (
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
        )}
        <BiFastForward size={50} />
      </div>

      <div className={`flex flex-row flex-1 justify-end`}>
        <BsThreeDotsVertical size={25} />
      </div>
    </div>
  );
}

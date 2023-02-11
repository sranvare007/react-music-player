import React from "react";
import { BsPlayCircleFill } from "react-icons/bs";
import { SongCardProps } from "../types/propsTypes";

export default function SongCard({ imageUrl, title, artist }: SongCardProps) {
  return (
    <div className={`flex flex-col items-center w-40 h-40`}>
      <div
        className={`flex w-36 h-36 rounded-lg relative overflow-hidden cursor-pointer`}
        id="card-container"
      >
        <img
          src={imageUrl}
          className={`absolute top-0 left-0 right-0 bottom-0`}
          id="card-image"
        />
        <BsPlayCircleFill
          size={55}
          className={`text-white opacity-80 z-20 m-auto`}
          id="play-overlay"
        />
      </div>
      <p
        className={`w-full mt-1 font-sofia-sans font-semibold text-lg whitespace-nowrap overflow-hidden overflow-ellipsis text-center`}
      >
        {title}
      </p>
      <p
        className={`w-full mt-[2px] font-sofia-sans font-normal text-xs whitespace-nowrap overflow-hidden overflow-ellipsis text-center text-gray-500`}
      >
        {artist}
      </p>
    </div>
  );
}

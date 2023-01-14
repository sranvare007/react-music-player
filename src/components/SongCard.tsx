import React from "react";
import { BsPlayCircleFill } from "react-icons/bs";
import { SongCardProps } from "../types/propsTypes";

export default function SongCard({ imageUrl }: SongCardProps) {
  return (
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
  );
}

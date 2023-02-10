import React from "react";
import { BsPlayCircle, BsPlayCircleFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { setIsSongPlaying } from "../features/songList/isSongPlaying";
import { setSongPlaying } from "../features/songList/songPlaying";
import { helpers } from "../helper";
import { SongDetails } from "../types/apiResponseTypes";

type SongListProps = {
  imageUrl: string;
  title: string;
  subtitle: string;
  songList: SongDetails[];
};

export default function SongList({
  imageUrl,
  title,
  subtitle,
  songList,
}: SongListProps) {
  const dispatch = useDispatch();

  return (
    <div className={`w-full flex flex-col items-start px-28 pt-10 pb-24`}>
      <div className={`flex flex-row items-start`}>
        <img
          src={imageUrl}
          className={`w-96 h-96 hover:opacity-90 rounded-3xl`}
          alt={`song-thumbnail`}
        />
        <div className={`flex flex-col items-start ml-20`}>
          <p className={`text-5xl font-sofia-sans font-bold`}>{title}</p>
          <p className={`text-3xl font-sofia-sans font-medium text-zinc-400`}>
            {subtitle}
          </p>
        </div>
      </div>
      <div className={`flex w-full flex-col items-start mt-20`}>
        {songList?.map((item, index) => (
          <div
            className={`flex flex-row items-center justify-center w-full hover:bg-[#7B286955] mb-2`}
            key={index}
            onClick={() => {
              dispatch(setSongPlaying(item));
              dispatch(setIsSongPlaying(true));
            }}
          >
            <div className={`grid grid-cols-12 w-11/12 items-center py-2`}>
              <div className={`col-start-1 col-end-2`}>
                <img
                  src={`${item.image[2].link}`}
                  alt={item.name}
                  className={`w-24 h-24 rounded-lg aspect-square`}
                />
              </div>
              <div className={`col-start-3 col-end-10`}>
                <div className={`flex-col items-start`}>
                  <p className={`font-sofia-sans text-lg font-semibold`}>
                    {item.name}
                  </p>
                  <p
                    className={`font-sofia-sans text-md font-medium text-gray-500`}
                  >
                    {item.primaryArtists}
                  </p>
                </div>
              </div>
              <div
                className={`col-start-10 col-end-12 flex flex-col items-center`}
              >
                <p className={`font-sofia-sans text-lg font-semibold`}>
                  {helpers.getTimeInMinutesFromSeconds(Number(item.duration))}
                </p>
              </div>
              <div className={`col-start-12 col-end-13`}>
                <BsPlayCircle className={`h-12 w-12 text-black`} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

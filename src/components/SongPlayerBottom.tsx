import React, { useEffect, useRef, useState } from "react";
import { BiRewind, BiFastForward, BiPlay, BiPause } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { setIsSongPlaying } from "../features/songList/isSongPlaying";
import { SongDetails } from "../types/apiResponseTypes";
import { AppDispatch, RootState } from "../types/propsTypes";

export default function SongPlayerBottom() {
  const songPlaying: SongDetails = useSelector<RootState>(
    (state) => state.songPlaying.value
  ) as SongDetails;
  const isSongPlaying = useSelector<RootState>(
    (state) => state.isSongPlaying.value
  );
  const dispatch = useDispatch<AppDispatch>();
  const audioPlayerRef = useRef<HTMLAudioElement>(null);
  const [audioTotalDuration, setAudioTotalDuration] = useState(0);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const prevSong = useRef(songPlaying);

  useEffect(() => {
    if (songPlaying != prevSong.current) {
      setTimeElapsed(0);
      prevSong.current = songPlaying;
    }
    let timer: number | undefined;
    if (audioPlayerRef != null && audioPlayerRef.current != null) {
      audioPlayerRef.current.onloadedmetadata = (e) => {
        setAudioTotalDuration(audioPlayerRef.current?.duration as number);
      };
      if (!isSongPlaying) {
        audioPlayerRef.current?.pause();
        dispatch(setIsSongPlaying(false));
        clearInterval(timer);
      } else {
        audioPlayerRef.current?.play();
        dispatch(setIsSongPlaying(true));
        timer = setInterval(() => {
          setTimeElapsed(timeElapsed + 1);
        }, 1000);
      }
    }
    return () => clearInterval(timer);
  }, [songPlaying, isSongPlaying, timeElapsed]);

  function getTimeInMinutesFromSeconds(seconds: number) {
    const minutesElpased = (seconds / 60).toFixed(0);
    const secondsElapsed = (seconds % 60).toFixed(0);

    return `${
      minutesElpased.length < 2 ? "0" + minutesElpased : minutesElpased
    }:${secondsElapsed.length < 2 ? "0" + secondsElapsed : secondsElapsed}`;
  }

  return (
    <div
      className={`flex flex-row items-center absolute bottom-0 left-0 right-0 bg-[#7B2869] py-4 px-6 justify-between text-white rounded-tl-lg rounded-tr-lg shadow-md`}
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
        {isSongPlaying ? (
          <BiPause
            size={50}
            onClick={() => {
              dispatch(setIsSongPlaying(false));
            }}
            className={`cursor-pointer`}
          />
        ) : (
          <BiPlay
            onClick={() => {
              dispatch(setIsSongPlaying(true));
            }}
            size={50}
            className={`cursor-pointer`}
          />
        )}
        <BiFastForward size={50} className={`cursor-pointer`} />
      </div>
      <div
        className={`flex flex-row items-center justify-center py-2 border-[1px] border-white rounded-3xl w-36`}
      >
        <p className={`text-sm font-sofia-sans font-medium `}>
          {getTimeInMinutesFromSeconds(timeElapsed)} /{" "}
          {getTimeInMinutesFromSeconds(audioTotalDuration)}
        </p>
      </div>

      <div className={`flex flex-row flex-1 justify-end`}>
        <BsThreeDotsVertical size={25} className={`cursor-pointer`} />
      </div>
    </div>
  );
}

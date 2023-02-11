import React, { LegacyRef, useEffect, useRef, useState } from "react";
import { BiRewind, BiFastForward, BiPlay, BiPause } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { setIsSongPlaying } from "../features/songList/isSongPlaying";
import { helpers } from "../helper";
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
  const availableQualities = [
    "12kbps",
    "48kbps",
    "96kbps",
    "160kbps",
    "320kbps",
  ];
  const [selectedQuality, setSelectedQuality] = useState(availableQualities[2]);
  const [shouldShowQualityDropdown, setShouldShowQualityDropdown] =
    useState(false);
  const [selectedSongUrl, setSelectedSongUrl] = useState("");

  const ref = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setShouldShowQualityDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  useEffect(() => {
    if (songPlaying != prevSong.current) {
      setTimeElapsed(0);
      prevSong.current = songPlaying;
    }
    const filteredSong = songPlaying.downloadUrl.filter(
      (item) => item.quality == selectedQuality
    );
    setSelectedSongUrl(filteredSong[0].link as string);
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
  }, [songPlaying, isSongPlaying, timeElapsed, selectedQuality]);

  return (
    <div
      className={`flex flex-row items-center bg-[#7B2869] py-6 px-6 justify-between text-white rounded-tl-lg rounded-tr-lg shadow-md relative`}
    >
      <audio src={selectedSongUrl} ref={audioPlayerRef} />
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
        <BiRewind
          size={50}
          className={`cursor-pointer mr-6`}
          onClick={() => {
            audioPlayerRef.current!.currentTime =
              audioPlayerRef.current!.currentTime - 5;
          }}
        />
        {isSongPlaying ? (
          <BiPause
            size={50}
            onClick={() => {
              dispatch(setIsSongPlaying(false));
            }}
            className={`cursor-pointer mr-6`}
          />
        ) : (
          <BiPlay
            onClick={() => {
              dispatch(setIsSongPlaying(true));
            }}
            size={50}
            className={`cursor-pointe mr-6`}
          />
        )}
        <BiFastForward
          size={50}
          className={`cursor-pointer mr-6`}
          onClick={() => {
            audioPlayerRef.current!.currentTime =
              audioPlayerRef.current!.currentTime + 5;
          }}
        />
      </div>
      <div
        className={`flex flex-row items-center justify-center py-2 border-[1px] border-white rounded-3xl w-36 unselectable`}
      >
        <p className={`text-sm font-sofia-sans font-medium `}>
          {helpers.getTimeInMinutesFromSeconds(
            Number(audioPlayerRef.current?.currentTime.toFixed(0))
          )}{" "}
          / {helpers.getTimeInMinutesFromSeconds(audioTotalDuration)}
        </p>
      </div>

      <div className={`flex flex-row flex-1 justify-end`}>
        <BsThreeDotsVertical
          size={25}
          className={`cursor-pointer`}
          onClick={() => {
            setShouldShowQualityDropdown(!shouldShowQualityDropdown);
          }}
        />
      </div>
      {shouldShowQualityDropdown && (
        <div
          className={`absolute right-10 -top-64 w-40 flex flex-col items-center border border-white rounded-lg bg-[#7B2869] animate-scaleup origin-bottom overflow-hidden`}
        >
          <div className={`w-full border-b border-white`}>
            <p
              className={`font-sofia-sans font-semibold text-lg text-center py-3  text-white`}
            >
              Quality
            </p>
          </div>
          <div
            className={`flex flex-col w-full items-center`}
            ref={ref as LegacyRef<HTMLDivElement>}
          >
            {availableQualities.map((item, index) => (
              <p
                className={`w-full text-center font-sofia-sans  text-white font-medium py-3 cursor-pointer ${
                  selectedQuality == item ? "" : "opacity-50"
                }`}
                onClick={() => {
                  setSelectedQuality(item);
                  setShouldShowQualityDropdown(false);
                }}
              >
                {item}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

import React, { useEffect } from "react";

type AudioPlayerProps = {
  url: string;
};

export default function AudioPlayer({ url }: AudioPlayerProps) {
  const audio = new Audio(url);
  useEffect(() => {
    audio.play();
  }, []);
  return <div>AudioPlayer</div>;
}

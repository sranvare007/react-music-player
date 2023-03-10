import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoaderAnimation from "../components/LoaderAnimation";
import SongList from "../components/SongList";
import { NetworkManager } from "../networkManager/networkManager";
import { Playlist, SongDetails } from "../types/apiResponseTypes";

export default function PlayList() {
  const { id } = useParams<{ id: string }>();
  const [isLoading, setIsLoading] = useState(true);
  const [playListDetails, setPlaylistDetails] = useState<Playlist>();

  const getPlaylistDetails = async () => {
    const playlistResponseDetails = await NetworkManager.getPlaylistDetails(id);
    setPlaylistDetails(playlistResponseDetails.data);
    setIsLoading(false);
  };

  useEffect(() => {
    getPlaylistDetails();
  }, []);

  if (isLoading) {
    return <LoaderAnimation />;
  }

  return (
    !isLoading && (
      <SongList
        imageUrl={playListDetails?.image[2].link as string}
        title={playListDetails?.name as string}
        subtitle={playListDetails?.subtitle as string}
        songList={playListDetails?.songs as SongDetails[]}
      />
    )
  );
}

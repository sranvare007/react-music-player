import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SongList from "../components/SongList";
import { NetworkManager } from "../networkManager/networkManager";
import { Album, SongDetails } from "../types/apiResponseTypes";

export default function AlbumComponent() {
  const { id } = useParams<{ id: string }>();
  const [isLoading, setIsLoading] = useState(true);
  const [playListDetails, setPlaylistDetails] = useState<Album>();

  const getPlaylistDetails = async () => {
    const playlistResponseDetails = await NetworkManager.getAlbumDetails(id);
    setPlaylistDetails(playlistResponseDetails.data);
    console.log(playlistResponseDetails);
    setIsLoading(false);
  };

  useEffect(() => {
    getPlaylistDetails();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    !isLoading && (
      <SongList
        imageUrl={playListDetails?.image[2].link as string}
        title={playListDetails?.name as string}
        subtitle={playListDetails?.primaryArtists.toString() as string}
        songList={playListDetails?.songs as SongDetails[]}
      />
    )
  );
}

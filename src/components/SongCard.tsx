import React from "react";
import { BsPlayCircleFill } from "react-icons/bs";

const songDetail = {
  id: "c-6-mB8N",
  name: "Flowers",
  year: "2023",
  type: "song",
  playCount: "2677",
  language: "english",
  explicitContent: "0",
  url: "https://www.jiosaavn.com/song/flowers/E0VdHBlyD30",
  primaryArtists: [
    {
      id: "603634",
      name: "Miley Cyrus",
      url: "https://www.jiosaavn.com/artist/miley-cyrus-/FRjYU7Dlr2U_",
      image: [
        {
          quality: "50x50",
          link: "https://c.saavncdn.com/artists/Miley_Cyrus_50x50.jpg",
        },
        {
          quality: "150x150",
          link: "https://c.saavncdn.com/artists/Miley_Cyrus_150x150.jpg",
        },
        {
          quality: "500x500",
          link: "https://c.saavncdn.com/artists/Miley_Cyrus_500x500.jpg",
        },
      ],
      type: "artist",
      role: "singer",
    },
  ],
  featuredArtists: [],
  artists: [
    {
      id: "603634",
      name: "Miley Cyrus",
      url: "https://www.jiosaavn.com/artist/miley-cyrus-/FRjYU7Dlr2U_",
      image: [
        {
          quality: "50x50",
          link: "https://c.saavncdn.com/artists/Miley_Cyrus_50x50.jpg",
        },
        {
          quality: "150x150",
          link: "https://c.saavncdn.com/artists/Miley_Cyrus_150x150.jpg",
        },
        {
          quality: "500x500",
          link: "https://c.saavncdn.com/artists/Miley_Cyrus_500x500.jpg",
        },
      ],
      type: "artist",
      role: "singer",
    },
    {
      id: "1887754",
      name: "Michael Pollack",
      url: "https://www.jiosaavn.com/artist/michael-pollack-/kdY6-WgNJ5M_",
      image: false,
      type: "artist",
      role: "",
    },
    {
      id: "7770383",
      name: "Gregory Aldae Hein",
      url: "https://www.jiosaavn.com/artist/gregory-aldae-hein-/oOnOvoD7ia8_",
      image: false,
      type: "artist",
      role: "music",
    },
  ],
  image: [
    {
      quality: "50x50",
      link: "https://c.saavncdn.com/047/Flowers-English-2023-20230113044956-50x50.jpg",
    },
    {
      quality: "150x150",
      link: "https://c.saavncdn.com/047/Flowers-English-2023-20230113044956-150x150.jpg",
    },
    {
      quality: "500x500",
      link: "https://c.saavncdn.com/047/Flowers-English-2023-20230113044956-500x500.jpg",
    },
  ],
  songs: [],
};

export default function SongCard() {
  return (
    <div
      className={`flex w-36 h-36 rounded-lg relative overflow-hidden cursor-pointer`}
      id="card-container"
    >
      <img
        src={songDetail.image[2].link}
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

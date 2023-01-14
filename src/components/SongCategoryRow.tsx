import React from "react";
import { SongElement } from "../types/apiResponseTypes";
import { SongsCategoryRowProps } from "../types/propsTypes";
import SongCard from "./SongCard";

const songDetail = [
  {
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
  },
];

export default function SongCategoryRow({
  title,
  songsList,
}: SongsCategoryRowProps) {
  const getSongsList = () => {
    return (
      <div className={`flex flex-row items-center`}>
        {songsList != null &&
          songsList.length > 0 &&
          songsList.map((item: SongElement, index: number) => {
            return (
              <div className={`mx-4 my-2`} key={index}>
                <SongCard imageUrl={item.image[2].link} />
              </div>
            );
          })}
      </div>
    );
  };

  return (
    <div className={`flex flex-col w-full mr-4`}>
      <p
        className={`text-2xl font-sofia-sans font-semibold capitalize ml-4 my-3`}
      >
        {title}
      </p>
      <div className={`flex-1 overflow-scroll song-category-container`}>
        {getSongsList()}
      </div>
    </div>
  );
}

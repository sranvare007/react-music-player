import { useEffect, useState } from "react";
import "./App.css";
import CategoriesBar from "./components/CategoriesBar";
import NavBar from "./components/NavBar";
import SongCard from "./components/SongCard";
import SongCategoryRow from "./components/SongCategoryRow";
import SongPlayerBottom from "./components/SongPlayerBottom";
import { WelcomeAnimation } from "./components/welcomeAnimation";
import { NetworkManager } from "./networkManager/networkManager";
import { HomepageData, SongElement } from "./types/apiResponseTypes";

function App() {
  const [homepageData, setHomepageData] = useState<HomepageData>();
  const [categoriesList, setCategoriesList] = useState<string[]>();
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>();

  const fetchHomepageData = async () => {
    const response = await NetworkManager.getHomePageData();
    console.log(response.data);
    setHomepageData(response.data);
    setCategoriesList(Object.keys(response.data));
    setSelectedCategory(Object.keys(response.data)[0]);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };

  const getSongsList = () => {
    switch (selectedCategory) {
      case "trending":
        return homepageData?.trending.songs as SongElement[];
        break;
      default:
        return homepageData != null
          ? (homepageData[selectedCategory] as SongElement[])
          : [];
    }
  };

  useEffect(() => {
    fetchHomepageData();
  }, []);

  if (isLoading) {
    return (
      <div className={`w-screen h-screen justify-center items-center`}>
        <WelcomeAnimation />
      </div>
    );
  }

  return (
    !isLoading && (
      <div className={`w-screen h-screen flex flex-col items-start`}>
        <NavBar />
        <CategoriesBar
          categoriesList={categoriesList as string[]}
          selectedCategory={selectedCategory as string}
          setSelectedCategory={setSelectedCategory}
        />
        <SongCategoryRow
          title={selectedCategory as string}
          songsList={getSongsList()}
        />
        <SongPlayerBottom songName="Flowers" artistName="Miley Cyrus" />
        {/* <WelcomeAnimation /> */}
      </div>
    )
  );
}

export default App;

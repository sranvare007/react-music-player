import { useEffect, useState } from "react";
import "./App.css";
import CategoriesBar from "./components/CategoriesBar";
import NavBar from "./components/NavBar";
import SongCard from "./components/SongCard";
import SongCategoryRow from "./components/SongCategoryRow";
import { WelcomeAnimation } from "./components/welcomeAnimation";
import { NetworkManager } from "./networkManager/networkManager";
import { HomepageData, SongElement } from "./types/apiResponseTypes";

function App() {
  const [homepageData, setHomepageData] = useState<HomepageData>();
  const [categoriesList, setCategoriesList] = useState<string[]>();
  const [isLoading, setIsLoading] = useState(true);

  const fetchHomepageData = async () => {
    const response = await NetworkManager.getHomePageData();
    setHomepageData(response.data);
    setCategoriesList(Object.keys(response.data));
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
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
        <CategoriesBar categoriesList={categoriesList as string[]} />
        <SongCategoryRow
          title="Trending"
          songsList={homepageData?.trending.songs as SongElement[]}
        />
        {/* <WelcomeAnimation /> */}
      </div>
    )
  );
}

export default App;

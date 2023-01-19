import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import CategoriesBar from "./components/CategoriesBar";
import NavBar from "./components/NavBar";
import SongCategoryRow from "./components/SongCategoryRow";
import SongPlayerBottom from "./components/SongPlayerBottom";
import { WelcomeAnimation } from "./components/welcomeAnimation";
import { setHomePageData } from "./features/songList/homepageData";
import { NetworkManager } from "./networkManager/networkManager";
import { HomepageData, SongElement } from "./types/apiResponseTypes";
import { AppDispatch, RootState } from "./types/propsTypes";

function App() {
  const homepageData: HomepageData = useSelector<RootState>(
    (state) => state.homepageData.value
  ) as HomepageData;
  const dispatch = useDispatch<AppDispatch>();
  const songPlaying = useSelector<RootState>(
    (state) => state.songPlaying.value
  );

  const [categoriesList, setCategoriesList] = useState<string[]>();
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>();

  const fetchHomepageData = async () => {
    const response = await NetworkManager.getHomePageData();
    dispatch(setHomePageData(response.data));
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
      default:
        return homepageData != null
          ? // @ts-ignore
            (homepageData[selectedCategory] as SongElement[])
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
        {songPlaying != null && <SongPlayerBottom />}
      </div>
    )
  );
}

export default App;

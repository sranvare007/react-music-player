import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import CategoriesBar from "./components/CategoriesBar";
import NavBar from "./components/NavBar";
import SongPlayerBottom from "./components/SongPlayerBottom";
import { WelcomeAnimation } from "./components/welcomeAnimation";
import { setHomePageData } from "./features/songList/homepageData";
import { NetworkManager } from "./networkManager/networkManager";
import Home from "./screens/Home";
import { HomepageData, SongElement } from "./types/apiResponseTypes";
import { AppDispatch, RootState } from "./types/propsTypes";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PlayList from "./screens/Playlist";
import AlbumComponent from "./screens/Album";
import SearchResult from "./screens/SearchResult";

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
      <Router>
        <div className={`w-screen h-screen flex flex-col items-start relative`}>
          <NavBar />
          <CategoriesBar
            categoriesList={categoriesList as string[]}
            selectedCategory={selectedCategory as string}
            setSelectedCategory={setSelectedCategory}
          />

          <Switch>
            <Route path="/" exact>
              <Home
                selectedCategory={selectedCategory as string}
                songsList={getSongsList()}
              />
            </Route>
            <Route path="/playlist/:id">
              <PlayList />
            </Route>
            <Route path="/album/:id">
              <AlbumComponent />
            </Route>
            <Route path="/search/:searchVal">
              <SearchResult />
            </Route>
          </Switch>

          <div className={`fixed bottom-0 left-0 right-0`}>
            {songPlaying != null && <SongPlayerBottom />}
          </div>
        </div>
      </Router>
    )
  );
}

export default App;

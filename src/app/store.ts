import { configureStore } from "@reduxjs/toolkit";
import HomepageDataReducer from "../features/songList/homepageData";
import SongListReducer from "../features/songList/songListSlice";
import SongPlayingReducer from "../features/songList/songPlaying";
import IsSongPlayingReducer from "../features/songList/isSongPlaying";
import SearchValReducer from "../features/songList/searchVal";

export default configureStore({
  reducer: {
    homepageData: HomepageDataReducer,
    songList: SongListReducer,
    songPlaying: SongPlayingReducer,
    isSongPlaying: IsSongPlayingReducer,
    searchVal: SearchValReducer,
  },
});

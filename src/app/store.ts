import { configureStore } from "@reduxjs/toolkit";
import HomepageDataReducer from "../features/songList/homepageData";
import SongListReducer from "../features/songList/songListSlice";
import SongPlayingReducer from "../features/songList/songPlaying";

export default configureStore({
  reducer: {
    homepageData: HomepageDataReducer,
    songList: SongListReducer,
    songPlaying: SongPlayingReducer,
  },
});

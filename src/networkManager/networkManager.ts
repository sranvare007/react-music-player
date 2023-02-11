import { globalConstants } from "../constants";
import { axiosInstance } from "./axiosInstance";
export const NetworkManager = {
  GET_HOME_DATA: "modules",
  GET_SONG_DETAILS: "songs",
  GET_ALBUM_DETAILS: "albums",
  GET_PLAYLIST_DETAILS: "playlists",
  GET_SONG_SEARCH_DETAILS: "search/songs",

  getRandomUserAgent() {
    const randomUserAgentIndex =
      Math.random() * (globalConstants.USER_AGENT_LIST.length - 0) + 0;
    return randomUserAgentIndex;
  },

  async getHomePageData() {
    try {
      const response = await axiosInstance.get(this.GET_HOME_DATA, {
        params: ["hindi", "english"],
      });
      return response.data;
    } catch (e) {
      return e;
    }
  },

  async getSongDetails(songUrl: string) {
    try {
      const response = await axiosInstance.get(
        `${this.GET_SONG_DETAILS}?link=${songUrl}`,
        {}
      );
      return response.data;
    } catch (e) {
      return e;
    }
  },

  async getAlbumDetails(albumId: string) {
    try {
      const response = await axiosInstance.get(
        `${this.GET_ALBUM_DETAILS}?id=${albumId}`,
        {}
      );
      return response.data;
    } catch (e) {
      return e;
    }
  },

  async getPlaylistDetails(playlistId: string) {
    try {
      const response = await axiosInstance.get(
        `${this.GET_PLAYLIST_DETAILS}?id=${playlistId}`,
        {}
      );
      return response.data;
    } catch (e) {
      return e;
    }
  },

  async getSongSearchDetails(searchVal: string) {
    try {
      const response = await axiosInstance.get(
        `${this.GET_SONG_SEARCH_DETAILS}?query=${searchVal}`,
        {}
      );
      return response.data;
    } catch (e) {
      return e;
    }
  },
};

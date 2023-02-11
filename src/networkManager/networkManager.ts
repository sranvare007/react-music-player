import { globalConstants } from "../constants";
import { axiosInstance } from "./axiosInstance";
export const NetworkManager = {
  GET_HOME_DATA: "modules",
  GET_SONG_DETAILS: "songs",
  GET_ALBUM_DETAILS: "albums",
  GET_PLAYLIST_DETAILS: "playlists",

  getRandomUserAgent() {
    const randomUserAgentIndex =
      Math.random() * (globalConstants.USER_AGENT_LIST.length - 0) + 0;
    return randomUserAgentIndex;
  },

  async getHomePageData() {
    try {
      const response = await axiosInstance.get(this.GET_HOME_DATA, {
        params: ["hindi", "english"],
        headers: {
          "User-Agent": this.getRandomUserAgent(),
        },
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
        {
          headers: {
            "User-Agent": this.getRandomUserAgent(),
          },
        }
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
        {
          headers: {
            "User-Agent": this.getRandomUserAgent(),
          },
        }
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
        {
          headers: {
            "User-Agent": this.getRandomUserAgent(),
          },
        }
      );
      return response.data;
    } catch (e) {
      return e;
    }
  },
};

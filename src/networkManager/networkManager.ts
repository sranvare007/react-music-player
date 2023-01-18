import { axiosInstance } from "./axiosInstance";
export const NetworkManager = {
  GET_HOME_DATA: "modules",
  GET_SONG_DETAILS: "songs",

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
};

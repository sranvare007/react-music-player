import { axiosInstance } from "./axiosInstance";
export const NetworkManager = {
  GET_HOME_DATA: "modules",

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
};

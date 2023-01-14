import { NETWORK_CONSTANTS } from "./networkConstants";
import axios, { AxiosInstance } from "axios";

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: NETWORK_CONSTANTS.BASE_URL,
});

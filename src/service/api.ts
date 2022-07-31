import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://mock-api.driven.com.br/api/v7/cineflex",
});

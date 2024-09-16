import axios, { AxiosInstance } from "axios";

const apiClient = () => {

  const headerConfig = {
    Accept: "application/json",
  };
  const instance: AxiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
      post: headerConfig,
      get: headerConfig,
      delete: headerConfig,
    },
  });

  instance.interceptors.request.use(
    function(config) {
      const t = localStorage.getItem("atmusic-access-token");
      config.headers.Authorization = `Bearer ${t}`;
      return config;
    },
    error => {
      return Promise.reject(error);
    },
  );

  return instance;
};

export const client = apiClient();
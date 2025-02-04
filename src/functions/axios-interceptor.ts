import { routes } from "@/utils/routes";
import axios from "axios";
import Cookies from "js-cookie";
import { handleRefreshToken } from "./handle-refresh-token";

export const setupAxiosInterceptor = (
  setToken: React.Dispatch<React.SetStateAction<string | null>>,
  storedToken: string | null
) => {
  const interceptor = axios.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config;

      if (error.response?.status === 401 && !originalRequest._isRetry) {
        originalRequest._isRetry = true;

        try {
          const { token } = await handleRefreshToken(setToken);
          originalRequest.headers.Authorization = `Bearer ${token}`;
          return axios(originalRequest);
        } catch {
          Cookies.remove("orgToken");
          window.location.href = routes.signIn;
        }
      }
      return Promise.reject(error);
    },
  );

  if (storedToken) axios.defaults.headers.Authorization = `Bearer ${storedToken}`;

  return () => {
    axios.interceptors.response.eject(interceptor);
  };
};

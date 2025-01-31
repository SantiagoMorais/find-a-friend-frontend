import axios from "axios";
import { handleRefreshToken } from "./handle-refresh-token";
import { routes } from "@/utils/routes";

export const setupAxiosInterceptor = (
  setToken: React.Dispatch<React.SetStateAction<string | null>>
) => {
  const interceptor = axios.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config;

      if (error.response?.status === 401 && !originalRequest._isRetry) {
        originalRequest._isRetry = true;

        try {
          const newToken = await handleRefreshToken(setToken);
          originalRequest.headers.Authorization = `Bearer ${newToken}`;
          return axios(originalRequest);
        } catch (refreshError) {
          setToken(null);
          localStorage.removeItem("org-token");
          window.location.href = routes.signIn;
        }
      }
      return Promise.reject(error);
    }
  );
  return () => {
    axios.interceptors.response.eject(interceptor);
  };
};

import { setupAxiosInterceptor } from "@/functions/axios-interceptor";
import { handleRefreshToken } from "@/functions/handle-refresh-token";
import { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";

type TAuthContext = {
  token: string | null;
  setToken: React.Dispatch<React.SetStateAction<string | null>>;
};

const AuthContext = createContext<TAuthContext>({
  token: null,
  setToken: () => {},
});

export const AuthProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const storedToken: string | undefined = Cookies.get("orgToken");
    const refreshToken = async () => {
      const { data } = await handleRefreshToken(setToken);
      return data;
    };

    const initializeToken = async () => {
      storedToken
        ? setToken(storedToken)
        : async () => {
            const newToken = await refreshToken();
            newToken ? setToken(newToken) : setToken(null);
          };
    };

    initializeToken();
  }, []);

  useEffect(() => {
    const cleanupInterceptor = setupAxiosInterceptor(setToken);

    return () => {
      cleanupInterceptor();
    };
  }, [setToken]);

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context)
    throw new Error("useAuth must be used within AuthContextProvider");
  return context;
};

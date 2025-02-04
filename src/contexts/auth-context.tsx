import { setupAxiosInterceptor } from "@/functions/axios-interceptor";
import { handleRefreshToken } from "@/functions/handle-refresh-token";
import Cookies from "js-cookie";
import { createContext, useContext, useEffect, useState } from "react";

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
    const storedToken = Cookies.get("orgToken");

    if (storedToken) {
      setToken(storedToken);
      setupAxiosInterceptor(setToken, storedToken);
    } else {
      const getRefreshToken = async () => {
        const { token } = await handleRefreshToken(setToken);
        if (token) {
          setupAxiosInterceptor(setToken, token);
        } else return;
      };
      getRefreshToken();
    }
  }, []);

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

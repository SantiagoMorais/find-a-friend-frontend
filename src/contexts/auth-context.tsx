import { setupAxiosInterceptor } from "@/functions/axios-interceptor";
import { handleRefreshToken } from "@/functions/handle-refresh-token";
import { verifyTokenValidity } from "@/functions/verify-token-validity";
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
    const storedToken = localStorage.getItem("org-token");

    const checkToken = async () => verifyTokenValidity(storedToken, setToken);
    const refreshToken = async () => {
      await handleRefreshToken(setToken);
    };

    if (storedToken) {
      checkToken().then((isValid) => {
        if (!isValid) refreshToken();
      });
    } else {
      refreshToken();
    }
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

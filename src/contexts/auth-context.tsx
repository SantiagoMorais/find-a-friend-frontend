import { handleRefreshToken } from "@/utils/handle-refresh-token";
import { routes } from "@/utils/routes";
import { createContext, useContext, useLayoutEffect, useState } from "react";

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

  useLayoutEffect(() => {
    const storedToken = localStorage.getItem("org-token");

    if (storedToken) {
      setToken(storedToken);
      return;
    }

    try {
      const refreshToken = async () => {
        await handleRefreshToken();
      };

      refreshToken();
    } catch (error) {
      console.log("Error to renovate token:", error);
      setToken(null);
      localStorage.removeItem("org-token");
      window.location.href = routes.signIn;
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

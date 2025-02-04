import { setupAxiosInterceptor } from "@/functions/axios-interceptor";
import { handleRefreshToken } from "@/functions/handle-refresh-token";
import Cookies from "js-cookie";
import {
  createContext,
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";

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
    } else {
      const getRefreshToken = async () => {
        try {
          const { token } = await handleRefreshToken(setToken);
          setToken(token);
        } catch {
          setToken(null);
        }
      };
      getRefreshToken();
    }
  }, []);

  useLayoutEffect(() => {
    if (token) setupAxiosInterceptor(setToken, token);
  }, [token]);

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

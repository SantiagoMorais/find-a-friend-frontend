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
  const [token, setToken] = useState<string | null>(() => {
    return localStorage.getItem("find-a-friend-token");
  });

  useEffect(() => {
    if (token) {
      localStorage.setItem("find-a-friend-token", token);
    } else {
      localStorage.removeItem("find-a-friend-token");
    }
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

import { createContext, useState } from "react";

type TAuthentication = {
  authenticated: boolean;
  token: string | null;
};

type TAuthContext = {
  authentication: TAuthentication;
  setAuthentication: React.Dispatch<React.SetStateAction<TAuthentication>>;
};

const AuthContext = createContext<TAuthContext>({
  authentication: { authenticated: false, token: null },
  setAuthentication: () => {},
});

export const AuthProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const [authentication, setAuthentication] = useState<TAuthentication>({
    authenticated: false,
    token: null,
  });

  return (
    <AuthContext.Provider value={{ authentication, setAuthentication }}>
      {children}
    </AuthContext.Provider>
  );
};

import { useAuth } from "@/contexts/auth-context";
import { routes } from "@/utils/routes";
import { useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

// Call this hook inside of components responsible for secure routes
export const useAuthGuard = () => {
  const { token } = useAuth();
  const navigate = useNavigate();
  const cookiesToken = Cookies.get("orgToken");

  useLayoutEffect(() => {
    if (token === undefined) return;
    if (!token && cookiesToken === undefined)
      navigate(routes.signIn, { replace: true });
  }, [token, navigate]);
};

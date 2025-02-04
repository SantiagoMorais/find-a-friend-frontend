import { useAuth } from "@/contexts/auth-context";
import { routes } from "@/utils/routes";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Call this hook inside of components responsible for secure routes
export const useAuthGuard = () => {
  const { token } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (token === undefined) return;
    if (!token) navigate(routes.signIn, { replace: true });
  }, [token, navigate]);
};

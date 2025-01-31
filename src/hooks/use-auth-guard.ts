import { useAuth } from "@/contexts/auth-context";
import { useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";

// Call this hook inside of components responsible for secure routes
export const useAuthGuard = () => {
  const { token } = useAuth();
  const navigate = useNavigate();

  useLayoutEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);
};

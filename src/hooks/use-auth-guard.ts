import { useAuth } from "@/contexts/auth-context";
import { useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useAuthGuard = () => {
  const { token } = useAuth();
  const navigate = useNavigate();

  useLayoutEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);
};

import { useAuth } from "@/contexts/auth-context";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useAuthGuard = () => {
  const { token } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);
};

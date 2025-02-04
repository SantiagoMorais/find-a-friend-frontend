import { useAuth } from "@/contexts/auth-context";
import { handleLogout } from "@/functions/handle-log-out";
import { button } from "@/styles";
import { routes } from "@/utils/routes";
import { useNavigate } from "react-router-dom";

export const SignOutButton = () => {
  const { setToken } = useAuth();
  const route = useNavigate();

  const handleLogoutSession = async () => {
    await handleLogout(setToken);
    route(routes.home);
  };

  return (
    <div className="w-fit">
      <button
        className={button({ color: "primary" })}
        onClick={handleLogoutSession}
      >
        Sign Out
      </button>
    </div>
  );
};

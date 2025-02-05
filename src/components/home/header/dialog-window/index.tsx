import { useAuth } from "@/contexts/auth-context";
import { TDialogWindow } from "@/core/types/components/dialog-window";
import { handleLogout } from "@/functions/handle-log-out";
import { button } from "@/styles";
import { routes } from "@/utils/routes";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const DialogWindow = ({ openModal, setOpenModal }: TDialogWindow) => {
  const { setToken } = useAuth();
  const route = useNavigate();

  const handleLogoutSession = async () => {
    await handleLogout(setToken);
    setOpenModal(false);
    route(routes.home);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenModal(false);
    };

    if (openModal) {
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.removeEventListener("keydown", handleKeyDown);
    }

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [openModal]);

  return (
    <dialog open={openModal} className="top-0 bottom-0 mx-auto my-auto">
      <div
        onClick={() => setOpenModal(false)}
        className="fixed top-0 left-0 z-0 min-h-screen min-w-screen bg-black/60 backdrop-blur-xs"
      ></div>
      <div className="bg-tertiary-color ring-secondary-color relative z-10 flex flex-col items-center gap-4 rounded-lg p-5 ring-2 md:p-8">
        <h2 className="text-small-size md:text-base-size text-secondary-color w-full text-center">
          Are you sure that you want to logout?
        </h2>
        <div className="flex w-full flex-col gap-4 md:flex-row">
          <button
            onClick={handleLogoutSession}
            className={button({ color: "secondary", className: "py-2" })}
          >
            Yes! 👍
          </button>
          <button
            onClick={() => setOpenModal(false)}
            className={button({ color: "secondary", className: "py-2" })}
          >
            Cancel! 🙅‍♂️
          </button>
        </div>
      </div>
    </dialog>
  );
};

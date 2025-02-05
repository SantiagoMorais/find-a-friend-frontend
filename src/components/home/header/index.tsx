import { Logo } from "@/components/ui/logo";
import { useAuth } from "@/contexts/auth-context";
import { LoggedButtons } from "./logged-buttons";
import { NotLoggedButtons } from "./not-logged-buttons";
import { useState } from "react";
import { DialogWindow } from "./dialog-window";

export const Header = () => {
  const { token } = useAuth();
  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <header className="flex w-full max-w-screen-2xl flex-col items-center justify-center gap-4 p-5 md:flex-row md:justify-between md:px-10 md:py-8">
      <Logo />
      <nav className="flex flex-col items-center">
        {!token ? (
          <LoggedButtons />
        ) : (
          <NotLoggedButtons openModal={openModal} setOpenModal={setOpenModal} />
        )}
      </nav>
      <DialogWindow openModal={openModal} setOpenModal={setOpenModal} />
    </header>
  );
};

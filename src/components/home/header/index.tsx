import { Logo } from "@/components/ui/logo";
import { useAuth } from "@/contexts/auth-context";
import { button } from "@/styles";
import { routes } from "@/utils/routes";
import { Link } from "react-router-dom";

export const Header = () => {
  const { token } = useAuth();

  return (
    <header className="flex w-full max-w-screen-2xl flex-col items-center justify-center gap-4 p-5 md:flex-row md:justify-between md:px-10 md:py-8">
      <Logo />
      {!token && (
        <nav className="flex flex-col items-center">
          <h2 className="md:text-small-size font-bold">For Organizations:</h2>
          <div className="flex justify-between gap-2">
            <Link to={routes.signIn} className={button({ color: "primary" })}>
              Sign In
            </Link>
            <button className={button({ color: "primary" })}>Sign Up</button>
          </div>
        </nav>
      )}
    </header>
  );
};

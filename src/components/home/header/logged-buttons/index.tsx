import { button } from "@/styles";
import { routes } from "@/utils/routes";
import { Link } from "react-router-dom";

export const LoggedButtons = () => (
  <>
    <h2 className="md:text-small-size font-bold">For Organizations:</h2>
    <div className="flex justify-between gap-2">
      <Link to={routes.signIn} className={button({ color: "primary" })}>
        Sign In
      </Link>
      <Link to={routes.signUp} className={button({ color: "primary" })}>
        Sign Up
      </Link>
    </div>
  </>
);

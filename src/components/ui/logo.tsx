import logo from "@/assets/imgs/logo.png";
import { routes } from "@/utils/routes";
import { Link } from "react-router-dom";

export const Logo = () => (
  <Link
    to={routes.home}
    className="text-base-color hover:drop-shadow-white flex items-center gap-2 drop-shadow-sm duration-300 hover:scale-110"
  >
    <img
      src={logo}
      alt="Logo"
      className="size-10 brightness-0 invert duration-300 md:size-16"
    />
    <h1 className="text-small-size font-bold md:text-base-size">FindAFriend</h1>
  </Link>
);

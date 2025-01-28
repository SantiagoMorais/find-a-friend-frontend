import logo from "@/assets/imgs/logo.png";
import { Link } from "react-router-dom";

export const Logo = () => (
  <Link
    to={"/"}
    className="drop-shadow-sm text-base-color flex items-center gap-2 duration-300 hover:scale-110 hover:drop-shadow-white"
  >
    <img src={logo} alt="Logo" className="size-10 brightness-0 invert duration-300" />
    <h1 className="text-small-size font-bold">FindAFriend</h1>
  </Link>
);

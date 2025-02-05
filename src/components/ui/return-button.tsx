import { routes } from "@/utils/routes";
import { faRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export const ReturnButton = () => (
  <Link
    to={routes.home}
    className="text-primary-color text-small-size group absolute top-5 right-10 flex cursor-pointer items-center gap-2 font-bold opacity-60 duration-500 hover:scale-110 hover:opacity-100"
  >
    <FontAwesomeIcon
      className="duration-500 group-hover:-rotate-[360deg]"
      icon={faRotateLeft}
    />{" "}
    Return
  </Link>
);

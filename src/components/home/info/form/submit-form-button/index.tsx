import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SubmitFormButton = () => (
  <button
    className="bg-tertiary-color group min-w-12 hover:ring-tertiary-color hover:bg-secondary-color flex h-12 cursor-pointer items-center justify-center rounded-lg duration-300 hover:ring md:hover:ring-2"
    type="submit"
  >
    <FontAwesomeIcon
      icon={faMagnifyingGlass}
      className="text-secondary-color group-hover:text-tertiary-color duration-300 group-hover:scale-125 group-hover:drop-shadow-lg"
    />
  </button>
);

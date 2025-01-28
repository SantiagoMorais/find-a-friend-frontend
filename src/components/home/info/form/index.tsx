import { StatesSelect } from "./states-select";

export const Form = () => (
  <form className="flex flex-col gap-2">
    <p className="text-extra-small-size">Search a friend:</p>
    <StatesSelect />
  </form>
);

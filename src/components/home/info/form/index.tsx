import { useState } from "react";
import { CitiesSelect } from "./cities-select";
import { StatesSelect } from "./states-select";

export const Form = () => {
  const [selectedState, setSelectedState] = useState<number | undefined>(12); // 12 = Acre's pip

  return (
    <form className="flex flex-col gap-2 w-full">
      <p className="text-extra-small-size">Search a friend:</p>
      <label className="flex gap-2 w-full">
        <StatesSelect setSelectedState={setSelectedState} />
        <CitiesSelect selectedState={selectedState} />
      </label>
    </form>
  );
};

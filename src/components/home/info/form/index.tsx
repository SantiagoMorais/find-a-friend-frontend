import { useState } from "react";
import { CitiesSelect } from "./cities-select";
import { StatesSelect } from "./states-select";
import { SubmitFormButton } from "./submit-form-button";

export const Form = () => {
  const [selectedState, setSelectedState] = useState<number | undefined>(12); // 12 = Acre's pip

  return (
    <form className="flex w-full flex-col gap-2 md:w-fit">
      <p className="text-extra-small-size md:text-small-size block md:text-nowrap">
        Search a friend:
      </p>
      <div className="flex flex-col gap-2 md:flex-row">
        <label className="flex w-full flex-wrap gap-2">
          <StatesSelect setSelectedState={setSelectedState} />
          <CitiesSelect selectedState={selectedState} />
        </label>
        <SubmitFormButton />
      </div>
    </form>
  );
};

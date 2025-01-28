import { useState } from "react";
import { CitiesSelect } from "./cities-select";
import { StatesSelect } from "./states-select";
import { SubmitFormButton } from "./submit-form-button";

export const Form = () => {
  const [selectedState, setSelectedState] = useState<number | undefined>(12); // 12 = Acre's pip

  return (
    <form className="flex w-full flex-col gap-2 md:w-fit md:flex-row md:items-center">
      <p className="text-extra-small-size md:text-small-size md:text-nowrap">
        Search a friend:
      </p>
      <label className="flex w-full gap-2">
        <StatesSelect setSelectedState={setSelectedState} />
        <CitiesSelect selectedState={selectedState} />
      </label>
      <SubmitFormButton />
    </form>
  );
};

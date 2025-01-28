export const CitiesWarning = ({ message }: { message: string }) => (
  <select
    id="cities"
    name="cities"
    className="bg-primary-color-dark flex h-12 w-full max-w-full flex-1 items-center justify-center rounded-xl"
  >
    <option value="warning" className="bg-primary-color-dark text-center">
      {message}
    </option>
  </select>
);

export const StatesWarning = ({ message }: { message: string }) => (
  <select
    id="states"
    name="states"
    className="flex size-12 items-center justify-center rounded-xl border"
  >
    <option value="warning" className="bg-primary-color text-center">
      {message}
    </option>
  </select>
);

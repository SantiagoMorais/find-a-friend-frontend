import { searchStates } from "@/services/ibge-api/search-states";
import { useQuery } from "@tanstack/react-query";

export const StatesSelect = ({
  setSelectedState,
}: {
  setSelectedState: React.Dispatch<React.SetStateAction<number | undefined>>;
}) => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["states"],
    queryFn: searchStates,
    staleTime: 1000 * 60,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedId = data?.find(
      (state) => state.sigla === event.target.value
    )?.id;
    setSelectedState(selectedId);
  };

  return (
    <select
      id="states"
      name="states"
      className="flex size-12 items-center justify-center rounded-xl border"
      onChange={handleChange}
    >
      {data?.map((state) => (
        <option
          key={state.id}
          value={state.sigla}
          className="bg-primary-color text-center"
        >
          {state.sigla}
        </option>
      ))}
    </select>
  );
};

import { searchStates } from "@/services/ibge-api/search-states";
import { useQuery } from "@tanstack/react-query";

export const StatesSelect = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["states"],
    queryFn: searchStates,
  });

  const renderContent = () => {
    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error</p>;
    return (
      <select
        id="states"
        name="states"
        className="flex size-12 items-center justify-center rounded-xl border"
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

  return renderContent();
};

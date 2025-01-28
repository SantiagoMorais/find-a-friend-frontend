import { searchCities } from "@/services/ibge-api/search-cities";
import { useQuery } from "@tanstack/react-query";
import { CitiesWarning } from "./cities-warning";

export const CitiesSelect = ({
  selectedState,
}: {
  selectedState: number | undefined;
}) => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["states", selectedState],
    queryFn: () => searchCities(selectedState ? selectedState : 12),
    enabled: !!selectedState,
    staleTime: 1000 * 60,
  });

  if (isLoading) return <CitiesWarning message="⌛ Loading..."/>;
  if (error) return <CitiesWarning message="❌ Error: Try later"/>;

  return (
    <select
      id="cities"
      name="cities"
      className="bg-primary-color-dark flex h-12 w-full max-w-full flex-1 items-center justify-center rounded-xl"
    >
      {data?.map((city) => (
        <option
          key={city.id}
          value={city.nome}
          className="bg-primary-color-dark text-center"
        >
          {city.municipio.nome}
        </option>
      ))}
    </select>
  );
};

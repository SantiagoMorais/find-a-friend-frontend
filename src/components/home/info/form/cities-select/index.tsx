import { searchCities } from "@/services/ibge-api/search-cities";
import { useQuery } from "@tanstack/react-query";

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

  console.log(data);

  const renderContent = () => {
    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error</p>;
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

  return renderContent();
};

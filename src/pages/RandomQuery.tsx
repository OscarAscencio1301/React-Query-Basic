import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const getNumber = async () => {
  const { data } = await axios.get(
    "https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new"
  );
  return data;
};

const RandomQuery = () => {
  const { data, refetch, isFetching } = useQuery({
    queryKey: ["number"],
    queryFn: getNumber,
  });

  return (
    <div className="h-screen flex flex-col gap-3 justify-center items-center bg-gray-100/90">
      <h3 className="text-xl">Query</h3>
      {isFetching ? (
        <h2>Cargando...</h2>
      ) : (
        <h2 className="text-2xl font-medium">Numero Aleatorio: {data}</h2>
      )}
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg disabled:bg-black"
        onClick={() => refetch()}
        disabled={isFetching}
      >
        Nuevo Número
      </button>
    </div>
  );
};

export default RandomQuery;

import axios from "axios";
import { useEffect, useState } from "react";

const getNumber = async () => {
  const { data } = await axios.get(
    "https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new"
  );
  return data;
};

const Random = () => {
  const [number, setnumber] = useState<number>();
  const [loading, setloading] = useState<boolean>(true);
  const [changeNumber, setchangeNumber] = useState<boolean>(false);

  useEffect(() => {
    setloading(true);
    getNumber().then((n) => setnumber(n));
  }, [changeNumber]);

  useEffect(() => {
    if (number) setloading(false);
  }, [number]);

  return (
    <div className="h-screen flex flex-col gap-3 justify-center items-center bg-gray-200/90">
      <h3 className="text-xl">Tradicional</h3>
      {loading ? (
        <h2>Cargando...</h2>
      ) : (
        <h2 className="text-2xl font-medium">Numero Aleatorio: {number}</h2>
      )}
      <button
        disabled={loading}
        className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg disabled:bg-black"
        onClick={() => setchangeNumber(!changeNumber)}
      >
        Nuevo Número
      </button>
    </div>
  );
};

export default Random;

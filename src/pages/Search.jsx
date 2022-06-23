import { useState } from "react";
import ResultadosBusquedad from "../components/ResultadosBusquedad";
import Spiner from "../components/Spiner";

function Search() {
  const [clientes, setClientes] = useState([]);
  const [spiner, setSpiner] = useState(false);
  const [busquedad, setBusquedad] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (busquedad != "" && busquedad.trim() != "") {
      const url = `http://localhost:4000/clientes?q=${busquedad}`;
      try {
        setSpiner(true);
        const respuesta = await fetch(url);
        const resultados = await respuesta.json();
        setClientes(resultados);
        setSpiner(false);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div className="contenedor">
      <h1 className="text-white uppercase font-bold text-2xl">
        Busca tus <span className="text-purple-500">clientes</span>
      </h1>
      <p>Comienza buscando tus clientes</p>
      <form
        className="w-full mt-5 flex gap-1"
        onSubmit={(e) => handleSubmit(e)}
      >
        <input
          type="search"
          required
          value={busquedad}
          className="w-full bg-white rounded-md p-2 focus-visible:outline-none text-zinc-800"
          onInput={(e) => setBusquedad(e.target.value)}
          placeholder="Intenta buscando por nombre, correo y empresa"
        />
        <input
          type="submit"
          className="bg-purple-600 w-36  hover:bg-purple-700 rounded-md cursor-pointer px-4 py-2 text-center text-white font-semibold"
          value="Buscar"
        />
      </form>

      <div className="mt-10">
        {spiner ? <Spiner /> : <ResultadosBusquedad clientes={clientes} />}
      </div>
    </div>
  );
}

export default Search;

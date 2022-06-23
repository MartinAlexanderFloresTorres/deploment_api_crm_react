import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Spiner from "../components/Spiner";

function VerCliente() {
  const [cliente, setCliente] = useState({});
  const [spiner, setSpiner] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const consultarApi = async () => {
      const url = `${import.meta.env.VITE_API_URL}/${id}`;
      try {
        setSpiner(true);
        const respuesta = await fetch(url);
        const resultados = await respuesta.json();
        setCliente(resultados);
        setSpiner(false);
      } catch (error) {
        console.error(error);
      }
    };
    consultarApi();
  }, []);

  return (
    <div className="contenedor bg-zinc-900 p-10 rounded shadow overflow-auto">
      {spiner ? (
        <Spiner />
      ) : Object.keys(cliente).length === 0 ? (
        <h2>No se encontro el cliente</h2>
      ) : (
        <>
          <h1 className="text-2xl  text-violet-600 font-bold uppercase mb-8 text-center">
            Cliente:{" "}
            <span className="normal-case text-zinc-200">{cliente.nombre}</span>
          </h1>
          <div>
            <h2 className="text-xl mb-3">
              <span className="text-white font-bold uppercase">Nombre: </span>{" "}
              <span className="text-zinc-100 text-lg">{cliente.nombre}</span>
            </h2>
            <h2 className="text-xl  mb-3">
              <span className="text-white font-bold uppercase">Email: </span>{" "}
              <span className="text-zinc-100 text-lg">{cliente.email}</span>
            </h2>
            <h2 className="text-xl  mb-3">
              <span className="text-white font-bold uppercase">Empresa: </span>{" "}
              <span className="text-zinc-100 text-lg">{cliente.empresa}</span>
            </h2>
            {cliente.empresa && (
              <h2 className="text-xl  mb-3">
                <span className="text-white font-bold uppercase">
                  Telefono:{" "}
                </span>{" "}
                <span className="text-zinc-100 text-lg">
                  {cliente.telefono}
                </span>
              </h2>
            )}
            {cliente.notas && (
              <h2 className="text-xl ">
                <span className="text-white font-bold uppercase">Notas: </span>{" "}
                <span className="text-zinc-100 text-lg">{cliente.notas}</span>
              </h2>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default VerCliente;

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Formulario from "../components/Formulario";
import Spiner from "../components/Spiner";

function EditarCliente() {
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
    <div className="contenedor-3">
      <h1 className=" text-white uppercase font-bold text-2xl">
        Editar <span className="text-purple-500">Cliente</span>
      </h1>
      <p>Utiliza este formulario para editar datos de un cliente</p>
      {spiner ? (
        <Spiner />
      ) : Object.keys(cliente).length === 0 ? (
        <h2 className="bg-zinc-900 p-10 mt-10">No se encontro el cliente</h2>
      ) : (
        <Formulario cliente={cliente} />
      )}
    </div>
  );
}

export default EditarCliente;

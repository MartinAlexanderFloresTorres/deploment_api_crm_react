import { useState, useEffect } from "react";
import Cliente from "../components/Cliente";
import Confirmar from "../components/Confirmar";
import Spiner from "../components/Spiner";

function MostrarClientes() {
  const [eliminar, setEliminar] = useState(0);
  const [clientes, setClientes] = useState([]);
  const [spiner, setSpiner] = useState(false);

  useEffect(() => {
    const consultarApi = async () => {
      const url = "http://localhost:4000/clientes";
      try {
        setSpiner(true);
        const respuesta = await fetch(url);
        const resultados = await respuesta.json();
        setClientes(resultados);
        setSpiner(false);
      } catch (error) {
        console.error(error);
      }
    };
    consultarApi();
  }, []);

  return (
    <div className="contenedor">
      <h1 className="text-white uppercase font-bold text-2xl">
        Administra tus 
        <span className="text-purple-500"> clientes</span>
      </h1>
      <p>Comienza Administrando tus clientes</p>

      {spiner ? (
        <Spiner />
      ) : (
       <section className="overflow-auto">
         <table className="w-full mt-5 table-auto shadow bg-zinc-900">
          <thead className="bg-purple-600 text-center text-white">
            <tr>
              <th className="p-2">Nombre</th>
              <th className="p-2">Contacto</th>
              <th className="p-2">Empresa</th>
              <th className="p-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {clientes.map((cliente) => (
              <Cliente
                key={cliente.id}
                cliente={cliente}
                setEliminar={setEliminar}
              />
            ))}
          </tbody>
        </table>
       </section>
      )}

      {eliminar > 0 && (
        <Confirmar
          eliminar={eliminar}
          setEliminar={setEliminar}
          clientes={clientes}
          setClientes={setClientes}
        />
      )}
    </div>
  );
}

export default MostrarClientes;

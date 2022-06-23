function Confirmar({ eliminar, setEliminar, clientes, setClientes }) {
  const handleEliminar = async () => {
    const url = `${import.meta.env.VITE_API_URL}/${eliminar}`;
    try {
      await fetch(url, {
        method: "DELETE",
      });
      const clientesActualizados = clientes.filter(
        (cliente) => cliente.id !== eliminar
      );
      setClientes(clientesActualizados);
      setEliminar(0);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section
      className="confirmar"
      onClick={(e) =>
        e.target.classList.contains("confirmar") && setEliminar(0)
      }
    >
      <div className="confirmar__item bg-white rounded-md">
        <h2 className="text-black font-bold mb-2">¿Desea eliminar?</h2>
        <div>
          <button
            className="bg-blue-600 hover:bg-blue-700 w-full md:w-32 m-1 transition-all py-1 px-2 rounded text-white font-semibold text-sm"
            type="button"
            onClick={() => setEliminar(0)}
          >
            Cancelar
          </button>
          <button
            className="bg-red-600 hover:bg-red-700 w-full md:w-32 m-1 transition-all py-1 px-2 rounded text-white font-semibold text-sm"
            type="button"
            onClick={() => handleEliminar()}
          >
            Eliminar
          </button>
        </div>
      </div>
    </section>
  );
}

export default Confirmar;

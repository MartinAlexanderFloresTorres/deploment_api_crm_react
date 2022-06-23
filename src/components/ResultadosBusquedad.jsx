import ClienteSearch from "./ClienteSearch";
function ResultadosBusquedad({ clientes }) {
  return (
    <div>
      {clientes.length <= 0 ? (
        <h2 className="contenedor mb-4 bg-zinc-900 p-5 text-sm rounded shadow overflow-auto">
          No hay resultados que mostrar.
        </h2>
      ) : (
        clientes.map((cliente) => (
          <ClienteSearch key={cliente.id} cliente={cliente} />
        ))
      )}
    </div>
  );
}

export default ResultadosBusquedad;

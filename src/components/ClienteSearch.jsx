import { useNavigate } from "react-router-dom";

function ClienteSearch({ cliente }) {
  const { nombre, email, empresa, id } = cliente;
  const navigate = useNavigate();

  return (
    <div className="contenedor mb-4 bg-zinc-900 p-10 rounded shadow overflow-auto">
      <h1 className="text-2xl  text-violet-600 font-bold uppercase mb-8 text-center">
        Cliente: <span className="normal-case text-zinc-200">{nombre}</span>
      </h1>
      <div>
        <h2 className="text-xl mb-3 text-left">
          <span className="text-white font-bold uppercase">Nombre: </span>{" "}
          <span className="text-zinc-100 text-lg">{nombre}</span>
        </h2>
        <h2 className="text-xl  mb-3 text-left">
          <span className="text-white font-bold uppercase">Email: </span>{" "}
          <span className="text-zinc-100 text-lg">{email}</span>
        </h2>
        <h2 className="text-xl  mb-3 text-left">
          <span className="text-white font-bold uppercase">Empresa: </span>{" "}
          <span className="text-zinc-100 text-lg">{empresa}</span>
        </h2>
        <button
          type="button"
          className="bg-blue-600 hover:bg-blue-500 transition-all md:w-auto w-full block rounded text-white p-3 uppercase font-bold text-xs mb-2"
          onClick={() => navigate(`/clientes/${id}`)}
        >
          Ver cliente
        </button>
      </div>
    </div>
  );
}

export default ClienteSearch;

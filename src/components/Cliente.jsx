import {useNavigate} from "react-router-dom";

function Cliente({ cliente, setEliminar }) {
  const { nombre, empresa, email, telefono, id } = cliente;

  const navigate = useNavigate()

  return (
    <tr className="border-b border-slate-800 hover:bg-zinc-800 transition-all text-center">
      <td className="p-2">{nombre}</td>
      <td className="p-2">
        <p className="font-bold">
          <span className="text-white uppercase">Email: </span>
          {email}
        </p>
        <p className="font-bold">
          <span className="text-white uppercase">Tel: </span>
          {telefono}
        </p>
      </td>
      <td className="p-2">{empresa}</td>
      <td className="p-2">
        <button
          type="button"
          className="bg-purple-600 hover:bg-purple-500 transition-all w-full block rounded text-white p-1 uppercase font-bold text-xs mb-2"
          onClick={() => navigate(`/clientes/${id}`)}
        >
          Ver
        </button>
        <button
          type="button"
          className="bg-green-600 hover:bg-green-500 transition-all w-full block rounded text-white p-1 uppercase font-bold text-xs mb-2"
          onClick={() => navigate(`/clientes/editar/${id}`)}
        >
          Editar
        </button>
        <button
          type="button"
          className="bg-red-600 hover:bg-red-500 transition-all w-full block rounded text-white p-1 uppercase font-bold text-xs mb-2"
          onClick={() => {setEliminar(id)}}
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
}

export default Cliente;

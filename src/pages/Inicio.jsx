import Header from "../components/Header";
import { Link } from "react-router-dom";
function Inicio() {
  return (
    <>
      <Header />
      <main className="contenedor">
        <div className="text-center md:mt-40 mt-10 md:w-3/4 w-full mx-auto p-5">
          <h1 className="text-white md:text-5xl text-3xl font-bold uppercase">
            Administrador de clientes
          </h1>
          <p className="mt-10 text-2xl">
            Comienza a administrar tus pacientes ahora mismo, las tecnologias
            utilizadas son las siguientes:
            <span className="text-purple-500 font-bold"> React</span>,
            <span className="text-blue-500 font-bold"> React-router-dom</span>,
            <span className="text-violet-600 font-bold"> json-server</span>,
            <span className="text-red-500 font-bold"> Tailwindcss</span>,
            <span className="text-yellow-500 font-bold"> Javascript</span>,
            <span className="text-lime-500 font-bold"> Rest-Api</span> y mas.
          </p>
          <Link
            className="mt-10 mb-4 md:mb-0 md:mr-6 inline-flex items-center justify-center font-bold no-underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent transition-colors duration-200 px-5 py-3 lg:px-6 bg-blue-500 hover:bg-blue-600 border-2 border-blue-500 hover:border-blue-700 focus:ring-blue-500 focus:ring-opacity-60 text-white hover:text-white text-xl rounded"
            to="/clientes/nuevo"
          >
            Comienza ahora mismo
          </Link>
        </div>
      </main>
    </>
  );
}

export default Inicio;

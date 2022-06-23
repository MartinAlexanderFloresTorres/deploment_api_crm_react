import React from "react";
import Formulario from "../components/Formulario";
function NuevoCliente() {
  return (
    <div className="contenedor-3">
      <h1 className=" text-white uppercase font-bold text-2xl">
        Nuevo <span className="text-purple-500">Cliente</span>
      </h1>
      <p>Llena los siguientes campos para registrar un cliente</p>

      <Formulario />
    </div>
  );
}

export default NuevoCliente;

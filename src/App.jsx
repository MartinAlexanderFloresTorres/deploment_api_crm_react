import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import NuevoCliente from "./pages/NuevoCliente";
import EditarCliente from "./pages/EditarCliente";
import Layout from "./layout/Layout";
import MostrarClientes from "./pages/MostrarClientes";
import NotFound from "./pages/NotFound";
import VerCliente from "./pages/VerCliente";
import Search from "./pages/Search";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />

        <Route path="/clientes" element={<Layout />}>
          <Route index element={<MostrarClientes />} />
          <Route path="nuevo" element={<NuevoCliente />} />
          <Route path="editar/:id" element={<EditarCliente />} />
          <Route path=":id" element={<VerCliente />} />
          <Route path="search" element={<Search />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

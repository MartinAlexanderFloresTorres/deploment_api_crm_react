import { Outlet } from "react-router-dom";
import Header from "../components/Header";

function Layout() {
  return (
    <>
      <Header />
      <main className="main">
        <Outlet />
      </main>
    </>
  );
}

export default Layout;

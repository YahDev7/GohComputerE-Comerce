import AdminSidebar from "../sidebar";
import Movimientos from "./movimientos";


const MovimientoAdmin = () => {
  return (
    <div className="flex h-[100vh]">
    <AdminSidebar></AdminSidebar>
  
      <Movimientos/>
      </div>
  );
}

export default MovimientoAdmin;
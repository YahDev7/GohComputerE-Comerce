import { TokenAdminProvider } from "../../../context/tokenAdmin";
import AdminSidebar from "../sidebar";
import Movimientos from "./movimientos";


const MovimientoAdmin = () => {
  return (
    <TokenAdminProvider>
       <div className="flex h-[100vh]">

      <AdminSidebar></AdminSidebar>
      <Movimientos/>
    </div>
    </TokenAdminProvider>
  );
}

export default MovimientoAdmin;
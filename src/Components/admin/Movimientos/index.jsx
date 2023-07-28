import { TokenAdminProvider } from "../../../context/tokenAdmin";
import AdminSidebar from "../sidebar";
import Movimientos from "./movimientos";


const MovimientoAdmin = () => {
  return (
    <TokenAdminProvider>
    <div className="flex">
      <AdminSidebar></AdminSidebar>
      <Movimientos/>
    </div>
    </TokenAdminProvider>
  );
}

export default MovimientoAdmin;
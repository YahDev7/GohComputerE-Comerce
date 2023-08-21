import AdminSidebar from "../sidebar";
import { TokenAdminProvider } from "../../../context/tokenAdmin";
import Promociones from "./Promociones";

const PromocionesAdmin = () => {
  return (
    <TokenAdminProvider>
      
    <div className="flex">
      <AdminSidebar></AdminSidebar>
      <Promociones></Promociones>
    </div>
    </TokenAdminProvider>
  );
}

export default PromocionesAdmin;
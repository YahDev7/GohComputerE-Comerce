import AdminSidebar from "../sidebar";
import { TokenAdminProvider } from "../../../context/tokenAdmin";
import Promociones from "./Promociones";
import ModalPromociones from "./Modal";

const PromocionesAdmin = () => {
  return (
    <TokenAdminProvider>
      
    <div className="flex">
      <AdminSidebar></AdminSidebar>
      <ModalPromociones ></ModalPromociones>

     {/*  <Promociones></Promociones> */}
    </div>
    </TokenAdminProvider>
  );
}

export default PromocionesAdmin;
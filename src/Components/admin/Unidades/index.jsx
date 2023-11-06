import AdminSidebar from "../sidebar";
import { TokenAdminProvider } from "../../../context/tokenAdmin";
import Unidad from "./Unidades";

const UnidadAdmin = () => {
  return (
    <TokenAdminProvider>
      <div className="flex h-[100vh]">

      <AdminSidebar></AdminSidebar>
      <Unidad></Unidad>
    </div>
    </TokenAdminProvider>
  );
}

export default UnidadAdmin;
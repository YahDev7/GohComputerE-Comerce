import AdminSidebar from "../sidebar";
import { TokenAdminProvider } from "../../../context/tokenAdmin";
import Categoria from "./Categoria";

const CategoriaAdmin = () => {
  return (
    <TokenAdminProvider>
    <div className="flex">
      <AdminSidebar></AdminSidebar>
      <Categoria></Categoria>
    </div>
    </TokenAdminProvider>
  );
}

export default CategoriaAdmin;
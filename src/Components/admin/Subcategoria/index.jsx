import { TokenAdminProvider } from "../../../context/tokenAdmin";
import AdminSidebar from "../sidebar";
import Subcategoria from "./Subcategoria";

const SubCategoriaAdmin = () => {
  return (
    <TokenAdminProvider>
    <div className="flex">
      <AdminSidebar></AdminSidebar>
      <Subcategoria/>
    </div>
    </TokenAdminProvider>
  );
}

export default SubCategoriaAdmin;
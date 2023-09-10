import AdminSidebar from "../sidebar";
import { TokenAdminProvider } from "../../../context/tokenAdmin";
import Categoria from "./Categoria";
import ModalCategoria from "./Modal";

const CategoriaAdmin = () => {
  return (
    <TokenAdminProvider>
    <div className="flex">
      <AdminSidebar></AdminSidebar>
      <ModalCategoria></ModalCategoria>
   
    </div>
    </TokenAdminProvider>
  );
}

export default CategoriaAdmin;
import { TokenAdminProvider } from "../../../context/tokenAdmin";
import AdminSidebar from "../sidebar";
import ModalSubCategoria from "./Modal";
import Subcategoria from "./Subcategoria";

const SubCategoriaAdmin = () => {
  return (
    <TokenAdminProvider>
       <div className="flex h-[100vh]">

      <AdminSidebar></AdminSidebar>
      <ModalSubCategoria></ModalSubCategoria>
     {/*  <Subcategoria/> */}
    </div>
    </TokenAdminProvider>
  );
}

export default SubCategoriaAdmin;
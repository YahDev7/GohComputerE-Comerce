import AdminSidebar from "../sidebar";
import ModalSubCategoria from "./Modal";

const SubCategoriaAdmin = () => {
  return (
    <div className="flex h-[100vh]">
    <AdminSidebar></AdminSidebar>
      
      <ModalSubCategoria></ModalSubCategoria>
      </div>
  );
}

export default SubCategoriaAdmin;
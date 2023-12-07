
import AdminSidebar from "../sidebar";
import ModalCategoria from "./Categoria";

const CategoriaAdmin = () => {
  return (
    <div className="flex h-[100vh]">
    <AdminSidebar></AdminSidebar>
    <ModalCategoria></ModalCategoria>
 
  </div>
   
  );
}

export default CategoriaAdmin;
import AdminSidebar from "../sidebar";
import SubCategoria from "./Subcategoria";

const SubCategoriaAdmin = () => {
  return (
    <div className="flex h-[100vh]">
    <AdminSidebar></AdminSidebar>
      <SubCategoria></SubCategoria>
      </div>
  );
}

export default SubCategoriaAdmin;
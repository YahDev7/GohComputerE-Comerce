import AdminSidebar from "../sidebar";
import Unidad from "./Unidades";

const UnidadAdmin = () => {
  return (
    <div className="flex h-[100vh]">
    <AdminSidebar></AdminSidebar>
      <Unidad></Unidad>
      </div>
  );
}

export default UnidadAdmin;
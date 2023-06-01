import Productos from "./products";
import AdminSidebar from "../sidebar";

const ProductosAdmin = () => {
  return (
    <div className="flex">
      <AdminSidebar></AdminSidebar>
      <Productos></Productos>
    </div>
  );
}

export default ProductosAdmin;
import AdminSidebar from "../sidebar";
import ModalProduct from "./Modal";

const ProductosAdmin = () => {
  return (
    <div className="flex h-[100vh]">
    <AdminSidebar></AdminSidebar>
    
      <ModalProduct ></ModalProduct>
      </div>
      
      
  );
}

export default ProductosAdmin;
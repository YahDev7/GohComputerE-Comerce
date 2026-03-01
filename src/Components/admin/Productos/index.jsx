import AdminSidebar from "../sidebar";
import Product from "./product";

const ProductosAdmin = () => {
  return (
    <div className="flex h-[100vh]">
    <AdminSidebar></AdminSidebar>
    
      <Product ></Product>
      </div>
      
      
  );
}

export default ProductosAdmin;
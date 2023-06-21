import Productos from "./Products";
import AdminSidebar from "../sidebar";
import { TokenAdminProvider } from "../../../context/tokenAdmin";

const ProductosAdmin = () => {
  return (
    <TokenAdminProvider>
      
    <div className="flex">
      <AdminSidebar></AdminSidebar>
      <Productos></Productos>
    </div>
    </TokenAdminProvider>
  );
}

export default ProductosAdmin;
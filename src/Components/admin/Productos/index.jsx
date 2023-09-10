import Productos from "./Products";
import AdminSidebar from "../sidebar";
import { TokenAdminProvider } from "../../../context/tokenAdmin";
import ModalProduct from "./Modal";

const ProductosAdmin = () => {
  return (
    <TokenAdminProvider>
      
    <div className="flex">
      <AdminSidebar></AdminSidebar>
      
      <ModalProduct ></ModalProduct>
      
      {/* <Productos></Productos> */}
    </div>
    </TokenAdminProvider>
  );
}

export default ProductosAdmin;
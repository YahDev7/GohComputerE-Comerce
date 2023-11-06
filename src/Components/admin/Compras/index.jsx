import { TokenAdminProvider } from "../../../context/tokenAdmin";
import AdminSidebar from "../sidebar";
import Compra from "./Compra";


const CompraAdmin = () => {
  return (
    <TokenAdminProvider>
       <div className="flex h-[100vh]">

      <AdminSidebar></AdminSidebar>
      <Compra/>
    </div>
    </TokenAdminProvider>
  );
}

export default CompraAdmin;
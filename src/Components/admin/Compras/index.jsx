import AdminSidebar from "../sidebar";
import Compra from "./Compra";


const CompraAdmin = () => {
  return (
    <div className="flex h-[100vh]">
    <AdminSidebar></AdminSidebar>
      <Compra/>
    
      </div>
  );
}

export default CompraAdmin;

import AdminSidebar from "../sidebar";
import ComprobanteCliente from "./Comprobante_cliente";

const Comprobante_ClienteAdmin = () => {
  return (
    <div className="flex h-[100vh]">
    <AdminSidebar></AdminSidebar>
     <ComprobanteCliente></ComprobanteCliente> 
       </div>
   
  );
}

export default Comprobante_ClienteAdmin;
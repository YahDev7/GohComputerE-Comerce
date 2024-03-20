
import AdminSidebar from "../sidebar";
import GenerarGuia from "./Generara_Guia";

const GenerarGuiaAdmin = () => {
  return (
    <div className="flex h-[100vh]">
    <AdminSidebar></AdminSidebar>
    <GenerarGuia></GenerarGuia>
  </div>
   
  );
}

export default GenerarGuiaAdmin;
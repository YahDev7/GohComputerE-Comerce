import AdminSidebar from "../sidebar";
import Documento from "./documento";


const DocumentoAdmin = () => {
  return (
    <div className="flex h-[100vh]">
    <AdminSidebar></AdminSidebar>
   
      <Documento/>
      </div>
  );
}

export default DocumentoAdmin;
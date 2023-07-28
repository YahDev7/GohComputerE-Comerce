import { TokenAdminProvider } from "../../../context/tokenAdmin";
import AdminSidebar from "../sidebar";
import Documento from "./documento";


const DocumentoAdmin = () => {
  return (
    <TokenAdminProvider>
    <div className="flex">
      <AdminSidebar></AdminSidebar>
      <Documento/>
    </div>
    </TokenAdminProvider>
  );
}

export default DocumentoAdmin;
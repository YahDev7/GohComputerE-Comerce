import { TokenAdminProvider } from "../../../context/tokenAdmin";
import AdminSidebar from "../sidebar";
import ServicioAdmin from "./Servicio";

function ServiciosIndex() {
    return (
        <div className="flex h-[100vh]">

        <TokenAdminProvider>
            <AdminSidebar></AdminSidebar>
            <ServicioAdmin></ServicioAdmin>
        </TokenAdminProvider>

        </div>
    );
}

export default ServiciosIndex;
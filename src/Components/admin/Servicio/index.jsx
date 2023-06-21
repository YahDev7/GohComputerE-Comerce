import { TokenAdminProvider } from "../../../context/tokenAdmin";
import AdminSidebar from "../sidebar";
import ServicioAdmin from "./Servicio";

function ServiciosIndex() {
    return (
        <div className="flex ">
        <TokenAdminProvider>
            <AdminSidebar></AdminSidebar>
            <ServicioAdmin></ServicioAdmin>
        </TokenAdminProvider>

        </div>
    );
}

export default ServiciosIndex;
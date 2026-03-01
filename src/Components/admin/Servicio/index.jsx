import AdminSidebar from "../sidebar";
import ServicioAdmin from "./Servicio";

function ServiciosIndex() {
    return (
        
        <div className="flex h-[100vh]">
        <AdminSidebar></AdminSidebar>
            <ServicioAdmin></ServicioAdmin>
          </div>

    );
}

export default ServiciosIndex;
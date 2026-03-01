import AdminSidebar from "../sidebar";
import ModalPromociones from "./Modal";

const PromocionesAdmin = () => {
  return (
    <div className="flex h-[100vh]">
      <AdminSidebar></AdminSidebar>
      <ModalPromociones ></ModalPromociones>
    </div>

  );
}

export default PromocionesAdmin;
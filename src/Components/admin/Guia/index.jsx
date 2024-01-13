
import AdminSidebar from "../sidebar";
import Guia from "./Guia";

const GuiaAdmin = () => {
  return (
    <div className="flex h-[100vh]">
    <AdminSidebar></AdminSidebar>
    <Guia></Guia>
  </div>
   
  );
}

export default GuiaAdmin;
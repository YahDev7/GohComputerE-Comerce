import { TokenAdminProvider } from "../../../context/tokenAdmin";
import AdminSidebar from "../sidebar";
import Customer from "./customer";


const CustomerAdmin = () => {
  return (
    <TokenAdminProvider>
    <div className="flex">
      <AdminSidebar></AdminSidebar>
      <Customer/>
    </div>
    </TokenAdminProvider>
  );
}

export default CustomerAdmin;
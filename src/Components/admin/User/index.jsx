import { TokenAdminProvider } from "../../../context/tokenAdmin";
import AdminSidebar from "../sidebar";
import User from "./users";


const UserAdmin = () => {
  return (
    <TokenAdminProvider>
       <div className="flex h-[100vh]">

      <AdminSidebar></AdminSidebar>
      <User/>
    </div>
    </TokenAdminProvider>
  );
}

export default UserAdmin;
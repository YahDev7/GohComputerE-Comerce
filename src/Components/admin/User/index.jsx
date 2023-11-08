import AdminSidebar from "../sidebar";
import User from "./users";


const UserAdmin = () => {
  return (
    <div className="flex h-[100vh]">
    <AdminSidebar></AdminSidebar>
      <User/>
      
      </div>
  );
}

export default UserAdmin;
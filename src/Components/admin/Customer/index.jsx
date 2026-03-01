import AdminSidebar from "../sidebar";
import Customer from "./customer";


const CustomerAdmin = () => {
  return (

    <div className="flex h-[100vh]">
    <AdminSidebar></AdminSidebar>
      <Customer/>
    
      </div>
  );
}

export default CustomerAdmin;
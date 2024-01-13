import AdminSidebar from "../sidebar";
import CalendarComp from "./calendar";

const CalendarAdmin = () => {
  return (
    <div className="flex h-[100vh]">
    <AdminSidebar></AdminSidebar>
    <CalendarComp/>
      </div>
  );
}

export default CalendarAdmin;
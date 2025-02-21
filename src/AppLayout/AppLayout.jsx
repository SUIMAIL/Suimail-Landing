import { Outlet } from "react-router-dom";
import SideBar from "../components/UserDashboard/SideBar";
import { useState } from "react";
import DashboardHeader from "../components/UserDashboard/Header";
function AdminLayout() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex  h-screen ">
      <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="fle py-4 w-full ">
        <DashboardHeader  setIsOpen={setIsOpen}/>
        <Outlet />
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </div>
  );
}

export default AdminLayout;

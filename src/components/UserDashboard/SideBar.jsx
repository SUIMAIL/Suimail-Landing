import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X,Settings,ArrowLeftRight, House,CircleUserRound,HandCoins,WalletCards,MessageSquareWarning,Captions  } from "lucide-react"; // Lucide icons

function SideBar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSidebar = () => setIsSidebarOpen(true);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 pt-12  md:top-[8%]  md:pt-[8%] md:z-0 z-50 w-64 bg-nav text-white shadow-md transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:block`}
      >
        <nav className="p-4">
             <ul className="space-y-2 text-lg">
            <li>
              <NavLink to="/dashboard/overview" className="flex items-center gap-2 p-2 rounded">
              <House />  Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/users" className="flex items-center gap-2 p-2 rounded">
              <CircleUserRound />   Accounts
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/payment" className="flex items-center gap-2 p-2 rounded">
              <HandCoins />   Payments
              </NavLink>
            </li>

            <li>
              <NavLink to="/dashboard/transaction" className="flex items-center gap-2 p-2 rounded">
              <Captions />   Transaction
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/orders" className="flex items-center gap-2 p-2 rounded">
              <WalletCards />  Cards
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/report" className="flex items-center gap-2 p-2 rounded">
              <MessageSquareWarning />   Reports & Statements
              </NavLink>
            </li>
            <li>
              <NavLink className="flex md:hidden items-center gap-2 p-2 rounded" to='' ><ArrowLeftRight  /> See our rates </NavLink>
            </li>
         <li>
           <NavLink to='/dashboard/settings' className="flex md:hidden items-center gap-2 p-2 rounded" > <Settings /> Settings</NavLink>
           </li>


          </ul>
        </nav>
      </aside>

      {/* Open Sidebar Button */}
     <div className="md:hidden pt-[100px]">
     <button
        className="fixed flex flex-col justify-between items-cente px-5    bg-white  w-full  -z-0 md:hidden py-2 shadow-2xl text-gray-900   "
        onClick={openSidebar} >
<span className="flex items-center justify-between w-full"><Menu size={32} />
<span className="flex items-center gap-4 justify-end">
<NavLink to='' onClick={(e) => e.stopPropagation()} ><img  src='/img/note.png' className="w-8"/></NavLink>
<button onClick={(e) => e.stopPropagation()} className='px-2 py-1 text-2xl  bg-gray-100 rounded-full' ><img  src='/img/avatar.png' className="w-10"/></button>
</span>


 </span>
        
        <div onClick={(e) => e.stopPropagation()} className='flex items-center gap-6'> 
<h2 className='md:text-3xl text-[22px]  font-bold'>Hello Izuchukwu, 👋🏼</h2>

</div>
      </button>
     </div>
     
     

      {/* Close Sidebar Button */}
      <button
        className="fixed top-8 left-48 text-white z-50 md:hidden p-2  rounded-full "
        onClick={closeSidebar}
        style={{ display: isSidebarOpen ? "block" : "none" }}
      >
        <X size={24} />
      </button>

      {/* Click outside sidebar to close it */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={closeSidebar}
        ></div>
      )}

      {/* Main Content */}
      <main className="flex-1    md:ml-64 overflow-auto "></main>
    </div>
  );
}

export default SideBar;

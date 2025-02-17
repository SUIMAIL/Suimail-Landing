import { Outlet } from "react-router-dom";
import AccountNavLink from "../components/UserDashboard/Account/AccountNavLink";
//import { useState } from "react";
import TransactionTable from "../components/UserDashboard/Home/Table";
function AccountLayout() {
 
  return (
    <div className="   ">
           <div className="flex flex-col w-ful py-4  ">
       <AccountNavLink/>
        <Outlet />
      </div>

     <div className="mt-8">
     <TransactionTable/>
     </div>
    </div>
  );
}

export default AccountLayout;

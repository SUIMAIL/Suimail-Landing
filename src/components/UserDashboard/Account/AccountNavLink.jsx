//import QuickAction from "./Home/QuickAction"
import { Eye,  } from "lucide-react"
import { NavLink } from "react-router-dom"
//import TransactionTable from "../Home/Table"
const activeLinkStyle = "text-[#FAD129] ";
export default function AccountNavLink(){
    return(
        <div className="md:mt-[16%]  mt-[44%]  md:w-[100%] absolut pt-6 md:pt-12  overflow-x-hidden mb-5     w-[100%]  mx-auto  flex flex-col gap-4 md:gap-6  ">
       <div className="w-[95%] mx-auto  bg-blue-100 shadow-xl rounded-lg pb-8">
       <div className="px-4 py-2  flex items-center justify-between   w-[95%]   mx-auto">
        <div>
            <h3 className="font-semibold text-2xl md:text-3xl flex gap-2 items-center">Total Assets <Eye/></h3>
                
         </div>
         <div>
         <h3 className="text-2xl md:text-3xl font-bold">$2000</h3>
         </div>
        </div>

        <nav className="bg-gray-100 shadow-lg w-[95%] mt-5 md:w-[80%] flex items-center overflow-x-hidden whitespace-nowrap   snap-x snap-mandatory md:gap-7 gap-4 mx-auto justify-center rounded-xl md:p-3 py-2 px-1">

        <NavLink to="account"  className={({ isActive }) =>
              `hover:text-yellow-500 flex items-center flex-col md:flex-row md:gap-2 md:text-xl ${isActive ? activeLinkStyle : ""}`
            } >
  <img src="/img/avax.png" className="w-8"/> Avax 
</NavLink>
<NavLink to="ton" className={({ isActive }) =>
              `hover:text-yellow-500 flex items-center flex-col md:flex-row md:gap-2 md:text-xl ${isActive ? activeLinkStyle : ""}`
            }>
  <img src="/img/ton.png" className="w-8"/> Ton
</NavLink>
<NavLink to='poly'  className={({ isActive }) =>
              `hover:text-yellow-500 flex items-center flex-col md:flex-row md:gap-2 md:text-xl ${isActive ? activeLinkStyle : ""}`
            } > <img src="/img/poly.png" className="w-8"/>Poly</NavLink>
            <NavLink to='base' className={({ isActive }) =>
              `hover:text-yellow-500 flex items-center flex-col md:flex-row md:gap-2 md:text-xl ${isActive ? activeLinkStyle : ""}`
            }><img src="/img/base.png" className="w-8"/> Base</NavLink>
            <NavLink to='eth'  className={({ isActive }) =>
              `hover:text-yellow-500 flex items-center flex-col md:flex-row md:gap-2 md:text-xl ${isActive ? activeLinkStyle : ""}`
            } ><img src="/img/eth.png" className="w-10"/> Eth</NavLink>
            <NavLink to='ab'  className={({ isActive }) =>
              `hover:text-yellow-500 flex items-center flex-col md:flex-row md:gap-2 md:text-xl ${isActive ? activeLinkStyle : ""}`
            }><img src="/img/ab.png" className="w-8"/> Arb</NavLink>
            <NavLink to='nig'  className={({ isActive }) =>
              `hover:text-yellow-500 flex items-center flex-col md:flex-row md:gap-2 md:text-xl ${isActive ? activeLinkStyle : ""}`
            } ><img src="/img/nig.png" className="w-8"/> Nig</NavLink>
             

        </nav>


 {/* Main Content <TransactionTable/>*/}
 <main className="flex-1  shadow-2xl  md:ml-64 overflow-auto "></main>

       </div>

        </div>
    )
}
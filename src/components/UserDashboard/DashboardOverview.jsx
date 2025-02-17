import { NavLink } from "react-router-dom"
import BalenceSection from "./Home/BalenceSection"
import QuickAction from "./Home/QuickAction"
import MarketChart from "./Home/MarketChar"
import TransactionTable from "./Home/Table"
function Dashboard() {
    return (
      <div className="md:pt-[18%] md:pl-8 pt-[55%] md:w-[78%] absolute -z-20 overflow-x-hidden mb-32  w-[100%]  mx-auto  flex flex-col gap-6 md:gap-10  ">
        
          <div className="bg-blue-100 w-[95%]   mx-auto p-4 rounded-xl flex justify-between gap-1  shadow">
           <div className="flex flex-col gap-1 ">
           <h2 className="text-2xl font-bold mb-2">Verity your ID to finish setting up your account</h2>
            <p className="text-sm ">Verify your identity to start enjoying Key-Chain</p>
            <NavLink to='' className='bg-[#FAD129] px-8 py-4 rounded-lg w-fit mt-4'><button >Begin ID Verification </button> </NavLink>
           </div>
           <img src='/img/verifyaccount.png' className="w-32 hidden md:block" />
           
                </div>
          <BalenceSection />
          <QuickAction />
         <MarketChart/>
<TransactionTable/>
        </div>
      
    )
  }
  
  export default Dashboard
  
  
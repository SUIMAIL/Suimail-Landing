import { NavLink } from "react-router-dom";

export default function PaymentTable(){
    return(
       
<div className="">
<div className="overflow-x-auto mt-[55%] md:mt-[25%] min-h-screen bg-white mb-10 md:mb-20 w-[95%] mx-auto shadow-lg  rounded-xl px-4 py-2 md:px-6">
 <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Recent transactions</h2>
       <NavLink to=''className='text-blue-500' > See All</NavLink>
      </div>
  <table className="min-w-full divide-y-2  divide-gray-200 bg-white text-sm">
    <thead className="ltr:text-left rtl:text-right bg-gray-200 ">
      <tr >
         <th className="px-4 py-2 font-medium whitespace-nowrap text-gray-400">DATE</th>
        <th className="px-4 py-2 font-medium whitespace-nowrap text-gray-400">AMOUNT</th>
        <th className="px-4 py-2 font-medium whitespace-nowrap text-gray-400">TYPE</th>
        <th className="px-4 py-2 font-medium whitespace-nowrap text-gray-400">DESCRIPTION</th>
        <th className="px-4 py-2 font-medium whitespace-nowrap text-gray-400">STATUS</th>
      </tr>
    </thead>

    <tbody className="divide-y divide-gray-200 ">
      <tr className="">
          <td className="px-4 py-2 whitespace-nowrap text-gray-700">24/05/1995 </td>
        <td className="px-4 py-2 whitespace-nowrap text-gray-700"> $120,00</td>
        <td className="px-4 py-2 whitespace-nowrap text-gray-700">sui</td>
        <td className="px-4 py-2 whitespace-nowrap text-gray-700">food stuffs</td>
        <td className="px-4 py-2 whitespace-nowrap text-green-500">successfull</td>
          </tr>

          <tr className="">
          <td className="px-4 py-2 whitespace-nowrap text-gray-700">24/05/1995 </td>
        <td className="px-4 py-2 whitespace-nowrap text-gray-700"> $120,00</td>
        <td className="px-4 py-2 whitespace-nowrap text-gray-700">sui</td>
        <td className="px-4 py-2 whitespace-nowrap text-gray-700">food stuffs</td>
        <td className="px-4 py-2 whitespace-nowrap text-red-500">pending</td>
          </tr>

          <tr className="">
           <td className="px-4 py-2 whitespace-nowrap text-gray-700">24/05/1995 </td>
        <td className="px-4 py-2 whitespace-nowrap text-gray-700"> $120,00</td>
        <td className="px-4 py-2 whitespace-nowrap text-gray-700">sui</td>
        <td className="px-4 py-2 whitespace-nowrap text-gray-700">food stuffs</td>
        <td className="px-4 py-2 whitespace-nowrap text-green-500">successfull</td>
          </tr>
    </tbody>
  </table>
</div>
</div>
    )
}
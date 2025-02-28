import { ArrowLeftRight,Settings } from 'lucide-react';
import { NavLink } from 'react-router-dom';
export default function DashboardHeader(){
    return(
        <div className=" mx-auto fixed  z-50 w-full md:w-[81%]  ">
            <div className="mt-20  bg-white hidden   md:px-12 py-8  md:flex md:flex-row flex-col md:justify-between shadow-2xl">
<div className=''> 
<h2 className='md:text-3xl text-lg  font-bold'>Welcome Back Izuchukwu, 👋🏼</h2>
<p className='text-sm'>Send, save and receive funds in various currencies</p>
</div>
<div className='flex items-center gap-6'>
    <button  className='flex items-center gap-2 text-blue-500'><ArrowLeftRight  className='size-4'/> See our rates </button>

   <NavLink to='' > <Settings /></NavLink>
   <NavLink to='' ><img  src='/img/note.png' className="w-6"/></NavLink>
   <button className='px-[6px] py-1 text-2xl  bg-gray-200 rounded-full' ><img  src='/img/avatar.png' className="w-9"/></button>

</div>
            </div>
        </div>
    )
}
import { NavLink } from 'react-router-dom';
import { MoveUpRight } from 'lucide-react';
export default function HeroSection (){
    return(
        <div className="bg-nav pt-[40%] overflow-hidden  md:pt-[12%]">
          <div className='w-[90%] mx-auto items-center flex md:flex-row flex-col justify-between md:gap-24 gap-12'>
           <div  data-aos="fade-right" className='flex flex-col  gap-4 md:w-[60%]'>
           <h1 className="text-white text-4xl  md:text-7xl font-bold md:leading-[82px]">Bringing the world of banking to your fingertips</h1>
    <p className='md:text-gray-300 text-gray-200'>Enjoy banking without borders, tailored to your unique financial needs. Wherever life takes you, experience seamless and personalized services designed to make managing your finances easier, faster, and more secure.</p>
    <NavLink
            to="/signup"
            className='  bg-[#FAD129] text-gray-700 mt-4 md:mt-4 px-6 py-4 rounded-lg hover:bg-yellow-500 flex items-center gap-2 w-fit'
          >
            Get started--it&apos;s free  <MoveUpRight className='size-4'/>
          </NavLink>            
            </div> 
            <div data-aos="fade-left" className='overflow-hidden'>
                <img src='/img/hero3.png' className='w-[100%] md:w-[500px] mx-auto' />
            </div>
            
            </div> 
            
               </div>
    )
}
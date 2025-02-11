import { Link, NavLink } from "react-router-dom";
import { Instagram, Youtube, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-black text-white h-fit pb-6 pt-12">
     <div  data-aos="zoom-in">
     <div className="w-[90%] mx-auto flex md:justify-center gap-8 mb-6 md:mb-8">
        <img src="/img/keychainlogo2.jpg" alt="logo" className="md:w-[25%] w-[40%] md:mx-auto" />
      </div>
      <div className="w-[90%] mx-auto flex justify-center gap-8 md:justify-between md:flex-row flex-col">
        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-bold">CONTACT US</h2>
          <div className="text-sm flex flex-col gap-3">
            <Link to=''>key-chain@gmail.com</Link>
            <span className="flex items-center gap-3">
              <Link to='' className="border-2 hover:border-yellow-500 hover:text-yellow-500 border-gray-500 p-1 rounded-xl"><Instagram /></Link>
              <Link to='' className="border-2 hover:border-yellow-500 hover:text-yellow-500 border-gray-500 p-1 rounded-xl"><Youtube /></Link>
              <Link to='' className="border-2 hover:border-yellow-500 hover:text-yellow-500 border-gray-500 p-1 rounded-xl"><Twitter /></Link>
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-bold">COMPANY</h2>
          <div className="text-sm flex flex-col gap-2">
            <NavLink to='/about'>About us</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
            <NavLink to='/help'>Help center</NavLink>
            <NavLink to='/faq'>FAQ</NavLink>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-bold">LEGAL</h2>
          <div className="text-sm flex flex-col gap-2">
            <NavLink to='/terms'>Terms of Services</NavLink>
            <NavLink to='/privacy'>Privacy of Services</NavLink>
            <NavLink to='/policy'>Acceptable use Policy</NavLink>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-bold">PRODUCTS</h2>
          <div className="text-sm flex flex-col gap-2">
            <NavLink to='/product/money-transfer'>Money Transfer</NavLink>
            <NavLink to='/product/virtual-card'>Virtual Cards</NavLink>
            <NavLink to='/product/currency-exchange'>Currency Exchange</NavLink>
            <NavLink to='/product/foreign-account'>Foreign Accounts</NavLink>
            <NavLink to='/product/community'>Join Our Community</NavLink>
          </div>
        </div>
      </div>
      <div className="w-[90%] mx-auto text-center mt-8">
        <p className="text-sm">&copy; {currentYear} Key-Chain. All rights reserved.</p>
      </div>
     </div>
    </div>
  );
}
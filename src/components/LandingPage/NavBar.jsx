import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ChevronDown,ChevronUp, Globe  } from 'lucide-react'; //CircleUserRound,CircleDollarSign,WalletCards,HandCoins
const NavBar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('EN');
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
};



const handleLanguageChange = (code) => {
  setSelectedLanguage(code);
  setIsOpen(false);
  setSidebarOpen(false);
};
  
  const activeLinkStyle = "text-[#FAD129] ";

  const languages = [
    { code: 'EN', name: 'English' },
    { code: 'ES', name: 'Spanish' },
    { code: 'FR', name: 'French' },
    { code: 'DE', name: 'German' },
    { code: 'ZH', name: 'Chinese' },
    { code: 'JA', name: 'Japanese' },
    { code: 'RU', name: 'Russian' },
    { code: 'AR', name: 'Arabic' },
    { code: 'PT', name: 'Portuguese' },
    { code: 'HI', name: 'Hindi' }
];



  return (
    <nav className="py-6 bg-nav z-50  fixed w-full  text-white shadow-2xl ">
      <div className="container flex w-[90%] mx-auto justify-between items-center">
        {/* Left Section - Logo */}
       <div className='flex gap-2 items-center'>
       <NavLink to="/" className="text-2xl font-bold">
          <img src='/img/logo.png' className='md:w-44 w-44' alt="Logo" />
        </NavLink>
        <div className='relative z-30'>
            <div className='flex text-gray-900 items-center border rounded-full py-2 px-3 cursor-pointer' onClick={toggleDropdown}>
                <label htmlFor="language-selector"><Globe className='text-blue-100' /></label>
                <span className="ml-2 text-white">{selectedLanguage}</span>
                {isOpen ? <ChevronUp className='ml-2 size-5 text-white' /> : <ChevronDown className='ml-2 size-5 text-white' />}
            </div>
            {isOpen && (
                <div className="absolute top-full left-[-75%]  md:left-0 mt-2  text-gray-900 bg-white p-4 border rounded-md w-[250px] md:w-[300px] z-10">
                    {languages.map(language => (
                        <div
                            key={language.code} 
                            
                            onClick={() => handleLanguageChange(language.code)}
                            className='cursor-pointer px-4 py-2 hover:bg-gray-200'
                        >
                            {language.name}
                        </div>
                    ))}
                </div>
            )}
        </div>
       </div>

        {/* Center Section - Links */}
        <div className="hidden md:flex space-x-6 items-center">
      {/*   <NavLink
            to="/dashboard/overview"
            className={({ isActive }) =>
              `hover:text-yellow-500 ${isActive ? activeLinkStyle : ""}`
            }
          >
            Home
          </NavLink> 

       }   <div className="  relative group">
            <NavLink
              to="/products"
              className={({ isActive }) =>
                `hover:text-yellow-500 flex items-center gap-2 ${isActive ? activeLinkStyle : " "}`
              }
            >
              Products <ChevronDown />
            </NavLink>
            <div className="absolute left-[-80%] w-[300px] space-y-3 text-sm rounded-lg top-6 p-4 bg-white text-gray-950 hidden group-hover:block">
              <NavLink to="/products/product1" className="block py-2 px-4 hover:text-gray-600" onClick={closeSidebar}> <span className='flex items-center gap-2'><CircleUserRound />Foreign Account</span> <p className='text-xs text-gray-400'>Access WorldWide Banking Services.</p></NavLink>
              <NavLink to="/products/product2" className="block  px-4 hover:text-gray-600" onClick={closeSidebar}><span className='flex items-center gap-2'><CircleDollarSign />Currency Exchange</span> <p className='text-xs text-gray-400'>Real-Time Rates for Conversion</p></NavLink>
              <NavLink to="/products/product3" className="block py-2 px-4 hover:text-gray-600" onClick={closeSidebar}> <span className='flex items-center gap-2'><WalletCards /> Visual Cards</span> <p className='text-xs text-gray-400'>Secure Digital Payment Solucion</p></NavLink>
              <NavLink to="/products/product4" className="block  px-4 hover:text-gray-600" onClick={closeSidebar}> <span className='flex items-center gap-2'><HandCoins />Money Transfer</span> <p className='text-xs text-gray-400'>Global Funds transfer</p></NavLink>
            </div>
          </div> */}

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `hover:text-yellow-500 ${isActive ? activeLinkStyle : ""}`
            }
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `hover:text-yellow-500 ${isActive ? activeLinkStyle : ""}`
            }
          >
          Contact
          </NavLink>


          <NavLink
            to="/faq"
            className={({ isActive }) =>
              `hover:text-yellow-500 ${isActive ? activeLinkStyle : ""}`
            }
          >
          FAQ
          </NavLink>
        </div>

        {/* Right Section - Login and Signup */}
        <div className="hidden md:flex space-x-6 items-center">
          <NavLink
            to="/login"
            className='border px-4 py-2 rounded-lg hover:border-[#FAD129] hover:text-[#FAD129]'
          >
            Login
          </NavLink>
          <NavLink
            to="/signup"
            className='  bg-[#FAD129] text-gray-700 px-4 py-2 rounded-lg hover:bg-yellow-500'
          >
            Get started--it&apos;s free
          </NavLink>
        </div>

        {/* Sidebar Button */}
        <div className="md:hidden cursor-pointer" onClick={toggleSidebar}>
          <div className="w-6 h-1 bg-white mb-1"></div>
          <div className="w-6 h-1 bg-white mb-1"></div>
          <div className="w-6 h-1 bg-white"></div>
        </div>
      </div>

      {/* Sidebar Overlay */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={closeSidebar}></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-nav px-6 text-white transform ${
          isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 z-50`}
      >
        <div className="p-4 flex justify-end items-end">
        <button className="text-white" onClick={closeSidebar}>
            ✕
          </button>
         </div>
        <div className='flex  items-center'>
        <NavLink
            to="/"
            onClick={closeSidebar}
           
          >
        <img src='/img/logo.png' className='md:w-44 w-44' alt="Logo" />
         
        </NavLink>
        </div>
        <div className="p-4 space-y-4">
       {/*}   <NavLink
            to="/"
            onClick={closeSidebar}
            className={({ isActive }) =>
              `block py-2 hover:text-yellow-500 ${isActive ? activeLinkStyle : ""}`
            }
          >
            Home
          </NavLink> */}

       {/*}   <div className="relative group">
            <NavLink
              to="/products"
              className={({ isActive }) =>
                `hover:text-yellow-500 flex items-center gap-2 ${isActive ? activeLinkStyle : " "}`
              }
            >
              Products <ChevronDown />
            </NavLink>
            <div className="absolute left-[-20%] space-y-5 w-[250px] text-sm rounded-lg top-6 px-4 pt-4 pb-6 border bg-nav text-white hidden group-hover:block">
              <NavLink  to="/products/product1" className="block py-2 px-4 hover:text-gray-300" onClick={closeSidebar}> <span className='flex items-center gap-2'><CircleUserRound />Foreign Account</span> <p className='text-xs text-gray-200'>Access WorldWide Banking Services.</p></NavLink>
              <NavLink to="/products/product2" className="block  px-4 hover:text-gray-300" onClick={closeSidebar}><span className='flex items-center gap-2'><CircleDollarSign />Currency Exchange</span> <p className='text-xs text-gray-200'>Real-Time Rates for Conversion</p></NavLink>
              <NavLink to="/products/product3" className="block py-2 px-4 hover:text-gray-300" onClick={closeSidebar}> <span className='flex items-center gap-2'><WalletCards /> Visual Cards</span> <p className='text-xs text-gray-200'>Secure Digital Payment Solucion</p></NavLink>
              <NavLink to="/products/product4" className="block  px-4 hover:text-gray-300" onClick={closeSidebar}> <span className='flex items-center gap-2'><HandCoins />Money Transfer</span> <p className='text-xs text-gray-200'>Global Funds transfer</p></NavLink>
            </div>
          </div> */}

          <NavLink
            to="/about"
            onClick={closeSidebar}
            className={({ isActive }) =>
              `block py-2 hover:text-yellow-500 ${isActive ? activeLinkStyle : ""}`
            }
          >
            About us
          </NavLink>

          <NavLink
            to="/contact"
            onClick={closeSidebar}
            className={({ isActive }) =>
              `block py-2 hover:text-yellow-500 ${isActive ? activeLinkStyle : ""}`
            }
          >
            Contact
          </NavLink>


          <NavLink
            to="/faq"
            onClick={closeSidebar}
            className={({ isActive }) =>
              `block py-2 hover:text-yellow-500 ${isActive ? activeLinkStyle : ""}`
            }
          >
            FAQ
          </NavLink>

          <div className="flex space-y-4 pt-4 flex-col">
          <NavLink
            to="/login"
            className='border w-fit px-4 py-2 rounded-lg hover:border-[#FAD129] hover:text-[#FAD129]'
          >
            Login
          </NavLink>
          <NavLink
            to="/signup"
            className='  bg-[#FAD129] text-gray-700 px-4 py-2 rounded-lg hover:bg-yellow-500'
          >
            Get started--it&apos;s free
          </NavLink>
        </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
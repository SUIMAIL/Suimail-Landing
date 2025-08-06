import { useState } from "react"
import { motion } from "framer-motion"
import NavLink from "./NavLink"
import { cn } from "../../lib/utils"
import MobileNavLink from "./MobileNavLink"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navbarVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  const buttonHoverVariants = {
    initial: {
      scale: 0.9,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    animate: {
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
        mass: 1,
        duration: 0.6,
      },
    },
  }

  const navLinks = [
    { href: "#", label: "Home" },
    { href: "#features", label: "Features" },
    { href: "#how-it-works", label: "How It Works" },
    { href: "#team", label: "Our Team" },
  ]

  return (
    <>
      <motion.nav
        className="bg-blue-50 fixed w-full z-20 top-0 left-0 py-5 px-6 sm:px-14 lg:px-20"
        variants={navbarVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <img
              src={"/images/tiny_logo.png"}
              alt="Logo"
              className="h-8 w-8 mr-2"
            />
          </div>

          <button
            className="md:hidden flex items-center p-2 rounded-lg text-gray-700 hover:bg-blue-50 transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>

          <ul className="hidden md:flex space-x-8 text-gray-700">
            {navLinks.map((link) => (
              <NavLink key={link.href} href={link.href} label={link.label} />
            ))}
          </ul>

          <motion.button
            className="hidden md:flex items-center px-5 py-3 bg-gradient-to-r from-blue-500 to-blue-500/80 text-white rounded-lg gap-1"
            variants={buttonHoverVariants}
            initial="initial"
            whileHover="animate"
            exit="exit"
            onClick={() =>
              (window.location.href = "https://suimail.vercel.app")
            }
          >
            Connect Wallet
          </motion.button>
        </div>
      </motion.nav>

      <motion.div
        className={cn(
          "fixed top-20 z-20 w-full bg-white shadow-lg md:hidden overflow-hidden"
        )}
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isMenuOpen ? "auto" : 0,
          opacity: isMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <ul className="flex flex-col py-4 px-6 space-y-4">
          {navLinks.map((link) => (
            <MobileNavLink
              key={link.href}
              href={link.href}
              label={link.label}
              onClick={() => setIsMenuOpen(false)}
            />
          ))}

          <motion.button
            className="w-full flex items-center justify-center px-5 py-2.5 mt-4 bg-gradient-to-r from-blue-500 to-blue-400 text-white rounded-lg shadow-md"
            variants={buttonHoverVariants}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              (window.location.href = "https://suimail.vercel.app")
            }
          >
            Connect Wallet
          </motion.button>
        </ul>
      </motion.div>
    </>
  )
}

export default Navbar

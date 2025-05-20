"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import tiny_logo from "../assets/tiny_logo.png"
import suimail_logo from "../assets/suimail-logo.png"
import Sui_guard from "../assets/Sui_guard.png"

// Import the images for the features row
import shieldIcon from "../assets/send.png"
import lockIcon from "../assets/padlock.png"
import paperPlaneIcon from "../assets/Sui.png"
import userIcon from "../assets/tiny_logo.png"
import dropletIcon from "../assets/Group.png"

// Define icons for the infinite scrolling row
const icons = [
  { name: "shield", path: shieldIcon },
  { name: "lock", path: lockIcon },
  { name: "paper-plane", path: paperPlaneIcon },
  { name: "user", path: userIcon },
  { name: "droplet", path: dropletIcon },
  { name: "shield", path: shieldIcon },
  { name: "lock", path: lockIcon },
  // Additional repeats for smoother scrolling
  { name: "shield", path: shieldIcon },
  { name: "lock", path: lockIcon },
  { name: "paper-plane", path: paperPlaneIcon },
  { name: "user", path: userIcon },
  { name: "droplet", path: dropletIcon },
  { name: "shield", path: shieldIcon },
  { name: "lock", path: lockIcon },
]

const HeroSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  // Handle scroll for parallax effects
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Animation variants
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
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
    hover: {
      scale: 1.05,
      boxShadow: "0px 10px 20px rgba(33, 193, 255, 0.2)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  }

  const hexagonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 0.15,
      scale: 1,
      transition: {
        duration: 1.5,
        ease: "easeOut",
      },
    },
  }

  const floatingAnimation = {
    y: ["-5px", "5px"],
    transition: {
      y: {
        duration: 2,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  }

  // Features row animation
  const featuresRowVariants = {
    animate: {
      x: [0, -1500],
      transition: {
        duration: 30,
        repeat: Number.POSITIVE_INFINITY,
        ease: "linear",
        repeatType: "loop",
      },
    },
  }

  return (
    <div className="relative bg-gray-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Web3 Decorative Elements */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 border-2 border-blue-400 opacity-10"
          style={{ borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%" }}
          animate={{
            rotate: 360,
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            ease: "linear",
          }}
        />

        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 border border-blue-300 opacity-10"
          style={{ borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" }}
          animate={{
            rotate: -360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            ease: "linear",
          }}
        />

        {/* Enhanced Web3 Visual Elements */}
        <div className="absolute inset-0 grid grid-cols-4 md:grid-cols-6 gap-8 p-8 pointer-events-none">
          {[...Array(24)].map((_, i) => (
            <motion.div
              key={i}
              className="w-full aspect-square opacity-0"
              variants={hexagonVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: i * 0.05 }}
            >
              <svg viewBox="0 0 100 100" className="w-full h-full fill-blue-400 opacity-20">
                <polygon points="50 0, 93.3 25, 93.3 75, 50 100, 6.7 75, 6.7 25" />
              </svg>
            </motion.div>
          ))}
        </div>

        {/* Digital Circuit Lines - Enhanced Web3 Feel */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <path
                  d="M0 50 H100 M50 0 V100 M25 25 L75 75 M75 25 L25 75"
                  stroke="#3B82F6"
                  strokeWidth="1"
                  fill="none"
                />
              </pattern>
            </defs>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#circuit)" />
          </svg>
        </div>

        {/* Animated Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-blue-400"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: 0.3,
              }}
              animate={{
                y: [0, -100],
                opacity: [0.3, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 5,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>
      </div>

      {/* Navbar */}
      <motion.nav
        className="relative z-20 flex items-center justify-between px-4 py-4 sm:px-6 md:px-16 font-karla backdrop-blur-sm"
        style={{ backgroundColor: "rgba(247, 249, 255, 0.9)" }}
        variants={navbarVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex items-center">
          <img src={tiny_logo || "/placeholder.svg"} alt="Logo" className="h-8 w-8 mr-2" />
        </div>

        {/* Hamburger Menu Button */}
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-karla">
          <motion.li whileHover={{ scale: 1.1, color: "#21C1FF" }}>
            <a href="#" className="hover:text-blue-500 transition-colors">
              Home
            </a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1, color: "#21C1FF" }}>
            <a href="#" className="hover:text-blue-500 transition-colors">
              About Us
            </a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1, color: "#21C1FF" }}>
            <a href="#" className="hover:text-blue-500 transition-colors">
              Contact Us
            </a>
          </motion.li>
        </ul>

        {/* Connect Wallet Button - Desktop */}
        <motion.button
          className="hidden md:flex items-center px-5 py-2.5 font-karla bg-gradient-to-r from-blue-500 to-blue-400 text-white rounded-lg shadow-lg"
          variants={buttonHoverVariants}
          whileHover="hover"
          onClick={() => (window.location.href = "https://suimail-frontend.vercel.app/")}
        >
          <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M19 7H5C3.89543 7 3 7.89543 3 9V18C3 19.1046 3.89543 20 5 20H19C20.1046 20 21 19.1046 21 18V9C21 7.89543 20.1046 7 19 7Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16 20V5C16 4.46957 15.7893 3.96086 15.4142 3.58579C15.0391 3.21071 14.5304 3 14 3H10C9.46957 3 8.96086 3.21071 8.58579 3.58579C8.21071 3.96086 8 4.46957 8 5V20"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Connect Wallet
        </motion.button>
      </motion.nav>

      {/* Mobile Menu - Slide Down */}
      <motion.div
        className={`relative z-10 w-full bg-white shadow-lg md:hidden overflow-hidden ${isMenuOpen ? "block" : "hidden"}`}
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isMenuOpen ? "auto" : 0,
          opacity: isMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="py-4 px-6 space-y-4">
          <a href="#" className="block py-2 text-gray-700 hover:text-blue-500 font-karla transition-colors">
            Home
          </a>
          <a href="#" className="block py-2 text-gray-700 hover:text-blue-500 font-karla transition-colors">
            About Us
          </a>
          <a href="#" className="block py-2 text-gray-700 hover:text-blue-500 font-karla transition-colors">
            Contact Us
          </a>

          <motion.button
            className="w-full flex items-center justify-center px-5 py-2.5 mt-4 font-karla bg-gradient-to-r from-blue-500 to-blue-400 text-white rounded-lg shadow-md"
            variants={buttonHoverVariants}
            whileTap={{ scale: 0.95 }}
            onClick={() => (window.location.href = "https://suimail-frontend.vercel.app/")}
          >
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M19 7H5C3.89543 7 3 7.89543 3 9V18C3 19.1046 3.89543 20 5 20H19C20.1046 20 21 19.1046 21 18V9C21 7.89543 20.1046 7 19 7Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16 20V5C16 4.46957 15.7893 3.96086 15.4142 3.58579C15.0391 3.21071 14.5304 3 14 3H10C9.46957 3 8.96086 3.21071 8.58579 3.58579C8.21071 3.96086 8 4.46957 8 5V20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Connect Wallet
          </motion.button>
        </div>
      </motion.div>

      {/* Hero Content */}
      <motion.div
        className="relative z-10 max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center px-4 sm:px-6 lg:px-16 py-12 md:py-20"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Left Column */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0 text-center md:text-left">
          <motion.div variants={fadeInUpVariants}>
            <img src={suimail_logo || "/placeholder.svg"} alt="Logo" className="mx-auto md:mx-0 h-12 md:h-16" />
          </motion.div>

          <motion.h1
            variants={fadeInUpVariants}
            className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 font-coolvetica leading-tight"
          >
            The First Truly Secure Email
            <br />
            Powered by{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Sui </span>
            Blockchain
          </motion.h1>

          <motion.p variants={fadeInUpVariants} className="mt-4 text-gray-600 font-karla max-w-lg mx-auto md:mx-0">
            End-to-end encrypted, decentralized storage, and zero tracking. Take back control of your communications
            with blockchain security.
          </motion.p>

          {/* Web3 Feature Pills - Enhanced */}
          <motion.div variants={fadeInUpVariants} className="mt-6 flex flex-wrap justify-center md:justify-start gap-2">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
              <span className="w-2 h-2 rounded-full bg-blue-500 mr-1"></span>
              Decentralized
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
              <span className="w-2 h-2 rounded-full bg-blue-500 mr-1"></span>
              Encrypted
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
              <span className="w-2 h-2 rounded-full bg-blue-500 mr-1"></span>
              Censorship-Resistant
            </span>
          </motion.div>

          <motion.div
            variants={fadeInUpVariants}
            className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start space-y-3 sm:space-y-0 sm:space-x-4"
          >
            <motion.button
              className="px-6 py-3 font-karla bg-gradient-to-r from-blue-500 to-blue-400 text-white rounded-lg shadow-lg flex items-center justify-center"
              variants={buttonHoverVariants}
              whileHover="hover"
              onClick={() => (window.location.href = "https://suimail-frontend.vercel.app/")}
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M19 7H5C3.89543 7 3 7.89543 3 9V18C3 19.1046 3.89543 20 5 20H19C20.1046 20 21 19.1046 21 18V9C21 7.89543 20.1046 7 19 7Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 20V5C16 4.46957 15.7893 3.96086 15.4142 3.58579C15.0391 3.21071 14.5304 3 14 3H10C9.46957 3 8.96086 3.21071 8.58579 3.58579C8.21071 3.96086 8 4.46957 8 5V20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Connect Wallet
            </motion.button>

            <motion.button
              className="px-6 py-3 border border-blue-500 text-blue-600 rounded-lg font-karla hover:bg-blue-50 flex items-center justify-center"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9 18L15 12L9 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Learn more
            </motion.button>
          </motion.div>

          {/* Blockchain Stats - Enhanced */}
          <motion.div
            variants={fadeInUpVariants}
            className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-md mx-auto md:mx-0"
          >
            <div className="text-center p-2 rounded-lg bg-white bg-opacity-70 backdrop-blur-sm shadow-sm border border-blue-100">
              <p className="text-blue-500 font-bold text-xl">100%</p>
              <p className="text-xs text-gray-600">Decentralized</p>
            </div>
            <div className="text-center p-2 rounded-lg bg-white bg-opacity-70 backdrop-blur-sm shadow-sm border border-blue-100">
              <p className="text-blue-500 font-bold text-xl">256-bit</p>
              <p className="text-xs text-gray-600">Encryption</p>
            </div>
            <div className="text-center p-2 rounded-lg bg-white bg-opacity-70 backdrop-blur-sm shadow-sm border border-blue-100 col-span-2 sm:col-span-1">
              <p className="text-blue-500 font-bold text-xl">Sui</p>
              <p className="text-xs text-gray-600">Blockchain</p>
            </div>
          </motion.div>
        </div>

        {/* Right Column - Hidden on mobile */}
        <motion.div
          variants={fadeInUpVariants}
          className="w-full md:w-1/2 flex justify-center hidden md:flex"
          animate={floatingAnimation}
        >
          <div className="relative">
            {/* Decorative elements around the image */}
            <motion.div
              className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-blue-400 opacity-70"
              animate={{ rotate: [0, 90, 180, 270, 360], scale: [1, 1.1, 1] }}
              transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            />
            <motion.div
              className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-blue-400 opacity-70"
              animate={{ rotate: [360, 270, 180, 90, 0], scale: [1, 1.1, 1] }}
              transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            />

            {/* Main image with enhanced glow effect */}
            <div className="relative">
              <div className="absolute inset-0 bg-blue-400 rounded-full filter blur-3xl opacity-20 transform scale-75" />
              <img
                src={Sui_guard || "/placeholder.svg"}
                alt="Secure Email Illustration"
                className="relative z-10 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto"
              />
            </div>

            {/* Small floating elements - Enhanced */}
            <motion.div
              className="absolute top-1/4 -right-6 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center"
              animate={{
                y: ["-10px", "10px"],
                rotate: [0, 10, 0, -10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            >
              <svg className="w-6 h-6 text-blue-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 16V12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 8H12.01"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.div>

            <motion.div
              className="absolute bottom-1/4 -left-6 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center"
              animate={{
                y: ["10px", "-10px"],
                rotate: [0, -10, 0, 10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: 1,
              }}
            >
              <svg className="w-6 h-6 text-blue-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M22 11.0799V11.9999C21.9988 14.1563 21.3005 16.2545 20.0093 17.9817C18.7182 19.7088 16.9033 20.9723 14.8354 21.5838C12.7674 22.1952 10.5573 22.1218 8.53447 21.3744C6.51168 20.6271 4.78465 19.246 3.61096 17.4369C2.43727 15.6279 1.87979 13.4879 2.02168 11.3362C2.16356 9.18443 2.99721 7.13619 4.39828 5.49694C5.79935 3.85768 7.69279 2.71525 9.79619 2.24001C11.8996 1.76477 14.1003 1.9822 16.07 2.85986"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M22 4L12 14.01L9 11.01"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Features Row - Infinite Scrolling */}
      <div className="relative z-10 bg-white py-8 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-16 mb-4">
          <p className="text-center text-sm text-gray-500 font-karla mb-6">
            Powered by cutting-edge blockchain technology
          </p>
        </div>

        <div className="relative overflow-hidden w-full">
          <motion.div
            className="flex space-x-12 py-2"
            variants={featuresRowVariants}
            animate="animate"
            style={{ width: "fit-content" }}
          >
            {icons.concat(icons).map((icon, idx) => (
              <div key={idx} className="flex-shrink-0 p-2 bg-black rounded-md">
                <img src={icon.path} alt={`${icon.name} icon`} className="h-6 w-6 text-white" />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Web3 Feature Callouts - Mobile Only */}
        <div className="mt-8 md:hidden">
          <div className="grid grid-cols-2 gap-3 px-4">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                  <svg
                    className="w-4 h-4 text-blue-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 16V12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 8H12.01"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-sm font-medium text-gray-900">Blockchain</h3>
              </div>
              <p className="text-xs text-gray-600">Secured by Sui blockchain technology</p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                  <svg
                    className="w-4 h-4 text-blue-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="3"
                      y="11"
                      width="18"
                      height="11"
                      rx="2"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V11"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 16V16.01"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-sm font-medium text-gray-900">Encrypted</h3>
              </div>
              <p className="text-xs text-gray-600">End-to-end encryption for your privacy</p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                  <svg
                    className="w-4 h-4 text-blue-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.24 12.24C21.3658 11.1142 21.9983 9.58722 21.9983 7.99504C21.9983 6.40285 21.3658 4.87588 20.24 3.75004C19.1142 2.62419 17.5872 1.9917 15.995 1.9917C14.4028 1.9917 12.8758 2.62419 11.75 3.75004L5 10.5V19H13.5L20.24 12.24Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16 8L2 22"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M17.5 15H9"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-sm font-medium text-gray-900">Ownership</h3>
              </div>
              <p className="text-xs text-gray-600">You own your data, not corporations</p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                  <svg
                    className="w-4 h-4 text-blue-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9 10C10.1046 10 11 9.10457 11 8C11 6.89543 10.1046 6 9 6C7.89543 6 7 6.89543 7 8C7 9.10457 7.89543 10 9 10Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2.67004 18.9501L7.60004 15.6401C8.39004 15.1101 9.53004 15.1701 10.24 15.7801L10.57 16.0701C11.35 16.7401 12.61 16.7401 13.39 16.0701L17.55 12.5001C18.33 11.8301 19.59 11.8301 20.37 12.5001L22 13.9001"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-sm font-medium text-gray-900">NFT Support</h3>
              </div>
              <p className="text-xs text-gray-600">Send NFTs directly through email</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection

import { motion } from "framer-motion"
import Navbar from "./navbar/Navbar"
import Background from "./hero-section/Background"
import Features from "./hero-section/features/Features"
import Stats from "./hero-section/Stats"
import Buttons from "./hero-section/Buttons"

const HeroSection = () => {
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
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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

  return (
    <div className="relative">
      <Background />
      <Navbar />

      <motion.div
        className="min-h-screen relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center px-6 lg:px-16"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <div className="w-full pt-20 lg:pt-0 lg:w-1/2 text-center lg:text-left">
          <motion.div variants={fadeInUpVariants}>
            <img
              src={"/images/suimail-logo.png"}
              alt="Logo"
              className="mx-auto lg:mx-0 w-[200px] h-auto"
            />
          </motion.div>

          <motion.h1
            variants={fadeInUpVariants}
            className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight"
          >
            Own Your Inbox. <br />
            Monetize Your Attention
            <br />
          </motion.h1>

          <motion.p
            variants={fadeInUpVariants}
            className="mt-4 text-gray-600 max-w-lg mx-auto lg:mx-0"
          >
            Decentralized Mailing that empowers you to take control of your
            inbox.
            <br />
            No more spam. No more bots.
          </motion.p>

          <motion.div
            variants={fadeInUpVariants}
            className="mt-6 flex flex-wrap justify-center lg:justify-start gap-2"
          >
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
              onClick={() =>
                (window.location.href = "https://suimail-frontend.vercel.app/")
              }
            >
              <svg
                className="w-5 h-5 mr-2"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
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
                onClick={() => window.location.href = "/whitepaper"}

            >
              <svg
                className="w-5 h-5 mr-2"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
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
          <Buttons />
          <Stats />
        </div>

        <motion.div
          variants={fadeInUpVariants}
          className="w-full lg:w-1/2 justify-center hidden lg:flex"
          animate={floatingAnimation}
        >
          <div className="relative">
            <motion.div
              className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-blue-400 opacity-70"
              animate={{ rotate: [0, 90, 180, 270, 360], scale: [1, 1.1, 1] }}
              transition={{
                duration: 10,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />
            <motion.div
              className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-blue-400 opacity-70"
              animate={{ rotate: [360, 270, 180, 90, 0], scale: [1, 1.1, 1] }}
              transition={{
                duration: 10,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />

            <div className="relative hidden lg:block">
              <img
                src={"/images/Sui_guard.png"}
                alt="Secure Email Illustration"
                className="relative z-10 w-[300px] lg:w-[430px] h-auto"
              />
            </div>

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
              <svg
                className="w-6 h-6 text-blue-500"
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
              <svg
                className="w-6 h-6 text-blue-500"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
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

      <Features />
    </div>
  )
}

export default HeroSection

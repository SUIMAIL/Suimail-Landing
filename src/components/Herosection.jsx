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

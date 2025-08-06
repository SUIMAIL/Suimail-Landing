import { motion } from "framer-motion"

const Buttons = () => {
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

  const buttonHoverVariants = (isFirstButton) => {
    return {
      hover: {
        scale: 1.05,
        boxShadow: isFirstButton
          ? "0px 10px 20px rgba(33, 193, 255, 0.2)"
          : "none",
        transition: {
          type: "spring",
          stiffness: 400,
          damping: 10,
        },
      },
    }
  }

  return (
    <motion.div
      variants={fadeInUpVariants}
      className="max-w-[400px] lg:max-w-none mx-auto lg:mx-0 mt-8 flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-y-6 lg:gap-y-0 lg:gap-x-4"
    >
      <motion.button
        className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-400 text-white rounded-lg shadow-lg flex items-center justify-center w-full lg:w-auto"
        variants={buttonHoverVariants(true)}
        whileHover="hover"
        onClick={() =>
          (window.location.href = "https://suimail.vercel.app/")
        }
      >
        Connect Wallet
      </motion.button>

      <motion.button
        className="px-6 py-3 border border-blue-500 text-blue-600 rounded-lg hover:bg-blue-50 flex items-center justify-center w-full lg:w-auto"
        variants={buttonHoverVariants(false)}
        whileHover="hover"
      >
        Learn more
        <svg
          className="w-5 h-5 ml-2"
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
      </motion.button>
    </motion.div>
  )
}

export default Buttons

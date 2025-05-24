import { motion } from "framer-motion"

const Stats = () => {
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

  return (
    <motion.div
      variants={fadeInUpVariants}
      className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0"
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
  )
}

export default Stats 
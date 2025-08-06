import { motion } from "framer-motion"

const Background = () => {
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

  return (
    <div className="absolute inset-0 overflow-hidden bg-white">
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
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full fill-blue-400 opacity-20"
            >
              <polygon points="50 0, 93.3 25, 93.3 75, 50 100, 6.7 75, 6.7 25" />
            </svg>
          </motion.div>
        ))}
      </div>

      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="circuit"
              x="0"
              y="0"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
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
  )
}

export default Background

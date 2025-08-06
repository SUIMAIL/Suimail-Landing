import PropTypes from "prop-types"
import { motion } from "framer-motion"

export function TranslateWrapper({ children }) {
  return (
    <div className="whitespace-nowrap">
      <motion.div
        initial={{ x: "0%" }}
        animate={{ x: "-50%" }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="flex gap-10 px-2"
      >
        {children}
      </motion.div>
    </div>
  )
}

TranslateWrapper.propTypes = {
  children: PropTypes.node.isRequired,
}

import { motion } from "framer-motion"
import PropTypes from "prop-types"

const MobileNavLink = ({ href, label, onClick }) => {
  return (
    <motion.li
      whileHover={{ x: 5, transition: { duration: 0.2 } }}
      onClick={onClick}
    >
      <a
        href={href}
        className="text-[15px] text-black hover:text-blue-500 transition-colors"
      >
        {label}
      </a>
    </motion.li>
  )
}

MobileNavLink.propTypes = {
  href: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
}

export default MobileNavLink

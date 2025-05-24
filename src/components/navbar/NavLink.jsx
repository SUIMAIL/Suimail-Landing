import { motion } from "framer-motion"
import PropTypes from "prop-types"

const NavLink = ({ href, label }) => {
  return (
    <motion.li whileHover={{ scale: 1.1 }}>
      <a
        href={href}
        className="text-sm text-black hover:text-blue-500 transition-colors"
      >
        {label}
      </a>
    </motion.li>
  )
}

NavLink.propTypes = {
  href: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
}

export default NavLink

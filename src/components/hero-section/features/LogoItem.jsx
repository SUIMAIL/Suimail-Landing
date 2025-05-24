import PropTypes from "prop-types"

const LogoItem = ({ src, label }) => {
  return (
    <div className="flex justify-center items-center w-12 h-12 bg-black rounded-lg mr-10">
      <img
        src={src}
        alt={`${label} icon`}
        className="w-[30px] h-[30px] hover:scale-110 transition-all duration-300"
      />
    </div>
  )
}

LogoItem.propTypes = {
  src: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
}

export default LogoItem

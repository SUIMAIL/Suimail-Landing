import "react"
import PropTypes from "prop-types"

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="text-center max-w-xs">
      <div className="bg-black text-white rounded-xl p-3 inline-block mb-4">
        <img src={icon} alt={title} className="text-2xl" />
      </div>
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-sm text-gray-500 mt-2">{description}</p>
    </div>
  )
}

FeatureCard.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

const FuturePlanCard = ({ image, title, description, badgeText }) => {
  return (
    <div className="shadow flex-1 bg-white rounded-2xl p-6 flex flex-col transition hover:-translate-y-2 duration-[350ms]">
      <div className="mb-4">
        <div className="bg-gray-100 max-h-[200px] flex items-center justify-center overflow-hidden rounded-lg shadow-xl">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="mt-5">
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="text-sm text-gray-500">{description}</p>
        <div className="flex justify-start mt-2">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
            <span className="w-2 h-2 rounded-full bg-blue-500 mr-1"></span>
            {badgeText}
          </span>
        </div>
      </div>
    </div>
  )
}

FuturePlanCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  badgeText: PropTypes.string.isRequired,
}

const HowItWorks = () => {
  const features = [
    {
      icon: "/images/How1.png",
      title: "Zk-Login",
      description:
        "Securely log in to Suimail using zero-knowledge proofs, ensuring privacy and security.",
    },
    {
      icon: "/images/IT2.png",
      title: "Mail Encryption",
      description:
        "Protect your emails with advanced encryption, ensuring your communication stays private.",
    },
    {
      icon: "/images/Works1.png",
      title: "Storage on Walrus",
      description:
        "Store your emails securely on decentralized storage powered by Walrus.",
    },
  ]

  return (
    <div className="text-center mb-20">
      <h2 className="text-3xl font-bold mb-10">How it works?</h2>
      <div className="grid grid-cols-1 xl:grid-cols-3 justify-center items-center gap-10 md:gap-20">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </div>
  )
}

const FuturePlans = () => {
  const plans = [
    {
      image: "/images/male.jpg",
      title: "Empower Your Organization",
      description: "Private branded communication branded by blockchain",
      badgeText: "Explore enterprise suite",
    },
    {
      image: "/images/small.jpg",
      title: "Build Your Web3 Community",
      description: "Token Gated communication, events and secure collaboration",
      badgeText: "Start your Community",
    },
    {
      image: "/images/creator.png",
      title: "Tools For Web3 Creators",
      description:
        "Monetize Your Content, Reach Your Audience, own your Platform",
      badgeText: "Launch your Newsletter",
    },
  ]

  return (
    <div>
      <h2 className="text-3xl font-bold text-center mb-10">Future Plans</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <FuturePlanCard key={index} {...plan} />
        ))}
      </div>
    </div>
  )
}

const HowItWorksAndFuturePlans = () => {
  return (
    <div className="bg-blue-50/50 px-6 py-16">
      <HowItWorks />
      <FuturePlans />
    </div>
  )
}

export default HowItWorksAndFuturePlans

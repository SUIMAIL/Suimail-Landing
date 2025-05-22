import { motion } from "framer-motion"

const icons = [
  {
    title: "Built on Sui Blockchain",
    description:
      "Suimail leverages the Sui blockchain to provide a fully decentralized email platform with advanced encryption layers, ensuring secure communications.",
    imageSrc: "/images/Encryption.png",
    icon: "Encryption",
    bg: "bg-white text-gray-900",
    reverse: false,
  },
  {
    title: "Self-Sovereign Identity (SSI)",
    description:
      "Empowering users with complete control over their identities, data and inboxes. Suimail eliminates the need for central authorities, ensuring privacy and autonomy.",
    imageSrc: "/images/Data_sovern.png",
    icon: "user",
    bg: "bg-blue-600 text-white",
    reverse: true,
  },
  {
    title: "Token Gated Inboxes",
    description: `Your inbox, your price. With SuiMail's Token-Gated Inboxes, you decide what it costs to reach you.
Set a fee only high-intent messages make it through. No more spam, just value.`,
    imageSrc: "/images/end2end.png",
    icon: "paper-plane",
    bg: "bg-white text-gray-900",
    reverse: false,
  },
  {
    title: "Data Sovereignty",
    description:
      "You own it. You control it. With SuiMail, your messages live on-chain and under your control, not on centralized servers. No surveillance, no exploitation. Just pure, private communication owned by you.",
    imageSrc: "/images/Data_Sovergn.png",
    icon: "database",
    bg: "bg-blue-600 text-white",
    reverse: true,
  },
]

const FeaturesSection = () => {
  const imageVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  const textVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  return (
    <section className="bg-gray-50 py-12">
      {/* Section Header */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex items-center">
          <img
            src="/images/tiny_logo.png"
            alt="Logo"
            className="h-8 w-8 mr-2"
          />
          <h2 className="text-xl font-semibold uppercase">SuiMail Features</h2>
        </div>
      </div>

      {/* Feature Items */}
      <div className="space-y-12">
        {icons.map((icons, idx) => (
          <div
            key={idx}
            className={
              `${icons.bg} ` +
              `flex flex-col ${
                icons.reverse ? "md:flex-row-reverse" : "md:flex-row"
              } items-center ` +
              "py-8 px-4 sm:px-6 lg:px-8"
            }
          >
            {/* Image */}
            <motion.div
              className="w-full md:w-1/2"
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <img
                src={icons.imageSrc}
                alt={icons.title}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </motion.div>

            {/* Text */}
            <motion.div
              className="w-full md:w-1/2 mt-6 md:mt-0 md:px-12"
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <h3 className="text-2xl font-semibold">{icons.title}</h3>
              <p className="mt-4 text-base leading-relaxed">
                {icons.description}
              </p>
              <div className="mt-6">
                <div
                  className={`${
                    icons.bg.includes("blue") ? "bg-white" : "bg-blue-50"
                  } inline-flex p-3 rounded-full`}
                >
                  <img
                    src={"/images/tiny_logo.png"}
                    alt={`${icons.imageSrc} icon`}
                    className="h-6 w-6"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FeaturesSection

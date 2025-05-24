import { motion } from "framer-motion"
import { cn } from "../lib/utils"

const features = [
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
    <section className="bg-white">
      <div className="w-full pt-20 pb-0 flex items-center justify-center">
        <h2 className="text-3xl font-bold">Our Features</h2>
      </div>

      <div>
        {features.map((feature, idx) => (
          <div key={idx} className={cn(feature.bg, "px-10 sm:px-0")}>
            <div
              className={cn(
                "max-w-6xl mx-auto flex items-center justify-center py-28 gap-y-12",
                feature.reverse
                  ? "flex-col lg:flex-row-reverse"
                  : "flex-col lg:flex-row"
              )}
            >
              <motion.div
                className="w-full lg:w-1/2 flex items-center justify-center group"
                variants={imageVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{
                  scale: 1.05,
                  transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                    mass: 1,
                    duration: 0.6,
                  },
                }}
              >
                <div className="group relative overflow-hidden rounded-lg">
                  <img
                    src={feature.imageSrc}
                    alt={feature.title}
                    className="relative z-10 w-[450px] h-auto rounded-lg shadow-lg object-cover transition-all duration-300 group-hover:shadow-xl"
                  />
                </div>
              </motion.div>

              <motion.div
                className="max-w-[500px] w-full lg:w-1/2 mt-6 lg:mt-0 lg:px-12"
                variants={textVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <h3 className="text-2xl font-semibold">{feature.title}</h3>
                <p className="mt-4 text-sm leading-relaxed">
                  {feature.description}
                </p>
                <div className="mt-6">
                  <div
                    className={`${
                      feature.bg.includes("blue") ? "bg-white" : "bg-blue-50"
                    } inline-flex p-3 rounded-full`}
                  >
                    <img
                      src={"/images/tiny_logo.png"}
                      alt={`${feature.imageSrc} icon`}
                      className="h-6 w-6"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FeaturesSection

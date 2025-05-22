import "react"
import { motion } from "framer-motion"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { FaXTwitter, FaInstagram } from "react-icons/fa6"

const teamMembers = [
  {
    name: "AbdulWahab Salisu ",
    role: "Team Lead",
    image: "/images/Zid.png",
    twitter: "Z1d_exe",
  },
  {
    name: "Oladipo Evangel",
    role: "Tech Lead",
    image: "/images/Evangel.png",
    twitter: "OladipoEvangel",
  },
  {
    name: "Abdullahi Wahab",
    role: "FrontEnd Dev",
    image: "/images/Abdol.png",
    twitter: "Abdol164",
  },
  {
    name: "Ukanah Dean",
    role: "BackEnd Dev",
    image: "/images/Dean.jpg",
    twitter: "OnesiUkanah",
  },
  {
    name: "AbdulWaliyu Jamiu",
    role: "UI Ux Designer",
    image: "/images/Waliy.png",
    twitter: "InspectorPambs",
  },
  {
    name: "Terawase Sarah",
    role: "Frontend/Blockchain",
    image: "/images/Sarah.png",
    twitter: "Sensationalsary",
  },
  {
    name: "Joel Abundant",
    role: "Product Designer",
    image: "/images/Joel.png",
    twitter: "The_Kre8tive",
  },
  {
    name: "Prime Solomon",
    role: "Graphics Designer",
    image: "/images/Prime.png",
    twitter: "GyangShom92128",
  },
  {
    name: "Abdullahi Sofiyallahi",
    role: "Community Manager",
    image: "/images/Sofiya.png",
    twitter: "amonyweb3",
  },
]

const teamMemberVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
}

const footerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
}

export default function TeamPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Team Section */}
      <section className="bg-purple-700 py-16 text-white text-center">
        <h2 className="text-lg tracking-wide uppercase mb-2">Our Team</h2>
        <h1 className="text-3xl font-bold mb-10">Meet The Team</h1>
        <div className="grid gap-6 px-4 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="bg-[rgba(253,253,253,0.8)] rounded-lg p-4 shadow hover:scale-105 transition-transform flex items-center gap-4"
              variants={teamMemberVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <img src={member.image} className="w-24 h-24 rounded-lg" />
              <div>
                <h3 className="text-sm font-bold text-black">{member.name}</h3>
                <p className="text-sm text-black">{member.role}</p>
                <a
                  href={`https://twitter.com/${member.twitter}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline text-sm flex items-center gap-1"
                >
                  <FaXTwitter className="text-blue-400" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="flex flex-col md:flex-row items-center justify-center gap-10 p-10 bg-white ">
        <motion.img
          src={"/images/4XL.png"}
          alt="Suimail Logo"
          className="w-100 h-32"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
        <motion.div
          className="max-w-md text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-2xl font-semibold mb-2">Subscribe to Suimail</h2>
          <p className="mb-4 text-gray-600">
            Stay updated with the latest features and updates from Suimail. Join
            our community and take your email experience to the next level.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
              Try Suimail for Free
            </button>
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded">
              Upgrade to Pro
            </button>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <motion.footer
        className="bg-blue-50 py-10 text-center md:text-left"
        variants={footerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-6xl mx-auto p-8 flex flex-col md:flex-row justify-between items-center">
          <img
            src={"/images/suimail-logo.png"}
            alt="Logo"
            className="mx-auto md:mx-0 h-12 md:h-16"
          />

          <div className="flex flex-col md:flex-row gap-4 text-sm text-gray-600 mt-4 md:mt-0">
            <div>
              <h3 className="font-semibold mb-1">Getting Started</h3>
              <p>
                Learn more about Suimail and how it can transform your email
                experience.
              </p>
              <p>Contact our support team for any inquiries or assistance.</p>
              <p>
                Find answers to common questions in our{" "}
                <a href="" className="text-blue-500">
                  {" "}
                  FAQ
                </a>{" "}
                section.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-6 px-12 text-xs text-gray-500">
          © 2025 SUIMAIL. All Rights Reserved. Empowering communication, one
          email at a time.
        </div>
        <div className="flex justify-center mt-4 space-x-4">
          <a href="https://x.com/SUIMAIL_">
            <FaXTwitter className="text-blue-400" />
          </a>
          <a href="https://github.com/SUIMAIL">
            <FaGithub className="text-gray-800" />
          </a>
          <a href="https://www.linkedin.com/company/suimail/">
            <FaLinkedin className="text-blue-700" />
          </a>
          <a href="https://www.instagram.com/suimail/">
            <FaInstagram className="text-pink-500" />
          </a>
        </div>
      </motion.footer>
    </div>
  )
}

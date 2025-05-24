import LogoItem from "./LogoItem"
import { TranslateWrapper } from "./TranslateWrapper"
import { MobileViewFeatures } from "./MobileViewFeatures"
import { useMediaQuery } from "../../../hooks/use-media-query"

const icons = [
  { name: "shield", path: "/images/send.png" },
  { name: "lock", path: "/images/padlock.png" },
  { name: "paper-plane", path: "/images/Sui.png" },
  { name: "user", path: "/images/tiny_logo.png" },
  { name: "droplet", path: "/images/Group.png" },
  { name: "shield", path: "/images/send.png" },
  { name: "lock", path: "/images/padlock.png" },
  { name: "shield", path: "/images/send.png" },
  { name: "lock", path: "/images/padlock.png" },
  { name: "paper-plane", path: "/images/Sui.png" },
]

const Features = () => {
  const isMobile = useMediaQuery("(max-width: 768px)")

  return (
    <div className="relative z-10 bg-blue-50 py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-16 mb-4">
        <p className="text-center text-2xl font-medium text-black mb-6">
          Powered by Sui On Campus
        </p>
      </div>

      <div className="mt-10">
        <div className="flex overflow-hidden gap-9">
          <TranslateWrapper>
            <LogoItemsTop />
          </TranslateWrapper>
          <TranslateWrapper>
            <LogoItemsTop />
          </TranslateWrapper>
          <TranslateWrapper>
            <LogoItemsTop />
          </TranslateWrapper>
        </div>
      </div>

      {isMobile && <MobileViewFeatures />}
    </div>
  )
}

const LogoItemsTop = () => (
  <>
    {icons.map((icon, index) => (
      <LogoItem
        key={`${index}-${icon.name}`}
        src={icon.path}
        label={icon.name}
      />
    ))}
  </>
)

export default Features

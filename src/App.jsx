import HeroSection from "./components/Herosection.jsx"
import FeaturesSection from "./components/features.jsx"
import Future from "./components/Future.jsx"
import Footer from "./components/Footer.jsx"

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <FeaturesSection />
      <Future />
      <Footer />
    </div>
  )
}

export default App

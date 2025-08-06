
import { Routes, Route } from 'react-router-dom';
import HeroSection from './components/Herosection.jsx';
import FeaturesSection from './components/features.jsx';
import Future from './components/Future.jsx';
import Footer from './components/Footer.jsx';
import WhitePaper from './components/WhitePaper.jsx';

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <HeroSection />
            <FeaturesSection />
            <Future />
            <Footer />
          </>
        }
      />
      <Route path="/whitepaper" element={<WhitePaper />} />
    </Routes>
  );
};
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

import { BrowserRouter,Navigate, Routes, Route } from 'react-router-dom';
import HeroSection from './components/Herosection.jsx';
import FeaturesSection from './components/features.jsx';
import Future from './components/Future.jsx'
import Footer from './components/Footer.jsx';
const App = () => {
 
  return (
  <>
    <HeroSection/>
    <FeaturesSection/>
    <Future/>
    <Footer/>
  </>
  );
};

export default App;

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/LandingPage/NavBar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutUs';
import Contact from './pages/Contact';
import Faq from './pages/Faq';
import AOS from 'aos';
import 'aos/dist/aos.css';
import  { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,  // Animation duration in milliseconds
      delay: 300,      // Delay before animation starts
      once: false,     // Allows the animation to happen multiple times
      mirror: true, // Animation will happen every time the element comes into view
    });
  }, []);
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage/>} />
            <Route path="/product/money-transfer" element={<div>Product 1 Page</div>} />
        <Route path="/product/virtual-card" element={<div>Product 2 Page</div>} />
        <Route path="/product/currency-exchange" element={<div>Product 3 Page</div>} />
        <Route path="/product/foreign-account" element={<div>Product 4 Page</div>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/faq" element={<Faq/>} />
        <Route path="/login" element={<div>Login Page</div>} />
        <Route path="/signup" element={<div>Signup Page</div>} />
        <Route path="/contact" element={<Contact/>} />
     
      </Routes>
    </BrowserRouter>
  );
};

export default App;

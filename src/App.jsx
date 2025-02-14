import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/LandingPage/NavBar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutUs';
import Contact from './pages/Contact';
import Signup from './pages/signup';
import Faq from './pages/Faq';
import signup from './pages/signup.jsx'
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
        <Route path="/signup" element={<Signup/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/signup" element={<div>Signup</div>} />
        <Route path="/contact" element={<div>contact us</div>} />
     
      </Routes>
    </BrowserRouter>
  );
};

export default App;

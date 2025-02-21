import { BrowserRouter,Navigate, Routes, Route } from 'react-router-dom';
import NavBar from './components/LandingPage/NavBar';
import HomePage from './pages/HomePage';
import signup from './pages/signup.jsx'
import AboutPage from './pages/AboutUs';
import Contact from './pages/Contact';
import SignupPage from './pages/signup';
import Faq from './pages/Faq';
import AOS from 'aos';
import Dashboard from './components/UserDashboard/DashboardOverview';
import 'aos/dist/aos.css';
import  { useEffect } from 'react';
//import Dashboard from './components/UserDashboard/DashboardOverview';
import AdminLayout from './AppLayout/AppLayout';
import AccountLayout from './AppLayout/AccountLayout';
import Account from './components/UserDashboard/Acount';
import Ton from './components/UserDashboard/Account/Ton';
import Etherum from './components/UserDashboard/Account/Eth';
import Nigeria from './components/UserDashboard/Account/Nig';
import Base from './components/UserDashboard/Account/Base';
import Polygon from './components/UserDashboard/Account/Poly';
import Abitrium from './components/UserDashboard/Account/Arb';
import Login from './pages/Login';
import PaymentTable from './components/UserDashboard/Payment';







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
         {/*}   <Route path="/product/money-transfer" element={<div>Product 1 Page</div>} />
        <Route path="/product/virtual-card" element={<div>Product 2 Page</div>} />
        <Route path="/product/currency-exchange" element={<div>Product 3 Page</div>} />
        <Route path="/product/foreign-account" element={<div>Product 4 Page</div>} /> */}
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/faq" element={<Faq/>} />
        <Route path="/login" element={<div>Login Page</div>} />
        <Route path="/signup" element={<div>Signup</div>} />
        <Route path="/contact" element={<div>contact us</div>} />
        <Route path="/signup" element={<div>Signup Page</div>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignupPage/>} />
        <Route path="/contact" element={<Contact/>} />
         {/* Admin Routes (with Sidebar) */}





         <Route path="/dashboard" element={<AdminLayout />}>
  <Route index element={<Navigate replace to="overview" />} />
  <Route path="overview" element={<Dashboard />} />
  <Route path="payment" element={<PaymentTable />} />
  
  {/* ACCOUNT ROUTES */}
  <Route path="users" element={<AccountLayout />}>
  <Route index element={<Navigate replace to="account" />} />

    <Route path="account" element={<Account />} />
    <Route path="ton" element={<Ton />} />
    <Route path="ab" element={<Abitrium />} />
    <Route path="eth" element={<Etherum />} />
    <Route path="base" element={<Base />} />
    <Route path="poly" element={<Polygon />} />
    <Route path="nig" element={<Nigeria />} />
  </Route>
</Route>

     
      </Routes>
    </BrowserRouter>
  );
};

export default App;

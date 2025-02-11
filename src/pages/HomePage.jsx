import HomeAbout from '../components/LandingPage/AboutSection';
import HeroSection from '../components/LandingPage/HeroSection';
import CryptoLiveChart from '../components/LandingPage/CryptoPriceSection';
import GlobalAccount from '../components/LandingPage/GlobalAccount';
import Review from '../components/LandingPage/Review';
import Footer from '../components/LandingPage/Footer';
export default function HomePage (){
    return(
        <div className=" ">
         <HeroSection/>
          <HomeAbout/>
            <CryptoLiveChart/>
            <GlobalAccount />
            <Review />
            <Footer />
               </div>
    )
}
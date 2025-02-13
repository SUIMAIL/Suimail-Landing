import { NavLink } from "react-router-dom";
import { Minus,House, MoveUpRight,ShieldCheck, UserRoundPlus , CreditCard,Bitcoin, ChartCandlestick , ScanLine, HandCoins, PenOff} from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
export default function GlobalAccount() {
    return (
        <>
        <div className="bg-black overflow-hidden mt-8  h-fit text-white ">
        <div className="w-[90%] mx-auto md:py-16 py-10">
        <div className="flex gap-6 justify-between md:flex-row flex-col items-center">
        <div className=" w-[90%]">
           <div data-aos="fade-right" className="flex flex-col gap-4 md:gap-6 md:w-[80%]">
           <h1 className="font-bold text-4xl md:text-6xl ">A Borderless Global Account.</h1>
            <p>Open a global account designed to give you the financial freedom you deserve.  
            Enjoy seamless access to your funds and take complete control of your money anytime, anywhere.</p>
            <NavLink
            to="/signup"
            className='  bg-[#FAD129] text-gray-700 mt-4 md:mt-4 px-6 py-4 rounded-lg hover:bg-yellow-500 flex items-center gap-2 w-fit'
          >
            Create Account  <MoveUpRight className='size-4'/>
          </NavLink> 
           </div>
             </div>
        <div className="md:w-[50%]">
                        <video src="/img/gif.mp4" className="w-[100%] h-full object-cover" autoPlay muted loop />
                    </div>
        </div>

<div className="grid grid-cols-1 mt-5 md:grid-cols-3 gap-6">
<div data-aos="fade-right" className="flex flex-col    bg-gray-900 p-6 rounded-lg">
<CreditCard className="size-16 pb-5" />
    <h6 className="flex items-center text-yellow-500 mb-3 gap-1 font-bold">01  <Minus /></h6>
    <h3 className="font-semibold py-2 text-2xl">Zero Account & Card Maintenance Fees. </h3>
<p className="text-sm">Enjoy financial freedom without hidden charges.</p>
</div>

<div data-aos="fade-up"  className="flex flex-col    bg-gray-900 p-6 rounded-lg">
<Bitcoin className="size-16 pb-5"/>
    <h6 className="flex items-center text-yellow-500 gap-1 font-bold">02  <Minus /></h6>
    <h3 className="font-semibold py-2 text-2xl">Instant Crypto currency conversion. </h3>
    <p className="text-sm">Swap currencies seamlessly at competitive rates.</p>
</div>
<div data-aos="zoom-in" className="flex flex-col    bg-gray-900 p-6 rounded-lg">
<ChartCandlestick className="size-16 pb-5"/>
    <h6 className="flex items-center text-yellow-500 gap-1 font-bold">03  <Minus /></h6>
    <h3 className="font-semibold py-2 text-2xl">Real-Time Crypto Market Updates. </h3>
    <p className="text-sm">Stay ahead with up-to-the-minute price insights.</p>
</div>
<div data-aos="fade-right"  className="flex flex-col    bg-gray-900 p-6 rounded-lg">
<ScanLine className="size-16 pb-5"/>
    <h6 className="flex items-center text-yellow-500 gap-1 font-bold">04  <Minus /></h6>
    <h3 className="font-semibold py-2 text-2xl">Fast & Secure Transactions. </h3>
    <p className="text-sm">Experience safe and speedy financial operations.</p>
</div>

<div data-aos="zoom-in"  className="flex flex-col    bg-gray-900 p-6 rounded-lg">
<HandCoins className="size-16 pb-5"/>
    <h6 className="flex items-center text-yellow-500 gap-1 font-bold">05  <Minus /></h6>
    <h3 className="font-semibold py-2 text-2xl">Flexible Payment Options. </h3>
    <p className="text-sm"> Manage multiple payment methods effortlessly.</p>
</div>

<div data-aos="fade-left"  className="flex flex-col    bg-gray-900 p-6 rounded-lg">
<PenOff  className="size-16 pb-5"/>
    <h6 className="flex text-yellow-500 items-center gap-1 font-bold">06  <Minus /></h6>
    <h3 className="font-semibold py-2 text-2xl">No Border Restrictions. </h3>
    <p className="text-sm"> Access your funds globally without limitations.</p>
</div>


</div>

        </div>
        <div className="md:mt-20 text-gray-900 md:w-[70%] mx-auto mt-10 w-[90%]">
        <h2 className="text-sm text-yellow-500 uppercase text-center font-semibold">HOW IT WORKS</h2>
        <h3 className="font-semibold text-white md:leading-[56px] text-3xl leading-[45px]  mx-auto  md:text-5xl text-center capitalize">3 simple steps to set up your Key-Chain account.</h3>

      <Swiper
        modules={[Pagination, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
       
        className=" mx-auto mt-10"

        loop={true}  // Infinite looping
        speed={1000}  // Smooth transition (in ms)
        autoplay={{
          delay: 2000,  // 2 seconds delay
          disableOnInteraction: false,  // Continue autoplay after interaction
        }}
      >
        <SwiperSlide>
          <div className="bg-blue-100 rounded-lg px-6 md:px-12 py-6 flex items-center justify-center gap-3 md:gap-12 md:flex-row flex-col">
           <div className='flex flex-col gap-3'>
           <UserRoundPlus  className="text-blue-600 size-12"/>
           <h4 className='font-semibold text-3xl text-gray-600'>Create an account</h4>
<p className='text-gray-900 text-sm'>Sign up with your legal names, set up a strong password, and confirm email verification code.</p>
</div>
<img src='/img/verify.png' className='md:w-[20%] w-[55%]'/>

          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-blue-100 rounded-lg px-6 md:px-12 gap-3 md:gap-12 md:flex-row flex-col py-6  flex items-center justify-center">
         
<div className='flex flex-col gap-3' >
<ShieldCheck className="text-blue-600 size-12"/>
<h4 className='font-semibold text-3xl text-gray-600'> Verify your account</h4>
<p className='text-gray-900 text-sm'>Complete details such as your profile, bank, employment, and identity verification.</p>
</div>

<img src='/img/verify2.png' className='md:w-[30%] w-[95%]'/>

          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-blue-100 rounded-lg gap-3 md:gap-12 md:flex-row flex-col px-6 md:px-12 py-6 mb-10 flex items-center justify-center">
          
<div className='flex flex-col gap-3'>
<House className="text-blue-600 size-12" />
<h4 className='font-semibold text-3xl text-gray-600'> Create your bank accounts & debit cards</h4>
<p className='text-gray-900 text-sm'>At this stage, you are on your way to getting paid, hassle-free.</p>
</div>
<img src='/img/phone.png' className='md:w-[25%] w-[40%]'/>

          </div>
        </SwiperSlide>
      </Swiper>
    </div>





        </div>
<div className="w-[90%] overflow-hidden mx-auto mt-10 md:mt-20">
<div className="bg-slate-200 h-fit rounded-xl flex px-[5%] py-[8%] md:p-[5%] gap-8 md:gap-12 md:flex-row flex-col">
<div data-aos="fade-right" className="flex flex-col  gap-3 md:gap-6">
    <h2 className="font-semibold text-3xl md:text-5xl">Creating Impact, Together. </h2>
    <p className="text-sm text-gray-700">At <span className="text-yellow-500 font-bold">Key-Chain</span>, we’re committed to making a difference. Through our social impact programs and corporate responsibility initiatives, we support meaningful causes and uplift the communities we serve. Partnering with us means more than seamless global transactions — it’s about creating positive change together. </p>
    <NavLink
            to="/signup"
            className='  bg-[#FAD129] text-gray-700 mt-4 md:mt-4 px-6 py-4 rounded-lg hover:bg-yellow-500 flex items-center gap-2 w-fit'
          >
            Get started--it&apos;s free  <MoveUpRight className='size-4'/>
          </NavLink> 
</div>
<img  data-aos="fade-left" src="/img/keychain.jpg" className="md:w-[50%] md:h-[400px] h-[220px] rounded-3xl" />
</div>



</div>



        </>
    )
}
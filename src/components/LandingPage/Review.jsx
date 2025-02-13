import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Review() {
  return (
    <div className="md:mt-20 md:w-[70%] mx-auto mt-10 w-[90%]">
        <h2 className="text-sm text-[#FAD129] uppercase text-center font-semibold">Customers Review</h2>
<h3 className="font-semibold md:leading-[56px] text-3xl leading-[45px]  mx-auto  md:text-5xl text-center capitalize">What our users says about Key-Chain.</h3>

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
            <img src='/img/img.png' className='md:w-[30%] w-[40%]'/>
<div className='flex flex-col gap-1'>
    <p className='text-sm '>Key-Chain revolutionizes financial freedom. With live crypto tracking, instant swaps, and zero maintenance fees, it empowers seamless transactions across borders. Its intuitive platform is designed for both novices and experts alike.</p>
<h4 className='font-semibold tex-xl'>— John Doe</h4>
<p className='text-gray-500 text-sm'>Financial Analyst</p>
</div>

          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-green-100 rounded-lg px-6 md:px-12 gap-3 md:gap-12 md:flex-row flex-col py-6  flex items-center justify-center">
          <img src='/img/img1.png' className='md:w-[30%] w-[40%]' />
<div className='flex flex-col gap-1' >
    <p className='text-sm '>Key-Chain stands out as a game-changer for crypto enthusiasts. From live market updates to secure swaps, it offers unparalleled financial control with zero hidden charges.</p>
<h4 className='font-semibold text-xl'>— Jane Smith</h4>
<p className='text-gray-500 text-sm'>Blockchain Consultant</p>
</div>


          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-yellow-100 rounded-lg gap-3 md:gap-12 md:flex-row flex-col px-6 md:px-12 py-6 mb-10 flex items-center justify-center">
          <img src='/img/img.png' className='md:w-[30%] w-[40%]'/>
<div className='flex flex-col gap-1'>
    <p className='text-sm '>Key-Chain offers a secure and user-friendly way to manage your finances. The platform&apos;s live price tracking and seamless swap features redefine asset management.</p>
<h4 className='font-semibold text-xl'>— Alex Johnson</h4>
<p className='text-gray-500 text-sm'>Tech Enthusiast</p>
</div>

          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
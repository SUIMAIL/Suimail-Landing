import {  CircleArrowRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';
export default function HomeAbout() {
    return(
        <>
        <div className="md:py-12 pt-12 pb-8 mx-auto text-center">
            <h1 data-aos="zoom-in" className="font-semibold text-3xl md:leading-[32px] flex items-center justify-center md:gap-5 flex-col md:text-5xl"> Banking without borders, <span className="font-bold text-yellow-500 flex items-center justify-center">  wherever you go.</span></h1>

              </div>

<div className='grid grid-cols-1 md:grid-cols-3  gap-8 w-[90%]  md:space-y-5 mx-auto pb-8'>
<div data-aos="fade-right" className=' mx-auto flex flex-col gap-2 shadow-2xl p-8 rounded-lg'>
<h5 className="text-sm text-yellow-500 font-semibold ">FOREIGN BANK ACOUNT</h5>
<h2 className='text-2xl font-bold'>Get global bank account</h2>
<p className='text-sm'>Open a bank account in minutes to start spending, saving, and investing in foreign currencies.</p>
<NavLink to="/" className="text-blue-500 flex items-center place-items-center gap-2">Get it now  <CircleArrowRight  className='size-6 pt-2'/></NavLink>
</div>

<div data-aos="zoom-in" className='w-[70] mx-auto  flex flex-col gap-2 shadow-2xl p-8 rounded-lg'>
<h5 className="text-sm text-yellow-500 font-semibold ">VIRTUAL CARD</h5>
<h2 className='text-2xl font-bold'>Shop And spend globally</h2>
<p className='text-sm'>Get a virtual card to make online payments and shop from international stores.</p>
<NavLink to="/" className="text-blue-500 flex items-center place-items-center gap-2">Get your card  <CircleArrowRight  className='size-6 pt-2'/></NavLink>
</div>

<div data-aos="fade-up" className='w-[70] mx-auto  flex flex-col gap-2 shadow-2xl p-8 rounded-lg'>
<h5 className="text-sm text-yellow-500 font-semibold ">CURRENCY EXCHANGE</h5>
<h2 className='text-2xl font-bold'>Convert money at the best rate</h2>
<p className='text-sm'>Get the best exchange rates for your currency conversion needs.</p>
<NavLink to="/" className="text-blue-500 flex items-center place-items-center gap-2">convert money  <CircleArrowRight  className='size-6 pt-2'/></NavLink>
</div>

<div data-aos="fade-up" className='w-[70] mx-auto  flex flex-col gap-2 shadow-2xl p-8 rounded-lg'>
<h5 className="text-sm text-yellow-500 font-semibold ">MONEY TRANSFER</h5>
<h2 className='text-2xl font-bold'>Send money across the world</h2>
<p className='text-sm'>Transfer money to your loved ones in any part of the world.</p>
<NavLink to="/" className="text-blue-500 flex items-center place-items-center gap-2">Make a transfer  <CircleArrowRight  className='size-6 pt-2'/></NavLink>
</div>


</div>



        </>
    )
}
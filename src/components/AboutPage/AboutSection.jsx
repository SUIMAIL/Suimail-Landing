import { useRef, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { MoveUpRight } from 'lucide-react'; // Replace 'some-icon-library' with the actual library name

export default function AboutSection() {
    const textContainerRef = useRef(null);
    const [isTextScrolled, setIsTextScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const textContainer = textContainerRef.current;
            if (textContainer.scrollTop + textContainer.clientHeight >= textContainer.scrollHeight) {
                setIsTextScrolled(true);
            } else {
                setIsTextScrolled(false);
            }
        };

        const textContainer = textContainerRef.current;
        textContainer.addEventListener('scroll', handleScroll);

        return () => {
            textContainer.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="w-[90%] overflow-hidden mb-[10%] mx-auto  mt-8 md:mt-16  flex flex-col">
            <h2 data-aos="zoom in" className="text-center text-3xl font-bold">Who We Are</h2>
            <div className="flex md:h-[450px] gap-12 mt-6   md:mt-14 md:flex-row flex-col">
                <div
                    className={`flex flex-col md:pb-20 gap-2 md:w-[80%] md:overflow-y-scroll m${isTextScrolled ? 'md:overflow-y-auto' : ''}`}
                    ref={textContainerRef}
                >
                    <div data-aos="fade-up" className="flex flex-col gap-1">
                        <h3 className="font-semibold text-xl">Our Mission</h3>
                        <p className="text-sm">
                            At Key-chain, we are driven by a simple yet ambitious goal: to make cryptocurrencies a seamless part of everyday life. We believe that digital currencies have the potential to revolutionize the way we think about money and commerce, and we are committed to making that vision a reality.
                        </p>
                    </div>
                    <div data-aos="fade-up" className="flex flex-col gap-1">
                        <h3 className="font-semibold text-xl">Our Story</h3>
                        <p className="text-sm">
                            Our journey began with a shared frustration: the complexity and inconvenience of using cryptocurrencies for everyday transactions. As enthusiasts of digital currencies, we knew that they offered a faster, more secure, and more transparent alternative to traditional payment systems. But we also knew that their potential was being held back by clunky user experiences, limited adoption, and a lack of infrastructure.
                        </p>
                    </div>
                    <div data-aos="fade-up" className="flex flex-col gap-1">
                        <h3 className="font-semibold text-xl">Our Solution</h3>
                        <p className="text-sm">
                            That is why we created Key-chain: a platform that empowers individuals and businesses to effortlessly use cryptocurrencies for everyday transactions. Our solution is designed to be intuitive, secure, and scalable, with the goal of making digital currencies a mainstream part of commerce.
                        </p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h3  data-aos="fade-up"  className="font-semibold text-xl">Our Values</h3>
                        <p  data-aos="fade-up"  className="text-sm">
                            <b className="text-sm">Innovation:</b> We are committed to pushing the boundaries of what is possible with cryptocurrencies and blockchain technology.
                        </p>
                        <p  data-aos="fade-up"  className="text-sm">
                            <b className="text-sm">Simplicity:</b> We believe that complexity is the enemy of adoption, and we are dedicated to making our platform easy to use for everyone.
                        </p>
                        <p  data-aos="fade-up"  className="text-sm">
                            <b className="text-sm">Security:</b> We take the security of our users assets seriously, and we are committed to implementing the highest standards of protection and encryption.
                        </p>
                        <p  data-aos="fade-up"  className="text-sm">
                            <b className="text-sm">Collaboration:</b> We believe that the future of cryptocurrencies is a collective effort, and we are committed to working with other innovators, entrepreneurs, and organizations to advance the ecosystem.
                        </p>
                    </div>
                    <div data-aos="fade-up" className="flex flex-col gap-1">
                        <h3 className="font-semibold text-xl">Our Team</h3>
                        <p className="text-sm">
                            Our team is comprised of experienced professionals from the worlds of finance, technology, and entrepreneurship. We are united by our passion for cryptocurrencies and our commitment to making them more accessible and user-friendly for everyone.
                        </p>
                    </div>
                    <div data-aos="fade-up" className="flex flex-col gap-1">
                        <h3 className="font-semibold text-xl">Join Us</h3>
                        <p className="text-sm">
                            If you are as excited about the potential of cryptocurrencies as we are, we invite you to join us on this journey. Whether you are an investor, a partner, or simply someone who shares our vision, we look forward to working together to create a future where digital currencies are a seamless part of everyday life.
                        </p>
                    </div>
                    <p  data-aos="fade-up"  className="text-sm">
                        To create a world where cryptocurrencies are effortlessly woven into the fabric of everyday life, empowering individuals and businesses to transact freely, securely, and without boundaries.
                    </p>

                  
                </div>
                <div data-aos="fade-left" className={`hidden md:block md:flex-shrink-0 ${isTextScrolled ? 'overflow-y-auto' : ''}`}>
                    <img src="/img/aboutbglogo.jpg" className="h-[450px] w-[100%]" />
                </div>
            </div>
            <NavLink data-aos="zoom-in"
            to="/signup"
            className='  bg-[#FAD129] text-gray-700 mt-8 md:mt-8 px-6 py-4 rounded-lg hover:bg-yellow-500 flex items-center gap-2 w-fit'
          >
            Get started--it&apos;s free  <MoveUpRight className='size-4'/>
          </NavLink> 
        </div>
    );
}
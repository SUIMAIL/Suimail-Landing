import React from "react";import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";

const images = [
  "/img/hero3.png",
  "/img/hero2.png",
  "/img/hero3.png"
];

const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-yellow-400 px-4 md:px-0">
      <div className="flex w-full max-w-5xl bg-gray-900 rounded-lg shadow-lg overflow-hidden">
        {/* Left Side - Image Slders for Desktop only */}
        <div className="hidden md:block md:w-1/2">
          <Carousel autoPlay infiniteLoop showThumbs={false} showArrows={false} showStatus={false}>
            {images.map((img, index) => (
              <div key={index}>
                <img src={img} alt={`Slide ${index + 1}`} className="object-cover w-full h-full" />
              </div>
            ))}
          </Carousel>
        </div>

        {/* Right Side - Signup Form */}
        <div className="w-full md:w-1/2 p-8 space-y-6">
          <h2 className="text-3xl font-bold text-center">Sign Up for Key Chain</h2>
          <p className="text-sm text-center text-gray-400">
            Seamless cryptocurrency payments for everyday transactions
          </p>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                className="w-full p-3 mt-1 rounded-md bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-yellow-500"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Password</label>
              <input
                type="password"
                className="w-full p-3 mt-1 rounded-md bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-yellow-500"
                placeholder="Enter your password"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Confirm Password</label>
              <input
                type="password"
                className="w-full p-3 mt-1 rounded-md bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-yellow-500"
                placeholder="Confirm your password"
              />
            </div>
            <button className="w-full py-3 mt-4 font-semibold text-black bg-yellow-400 rounded-md hover:bg-yellow-500">
              Sign Up
            </button>
          </form>
          <p className="text-center text-gray-400 text-sm">
            Already have an account? <a href="/login" className="text-yellow-400 hover:underline">Log in</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;

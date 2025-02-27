import { useState } from "react";
import { NavLink } from "react-router-dom";

function VirtualCard() {
  const [isCardCreated, setIsCardCreated] = useState(false);
  const [isAgreed, setIsAgreed] = useState(false);
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "4859 XXXX XXXX 7162",
    cardHolder: "JOHN SMITH",
    expiryDate: "12/28",
    cvv: "***"
  });

  const createVirtualCard = () => {
    // Only create the card if the user has checked the agreement
    if (isAgreed) {
      // In a real app, this would make an API call to create the card(backend-stuff)
      setIsCardCreated(true);
    }
  };

  const handleAgreementChange = (e) => {
    setIsAgreed(e.target.checked);
  };

  return (
    <div className="md:pt-[18%] md:pl-8 pt-[55%] md:w-[78%] absolute -z-20 overflow-x-hidden mb-32 w-[100%] mx-auto flex flex-col gap-6 md:gap-10">
      <div className="w-[95%] mx-auto p-4 rounded-xl flex flex-col gap-6">
        {!isCardCreated ? (
          <>
            {/* Header Section */}
            <div>
              <h1 className="text-3xl font-bold mb-2">How our cards work</h1>
              <p className="text-gray-600">Please read the following to understand how our cards work</p>
            </div>

            {/* Card Creation Fee */}
            <div className="flex items-start gap-4 py-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <span className="text-blue-500 text-xl">💳</span>
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="text-xl font-semibold">Card creation fee</h2>
                <p className="text-gray-500">
                  You will be charged a one-time $4 card creation and $1 funding fee, making it a total of $5.
                </p>
                <NavLink to="/learn-more-creation" className="text-blue-500 font-medium">
                  Learn more
                </NavLink>
              </div>
            </div>

            {/* Cross-border Charges */}
            <div className="flex items-start gap-4 py-4">
              <div className="bg-purple-100 p-3 rounded-full">
                <span className="text-purple-500 text-xl">🔄</span>
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="text-xl font-semibold">Cross-border charges</h2>
                <p className="text-gray-500">
                  You will incur a cross-border fee when using your card for non-USD payments, and on non-US platforms.
                </p>
                <NavLink to="/learn-more-charges" className="text-blue-500 font-medium">
                  Learn more
                </NavLink>
              </div>
            </div>

            {/* Card Termination */}
            <div className="flex items-start gap-4 py-4">
              <div className="bg-red-100 p-3 rounded-full">
                <span className="text-red-500 text-xl">⚠️</span>
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="text-xl font-semibold">Card termination</h2>
                <p className="text-gray-500">
                  Your card may be terminated if you have several failed transactions due to insufficient funds.
                </p>
                <NavLink to="/learn-more-termination" className="text-blue-500 font-medium">
                  Learn more
                </NavLink>
              </div>
            </div>
            
            {/* Checkbox and Create Button */}
            <div className="mt-6 flex flex-col gap-6">
              <div className="flex items-center gap-2">
                <input 
                  type="checkbox" 
                  id="agree" 
                  className="w-5 h-5 rounded" 
                  checked={isAgreed}
                  onChange={handleAgreementChange}
                />
                <label htmlFor="agree" className="text-gray-800 font-medium">
                  I understand, and agree to proceed
                </label>
              </div>
              
              <button 
                onClick={createVirtualCard}
                disabled={!isAgreed}
                className={`py-4 rounded-lg w-full font-medium transition duration-300 ${
                  isAgreed 
                    ? "bg-[#FAD129] text-black hover:bg-[#e9c32a] cursor-pointer" 
                    : "bg-gray-200 text-gray-500 cursor-not-allowed"
                }`}
              >
                Create virtual card
              </button>
            </div>
          </>
        ) : (
          // Virtual Card Display
          <div className="flex flex-col gap-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">Your Virtual Card</h1>
              <p className="text-gray-600">Your KeyChain virtual card is ready to use for online payments</p>
            </div>

            {/* KeyChain Virtual Card Design */}
            <div className="w-full max-w-md mx-auto">
              <div className="bg-gradient-to-r from-[#131313] to-[#2D2D2D] rounded-xl p-6 text-white shadow-lg relative overflow-hidden">
                {/* KeyChain Logo should be added but should be good to go like this */}
                <div className="absolute top-0 right-0 p-4">
                  <div className="flex items-center gap-2">
                    <span className="text-[#FAD129] font-bold">KEY</span>
                    <span className="text-white font-bold">CHAIN</span>
                  </div>
                </div>

                {/* Card Chip */}
                <div className="mb-8 mt-2">
                  <div className="h-12 w-16 rounded-md bg-[#FAD129]"></div>
                </div>

                {/* Card Number */}
                <div className="mb-6">
                  <p className="text-sm text-gray-400 mb-1">Card Number</p>
                  <p className="text-xl tracking-wider">{cardDetails.cardNumber}</p>
                </div>

                {/* Card Details */}
                <div className="flex justify-between">
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Card Holder</p>
                    <p className="text-lg">{cardDetails.cardHolder}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Expires</p>
                    <p className="text-lg">{cardDetails.expiryDate}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">CVV</p>
                    <p className="text-lg">{cardDetails.cvv}</p>
                  </div>
                </div>

                {/* Pattern Design */}
                <div className="absolute bottom-0 left-0 right-0 h-24 opacity-10">
                  <div className="h-full w-full bg-[url('/img/pattern.svg')] bg-repeat-x"></div>
                </div>
              </div>
            </div>

            {/* Card Actions */}
            <div className="flex flex-col gap-4 max-w-md mx-auto w-full">
              <button className="bg-[#FAD129] text-black py-4 rounded-lg w-full font-medium hover:bg-[#e9c32a] transition duration-300">
                Copy card details
              </button>
              <button className="bg-white border border-gray-300 text-gray-800 py-4 rounded-lg w-full font-medium hover:bg-gray-50 transition duration-300">
                Freeze card
              </button>
            </div>

            {/* Usage Instructions */}
            <div className="mt-4 bg-blue-50 p-4 rounded-lg max-w-md mx-auto w-full">
              <h3 className="font-semibold text-blue-800 mb-2">How to use your virtual card</h3>
              <p className="text-blue-700 text-sm">
                Use this card for online payments just like a regular credit card. 
                For security reasons, your full card details are only shown once.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default VirtualCard;
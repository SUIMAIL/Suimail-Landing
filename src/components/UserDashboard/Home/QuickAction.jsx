

//import { useState } from "react"
//import { Eye, EyeOff } from "lucide-react"

const assets = [
  { name: "Send Crypto & Fiat Currency", img: "/img/send.png", currency: " Send Crypto to 80+ countries instanly" },

  { name: "Virtual Card", img: "/img/card.jpg",  currency: "Shop, subscribe and pay bills securely online" },
  { name: "Pay Bills", img: "/img/bill.png", currency: "Pay for your internet, cabel subscription and other utility bills all in one place" },
  
]

export default function QuickAction() {
 
  

  const scrollbarHideStyle = {
    msOverflowStyle: "none",
    scrollbarWidth: "none",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  }

  return (
    <div className="bg-white w-[95%] mx-auto overflow-hidden  shadow-lg  rounded-xl px-4 py-2 md:px-6 ">
      <div className="flex items-center justify- mb-4">
        <h2 className="text-lg font-semibold">Quick Action</h2>
       
      </div>

      {/* Horizontal Scrollable List */}
      <div className="overflow-x-scroll " style={scrollbarHideStyle}>
        <div className="flex space-x-4 pb-4 overflow-x-hidde [calc(100%+1rem)]">
          {assets.map((asset, index) => (
            <div
              key={index}
              className="flex-shrink-0  w-[calc(70%-0.0rem)] md:w-[calc(36.333%-0.667rem)] lg:w-[calc(30%-0.75rem)] bg-gray-50 p-4 rounded-lg shadow flex flex-col "
            >
              <img src={asset.img || "/placeholder.svg"} className="w-10 h-10 object-contain" alt={asset.name} />
              <h2 className="text-lg font-semibold mt-2">{asset.name}</h2>
              <p className="text-sm ">
                {asset.currency}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}


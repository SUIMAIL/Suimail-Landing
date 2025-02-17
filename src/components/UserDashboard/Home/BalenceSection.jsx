

import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"
import { NavLink } from "react-router-dom"

const assets = [
  { name: "AVAX", img: "/img/avax.png", amount: 567, currency: "$", href:'/dashboard/users/account' },
  { name: "ETH", img: "/img/eth.png", amount: 890, currency: "$", href:'/dashboard/users/eth' },
  { name: "TON", img: "/img/ton.png", amount: 12345, currency: "$", href:'/dashboard/users/ton' },
  { name: "POLY", img: "/img/poly.png", amount: 567, currency: "$", href:'/dashboard/users/poly' },
  { name: "BASE", img: "/img/base.png", amount: 890, currency: "$",href:'/dashboard/users/base' },
  { name: "ARBITRUM", img: "/img/ab.png", amount: 12345, currency: "$", href:'/dashboard/users/ab' },
  { name: "NIG", img: "/img/nig.png", amount: 890, currency: "₦", href:'/dashboard/users/nig' },
]

export default function BalanceSection() {
  const [isHidden, setIsHidden] = useState(false)

  const toggleVisibility = () => {
    setIsHidden((prev) => !prev)
  }

  const scrollbarHideStyle = {
    msOverflowStyle: "none",
    scrollbarWidth: "none",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  }

  return (
    <div className="bg-white  w-[95%] mx-auto overflow-hidde  shadow-lg  rounded-xl px-4 py-2 md:px-6 ">
      <div className="flex items-center  mb-4">
        <h2 className="text-lg font-semibold">Total Assets</h2>
        <button onClick={toggleVisibility} className="p-2 rounded-full transition">
          {isHidden ? <EyeOff size={24} /> : <Eye size={24} />}
        </button>
      </div>

      {/* Horizontal Scrollable List */}
      <div className="overflow-x-scroll  " style={scrollbarHideStyle}>
        <div className="flex space-x-4 pb-4 ">
          {assets.map((asset, index) => (
            <NavLink to={asset.href}
              key={index}
              className="flex-shrink-0  w-[calc(40%-0.0rem)] md:w-[calc(33.333%-0.667rem)] lg:w-[calc(25%-0.75rem)] bg-gray-50 p-4 rounded-lg shadow flex flex-col items-center"
            >
              <img src={asset.img || "/placeholder.svg"} className="w-10 h-10 object-contain" alt={asset.name} />
              <h2 className="text-lg font-semibold mt-2">{asset.name}</h2>
              <p className="text-2xl font-bold">
                {isHidden ? "****" : `${asset.currency}${asset.amount.toLocaleString()}`}
              </p>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  )
}


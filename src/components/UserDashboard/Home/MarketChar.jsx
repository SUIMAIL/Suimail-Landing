

import { useState, useEffect } from "react"
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"

const API_URL =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true"

const simulatePriceChange = (price) => price * (0.999 + Math.random() * 0.002)

const LiveMarketChart = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL)
        const result = await response.json()
        setData(result)
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }

    fetchData()
    const fetchInterval = setInterval(fetchData, 60000)

    return () => clearInterval(fetchInterval)
  }, [])

  useEffect(() => {
    if (data.length === 0) return

    const simulateInterval = setInterval(() => {
      setData((prevData) =>
        prevData.map((coin) => {
          const newPrice = simulatePriceChange(coin.current_price)
          const newSparklineData = [...coin.sparkline_in_7d.price.slice(1), newPrice]
          return {
            ...coin,
            current_price: newPrice,
            price_change_percentage_24h: ((newPrice - coin.current_price) / coin.current_price) * 100,
            sparkline_in_7d: {
              price: newSparklineData,
            },
          }
        }),
      )
    }, 500) // Update every 500ms for smoother animation

    return () => clearInterval(simulateInterval)
  }, [data])


  

  return (
    <div className="p-4 bg-white shadow-lg rounded-lg w-[95%]  mx-auto">
    <h2 className="text-xl font-bold mb-4 py-6">Live Crypto Market</h2>
    <div className="w-full h-[200px] md:h-[300px] overflow-x-auto overflow-y-auto ">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2">Coin</th>
            <th className="border px-4 py-2">Price</th>
            <th className="border px-4 py-2">24h %</th>
            <th className="border px-4 py-2">Market Cap</th>
            <th className="border px-4 py-2">7d Chart</th>
          </tr>
        </thead>
        <tbody>
          {data.map((coin) => (
            <tr key={coin.id} className="text-center">
              <td className="border px-4 py-2 flex items-center space-x-2">
                <img src={coin.image || "/placeholder.svg"} alt={coin.name} className="w-6 h-6" />
                <span>
                  {coin.name} ({coin.symbol.toUpperCase()})
                </span>
              </td>
              <td className="border px-4 py-2">${coin.current_price.toFixed(2)}</td>
              <td
                className={`border px-4 py-2 ${
                  coin.price_change_percentage_24h >= 0 ? "text-green-500" : "text-red-500"
                }`}
              >
                {coin.price_change_percentage_24h.toFixed(2)}%
              </td>
              <td className="border px-4 py-2">${coin.market_cap.toLocaleString()}</td>
              <td className="border px-4 py-2">
                <ResponsiveContainer width={100} height={40}>
                  <LineChart data={coin.sparkline_in_7d.price.map((price, index) => ({ index, price }))}>
                    <XAxis dataKey="index" hide />
                    <YAxis domain={["auto", "auto"]} hide />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="price"
                      stroke={coin.price_change_percentage_24h >= 0 ? "#33FF57" : "#FF5733"}
                      dot={false}
                      strokeWidth={2}
                      isAnimationActive={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  
  )
}

export default LiveMarketChart


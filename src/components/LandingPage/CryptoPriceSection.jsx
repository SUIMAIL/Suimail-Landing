

import { useState, useEffect } from "react"
import { Line, LineChart, ResponsiveContainer } from "recharts"
import { fetchTopCryptos, simulatePriceChange } from "../../utils/api"
export default function CryptoLiveChart() {
  const [cryptos, setCryptos] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchTopCryptos()
        setCryptos(data)
      } catch {
        setError("Failed to fetch crypto data. Please try again later.")
      }
    }

    fetchData()
    const fetchInterval = setInterval(fetchData, 60000) // Refresh data from API every minute

    return () => clearInterval(fetchInterval)
  }, [])

  useEffect(() => {
    if (cryptos.length === 0) return

    const simulateInterval = setInterval(() => {
      setCryptos((prevCryptos) =>
        prevCryptos.map((crypto) => ({
          ...crypto,
          current_price: simulatePriceChange(crypto.current_price),
          price_change_percentage_24h: (Math.random() - 0.5) * 10, // Simulate 24h change between -5% and 5%
          sparkline_in_7d: {
            price: [
              ...crypto.sparkline_in_7d.price.slice(1),
              simulatePriceChange(crypto.sparkline_in_7d.price[crypto.sparkline_in_7d.price.length - 1]),
            ],
          },
        })),
      )
    }, 2000) // Update prices every 2 seconds

    return () => clearInterval(simulateInterval)
  }, [cryptos])

  if (error) {
    return <div className="text-red-500 text-center pb-5">{error}</div>
  }

  return (
    <div className="w-full max-w-4xl mx-auto mt-6  p-4  flex flex-col gap-3 md:gap-3">
<div data-aos="zoom-in">
<h2 className="text-sm text-[#FAD129] uppercase text-center font-semibold">Swap & Stay Ahead</h2>
      <h1 className="font-semibold md:leading-[56px] text-3xl leading-[45px]  mx-auto  md:text-5xl text-center">Real-time crypto market,<br></br><span className="text-[#FAD129]">updates.</span> </h1>
   
</div>
   <table data-aos="fade-up" className="w-full mt-6 mx-auto">
        <thead>
          <tr>
            <th className="text-left">Name</th>
            <th className="text-left">Price</th>
            <th className="text-left">24h Change</th>
            <th className="text-left">Chart (7d)</th>
          </tr>
        </thead>
        <tbody>
          {cryptos.slice(0, 5).map((crypto) => (
            <tr key={crypto.id} className="border-t">
              <td className="py-2">
                <div className="flex items-center gap-2">
                  <img src={crypto.image || "/placeholder.svg"} alt={crypto.name} className="w-6 h-6 mr-2" />
                  {crypto.name}
                </div>
              </td>
              <td className="px-4 md:px-auto">${crypto.current_price.toFixed(2)}</td>
              <td className={crypto.price_change_percentage_24h >= 0 ? "text-green-600 " : "text-red-600 "}>
                {crypto.price_change_percentage_24h.toFixed(2)}%
              </td>
              <td>
                <div className="h-16 pt-5 md:pt-8 md:w-32 ">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={crypto.sparkline_in_7d.price.map((price, index) => ({ price, index }))}>
                      <Line
                        type="monotone"
                        dataKey="price"
                        stroke={crypto.price_change_percentage_24h >= 0 ? "#10b981" : "#ef4444"}
                        dot={false}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}


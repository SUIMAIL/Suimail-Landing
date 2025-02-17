export const fetchMarketChart = async (coinId = "bitcoin") => {
    try {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=1&interval=minute`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch market chart");
      }
      const data = await response.json();
      return data.prices.map(([timestamp, price]) => ({
        time: new Date(timestamp).toLocaleTimeString(),
        price,
      }));
    } catch (error) {
      console.error(error);
      return [];
    }
  };
  
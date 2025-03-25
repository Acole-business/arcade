'use client';

import { useState } from 'react';

function CoinCounter() {
  const [coins, setCoins] = useState({
    pennies: 0,
    nickels: 0,
    dimes: 0,
    quarters: 0,
  });

  const handleIncrement = (coinType: keyof typeof coins) => {
    setCoins((prev) => ({
      ...prev,
      [coinType]: prev[coinType] + 1,
    }));
  };

  const handleDecrement = (coinType: keyof typeof coins) => {
    setCoins((prev) => ({
      ...prev,
      [coinType]: Math.max(0, prev[coinType] - 1),
    }));
  };

  const resetCoins = () => {
    setCoins({ pennies: 0, nickels: 0, dimes: 0, quarters: 0 });
  };

  return (
    <div className="p-6 bg-white rounded-2xl shadow-xl space-y-6 w-96">
      <h2 className="text-2xl font-bold text-center">Coin Counter</h2>

      <div className="space-y-4">
        {Object.keys(coins).map((coin) => (
          <div
            key={coin}
            className="flex items-center justify-between gap-4 border rounded-xl p-3 shadow"
          >
            <span className="font-semibold capitalize">{coin}</span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleDecrement(coin as keyof typeof coins)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                -
              </button>
              <span className="w-6 text-center">{coins[coin as keyof typeof coins]}</span>
              <button
                onClick={() => handleIncrement(coin as keyof typeof coins)}
                className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={resetCoins}
        className="bg-gray-800 text-white px-10 py-3 rounded-2xl shadow-xl hover:bg-gray-900 w-full"
      >
        Reset All
      </button>
    </div>
  );
}

export default function CoinCounterApp() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-8 space-y-6">
      <CoinCounter />
    </main>
  );
}

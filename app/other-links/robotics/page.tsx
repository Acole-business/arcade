'use client';

import { useState } from 'react';

export default function AlgaeAndLevelsPage() {
  const [levels, setLevels] = useState({
    L1: 0,
    L2: 0,
    L3: 0,
    L4: 0,
  });

  const [processor, setProcessor] = useState(0);
  const [net, setNet] = useState(0);

  const handleIncrement = (level: keyof typeof levels) => {
    setLevels((prev) => ({
      ...prev,
      [level]: prev[level] + 1,
    }));
  };

  const handleDecrement = (level: keyof typeof levels) => {
    setLevels((prev) => ({
      ...prev,
      [level]: prev[level] - 1,
    }));
  };

  const resetAll = () => {
    setLevels({ L1: 0, L2: 0, L3: 0, L4: 0 });
    setProcessor(0);
    setNet(0);
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white rounded-2xl shadow-xl space-y-8 w-96">
        <h1 className="text-3xl font-bold text-center">Algae & Levels Control</h1>

        {/* Levels Section */}
        <div className="space-y-4">
          {Object.keys(levels).map((level) => (
            <div
              key={level}
              className="flex items-center justify-between gap-4 border rounded-xl p-4 shadow"
            >
              <span className="font-semibold">{level}</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleDecrement(level as keyof typeof levels)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  -
                </button>
                <span className="w-6 text-center">{levels[level as keyof typeof levels]}</span>
                <button
                  onClick={() => handleIncrement(level as keyof typeof levels)}
                  className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Algae Section */}
        <div className="space-y-4 pt-4 border-t">
          <div className="flex items-center justify-between gap-4 border rounded-xl p-4 shadow">
            <span className="font-semibold">Processor</span>
            <div className="flex items-center gap-2">
              <span className="text-xl">{processor}</span>
              <button
                onClick={() => setProcessor((prev) => prev + 1)}
                className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
              >
                Add Algae
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between gap-4 border rounded-xl p-4 shadow">
            <span className="font-semibold">Net</span>
            <div className="flex items-center gap-2">
              <span className="text-xl">{net}</span>
              <button
                onClick={() => setNet((prev) => prev + 1)}
                className="bg-teal-500 text-white px-3 py-1 rounded hover:bg-teal-600"
              >
                Add Algae
              </button>
            </div>
          </div>
        </div>

        {/* Reset Button */}
        <div className="pt-4 border-t text-center">
          <button
            onClick={resetAll}
            className="bg-gray-700 text-white px-6 py-2 rounded hover:bg-gray-800"
          >
            Reset All
          </button>
        </div>
      </div>
    </main>
  );
}

'use client';

import { useState } from 'react';

export default function RoboticsPage() {
  const [levels, setLevels] = useState({
    L1: 0,
    L2: 0,
    L3: 0,
    L4: 0,
  });

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

  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white rounded-2xl shadow-xl">
        <h1 className="text-3xl font-bold mb-6 text-center">Robotics Levels Control</h1>
        <div className="space-y-4">
          {Object.keys(levels).map((level) => (
            <div
              key={level}
              className="flex items-center justify-between gap-4 border rounded-xl p-4 shadow-md w-72 mx-auto"
            >
              <span className="w-8 font-semibold">{level}</span>
              <button
                onClick={() => handleDecrement(level as keyof typeof levels)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                -
              </button>
              <span className="w-8 text-center">{levels[level as keyof typeof levels]}</span>
              <button
                onClick={() => handleIncrement(level as keyof typeof levels)}
                className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
              >
                +
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

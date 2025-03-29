'use client';

import { useState } from 'react';

function ControlPanel({
  title,
  levels,
  setLevels,
  processor,
  setProcessor,
  net,
  setNet,
  hideAlgae,
}: {
  title: string;
  levels: { L1: number; L2: number; L3: number; L4: number };
  setLevels: React.Dispatch<React.SetStateAction<{ L4: number; L3: number; L2: number; L1: number }>>;
  processor?: number;
  setProcessor?: React.Dispatch<React.SetStateAction<number>>;
  net?: number;
  setNet?: React.Dispatch<React.SetStateAction<number>>;
  hideAlgae?: boolean;
}) {
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
    <div className="p-6 bg-white rounded-2xl shadow-xl space-y-6 w-96">
      <h2 className="text-2xl font-bold text-center">{title}</h2>

      {/* Levels Section */}
      <div className="space-y-4">
        {Object.keys(levels).map((level) => (
          <div
            key={level}
            className="flex items-center justify-between gap-4 border rounded-xl p-3 shadow"
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
      {!hideAlgae && (
        <div className="space-y-4 pt-4 border-t">
          <div className="flex items-center justify-between gap-4 border rounded-xl p-3 shadow">
            <span className="font-semibold">Processor</span>
            <div className="flex items-center gap-2">
              <span className="text-xl">{processor}</span>
              <button
                onClick={() => setProcessor && setProcessor((prev) => prev + 1)}
                className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
              >
                Add Algae
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between gap-4 border rounded-xl p-3 shadow">
            <span className="font-semibold">Net</span>
            <div className="flex items-center gap-2">
              <span className="text-xl">{net}</span>
              <button
                onClick={() => setNet && setNet((prev) => prev + 1)}
                className="bg-teal-500 text-white px-3 py-1 rounded hover:bg-teal-600"
              >
                Add Algae
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function AlgaeAndLevelsSplitPage() {
  const [autoLevels, setAutoLevels] = useState({ L4: 0, L3: 0, L2: 0, L1: 0 });

  const [teleopLevels, setTeleopLevels] = useState({ L4: 0, L3: 0, L2: 0, L1: 0 });
  const [teleopProcessor, setTeleopProcessor] = useState(0);
  const [teleopNet, setTeleopNet] = useState(0);

  const resetAll = () => {
    setAutoLevels({ L4: 0, L3: 0, L2: 0, L1: 0 });
    setTeleopLevels({ L4: 0, L3: 0, L2: 0, L1: 0 });
    setTeleopProcessor(0);
    setTeleopNet(0);
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-8 space-y-6">
      <div className="flex gap-8">
        <ControlPanel
          title="Auto"
          levels={autoLevels}
          setLevels={setAutoLevels}
          hideAlgae
        />
        <ControlPanel
          title="Teleop"
          levels={teleopLevels}
          setLevels={setTeleopLevels}
          processor={teleopProcessor}
          setProcessor={setTeleopProcessor}
          net={teleopNet}
          setNet={setTeleopNet}
        />
      </div>

      {/* Big Reset Button */}
      <button
        onClick={resetAll}
        className="bg-gray-800 text-white px-10 py-3 rounded-2xl shadow-xl hover:bg-gray-900"
      >
        Reset All
      </button>
    </main>
  );
}

// Game 39
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ClickGame() {
  const [score, setScore] = useState(0);

  const handleClick = () => {
    setScore((prevScore) => prevScore + 1);
  };

  return (
    <div className="min-h-screen bg-black text-green-500 font-mono p-4 flex flex-col">
      <div className="terminal-container flex-1 border border-green-500 rounded-md p-4 relative">
        <div className="scanline absolute top-0 left-0 w-full h-full pointer-events-none"></div>

        <div className="terminal-header flex items-center justify-between mb-4 border-b border-green-500 pb-2">
          <Link href="/" className="flex items-center gap-2 hover:text-green-400">
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Arcade</span>
          </Link>
          <div className="text-xs">arrowcole.xyz | Button Clicker v1.0</div>
        </div>

        <div className="game-container space-y-6 flex flex-col items-center justify-center">
          <p className="text-lg">Score: {score}</p>
          <Button onClick={handleClick} className="px-4 py-2 text-lg border border-green-500 hover:bg-green-900 hover:bg-opacity-30">
            Click Me!
          </Button>
        </div>
      </div>

      <div className="mt-4 text-xs text-center text-green-700">
        <p>Click the button to increase your score!</p>
      </div>
    </div>
  );
}

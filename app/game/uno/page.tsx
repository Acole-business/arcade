// Game 44
"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
const GameFrame: React.FC = () => {

  return (
    <div className="min-h-screen bg-black text-green-500 font-mono p-4 flex flex-col">
      <div className="terminal-container flex-1 border border-green-500 rounded-md p-4 relative h-full">
        <div className="scanline absolute top-0 left-0 w-full h-full pointer-events-none"></div>

        <div className="terminal-header flex items-center justify-between mb-4 border-b border-green-500 pb-2">
          <Link href="/" className="flex items-center gap-2 hover:text-green-400">
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Arcade</span>
          </Link>
          <div className="text-xs">arrowcole.xyz | Uno v1.0</div>
        </div>

        <iframe
          src="https://www.twoplayergames.org/embed/uno-online"
          className="w-full h-screen border-none"
          title="Hunger Games"
        ></iframe>
      </div>

    </div>
  );
};

export default GameFrame;
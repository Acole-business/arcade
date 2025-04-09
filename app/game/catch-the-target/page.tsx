// Game 15
"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

export default function ClickGame() {
  const [score, setScore] = useState(0);
  const [targetPosition, setTargetPosition] = useState({ x: 50, y: 50 });

  const moveTarget = () => {
    const newX = Math.random() * 90;
    const newY = Math.random() * 90;
    setTargetPosition({ x: newX, y: newY });
  };

  const handleClick = () => {
    setScore((prevScore) => prevScore + 1);
    moveTarget();
  };

  return (
    <div className="min-h-screen bg-black text-green-500 font-mono p-4 flex flex-col">
      <div className="terminal-container border border-green-500 rounded-md p-4 relative">
        <div className="scanline absolute top-0 left-0 w-full h-full pointer-events-none"></div>

        <div className="terminal-header flex items-center justify-between mb-4 border-b border-green-500 pb-2 w-full">
          <Link href="/" className="flex items-center gap-2 hover:text-green-400">
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Arcade</span>
          </Link>
          <div className="text-xs">acolegames.dev | Catch The Target v1.0</div>
        </div>

        <h1 className="text-2xl mb-4 text-center">Catch the Target!</h1>
        <p className="mb-4 text-center">Score: {score}</p>
        <div className="flex justify-center">
          <div className="relative w-80 h-80 bg-gray-700 rounded-lg flex items-center justify-center">
            <motion.div
              className="absolute w-10 h-10 bg-blue-500 rounded-full cursor-pointer"
              style={{ top: `${targetPosition.y}%`, left: `${targetPosition.x}%` }}
              onClick={handleClick}
              animate={{ x: 0, y: 0 }}
            />
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <Button onClick={() => setScore(0)}>Reset</Button>
        </div>
      </div>
    </div>
  );
}
"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const GRAVITY = 0.5;
const FLAP_STRENGTH = -8;
const PIPE_WIDTH = 50;
const PIPE_GAP = 150;
const PIPE_SPEED = 2;
const BIRD_X = 50;
const BIRD_SIZE = 40;

const FloppyBird = () => {
  const [birdY, setBirdY] = useState(0);
  const [velocity, setVelocity] = useState(0);
  const [pipes, setPipes] = useState([{ x: 0, height: 200 }]);
  const [score, setScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const gameRef = useRef<HTMLDivElement>(null);
  const [gameHeight, setGameHeight] = useState(0);
  const [gameWidth, setGameWidth] = useState(0);

  const resetGame = () => {
    setBirdY(gameHeight / 2);
    setVelocity(0);
    setPipes([{ x: gameWidth, height: 200 }]);
    setScore(0);
    setIsGameOver(false);
  };

  useEffect(() => {
    const updateDimensions = () => {
      setGameHeight(window.innerHeight);
      setGameWidth(window.innerWidth);
      resetGame();
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  useEffect(() => {
    const handleSpace = (e: KeyboardEvent) => {
      if (e.code === "Space" && !isGameOver) {
        setVelocity(FLAP_STRENGTH);
      }
    };
    window.addEventListener("keydown", handleSpace);
    return () => window.removeEventListener("keydown", handleSpace);
  }, [isGameOver]);

  useEffect(() => {
    if (isGameOver) {
      setTimeout(resetGame, 5000);
      return;
    }
    const interval = setInterval(() => {
      setBirdY((prev) => Math.max(prev + velocity, 0));
      setVelocity((prev) => prev + GRAVITY);
      setPipes((prev) =>
        prev
          .map((pipe) => ({ ...pipe, x: pipe.x - PIPE_SPEED }))
          .filter((pipe) => pipe.x + PIPE_WIDTH > 0)
      );
      
      if (pipes.length === 0 || pipes[pipes.length - 1].x < gameWidth - 200) {
        const newHeight = Math.floor(Math.random() * (gameHeight / 2)) + 50;
        setPipes((prev) => [...prev, { x: gameWidth, height: newHeight }]);
      }
      
      pipes.forEach((pipe) => {
        if (
          pipe.x < BIRD_X + BIRD_SIZE &&
          pipe.x + PIPE_WIDTH > BIRD_X &&
          (birdY < pipe.height || birdY > pipe.height + PIPE_GAP)
        ) {
          setIsGameOver(true);
        }
        if (pipe.x + PIPE_WIDTH === BIRD_X) {
          setScore((prev) => prev + 1);
        }
      });
      
      if (birdY + BIRD_SIZE >= gameHeight) setIsGameOver(true);
    }, 30);
    return () => clearInterval(interval);
  }, [birdY, velocity, pipes, isGameOver, gameHeight, gameWidth]);

  return (
    <div ref={gameRef} className="absolute inset-0 bg-blue-300 overflow-hidden">
      <div
        className="absolute bg-yellow-500 rounded-full"
        style={{ top: birdY, left: BIRD_X, width: BIRD_SIZE, height: BIRD_SIZE }}
      ></div>
      {pipes.map((pipe, idx) => (
        <div key={idx}>
          <div
            className="absolute bg-green-600"
            style={{ width: PIPE_WIDTH, height: pipe.height, left: pipe.x }}
          ></div>
          <div
            className="absolute bg-green-600"
            style={{
              width: PIPE_WIDTH,
              height: gameHeight - pipe.height - PIPE_GAP,
              top: pipe.height + PIPE_GAP,
              left: pipe.x,
            }}
          ></div>
        </div>
      ))}
      {isGameOver && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-xl flex-col">
          <div>Game Over! Score: {score}</div>
          <div className="mt-2 text-sm">Wait 5 seconds to restart...</div>
        </div>
      )}
    </div>
  );
};

const GameFrame: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-green-500 font-mono p-4 flex flex-col">
      {/* Header and Link Section */}
      <div className="flex justify-between items-center mb-4 border-b border-green-500 pb-2">
        <Link href="/" className="flex items-center gap-2 hover:text-green-400">
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Arcade</span>
        </Link>
        <div className="text-xs">acolegames.dev | Floppy Bird v1.0</div>
      </div>
      {/* Terminal container for the game */}
      <div className="terminal-container flex-1 border border-green-500 rounded-md p-4 relative h-full">
        <div className="scanline absolute top-0 left-0 w-full h-full pointer-events-none"></div>
        <FloppyBird />
      </div>
    </div>
  );
};

export default GameFrame;

"use client";

import type React from "react";

import ASCIIText from "@/components/ASCIIText/ASCIIText";
import Aurora from "@/components/Aurora/Aurora";
import { motion } from "framer-motion";
import { Terminal } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const [command, setCommand] = useState("");
  const router = useRouter();

  const handleCommand = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      switch (command) {
        case "0":
          router.push("/");
          break;
        case "1":
          router.push("old-website/smash-the-walls");
          break;
        case "2":
          router.push("old-website/doge");
          break;
        case "3":
          router.push("old-website/mine-sweeper");
          break;
        case "4":
          router.push("old-website/that-one-finger");
          break;
        case "5":
          router.push("old-website/check-box-race");
          break;
        case "6":
          router.push("old-website/move-now-think-later");
          break;
        case "7":
          router.push("old-website/cat-bounce");
          break;
        case "8":
          router.push("old-website/man-in-the-dark");
          break;
        case "9":
          router.push("old-website/koalas-to-the-max");
          break;
        case "10":
          router.push("old-website/hacker-typer");
          break;
        case "11":
          router.push("old-website/pointer");
          break;
        case "12":
          router.push("old-website/yesnoif");
          break;
        case "13":
          router.push("old-website/move-block-around");
          break;
        case "14":
          router.push("old-website/snowman");
          break;
        case "15":
          router.push("old-website/boring");
          break;
        case "16":
          router.push("old-website/cross-division");
          break;
        default:
          console.log("Invalid command");
      }
      setCommand("");
    }
  };

  return (
    <div className="min-h-screen bg-black text-green-500 font-mono p-4 flex flex-col">
      <div className="w-full inset-0 absolute bg-black bg-opacity-50 z-10 opacity-50">
        <Aurora speed={0.4} />
      </div>
      
      <div className="w-full inset-0 absolute z-10">
        <ASCIIText
          text="🕹️"
          enableWaves={false}
          asciiFontSize={12}
        />
      </div>

      <>
        <motion.div
          className={`relative p-4 z-20`}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 30,
            velocity: 3,
          }}
        >
          <div className="terminal-container flex flex-col border border-green-500 rounded-md p-4 relative">
            <div className="scanline absolute top-0 left-0 w-full h-full pointer-events-none"></div>
            <div className="terminal-header flex items-center justify-between mb-4 border-b border-green-500 pb-2 relative z-10">
              <div className="flex items-center gap-2">
                <Terminal className="h-5 w-5" />
                <h1 className="text-xl font-bold relative">
                  acolegames.dev | Old games
                  <span className="absolute hidden -right-2 top-0 h-full w-2 bg-green-500 animate-blink duration-800"></span>
                </h1>
              </div>
              <div className="text-xs">v2.0.0 | Games: 8
              </div>
            </div>

            <div className="terminal-content flex-grow space-y-6 mb-4 relative z-10">
              <section className="relative">
                <p className="typing-effect mb-4">
                  Welcome to the arcade! A collection of retro-inspired games
                  with a terminal aesthetic.
                </p>
                <p className="text-sm mb-6">
                  Type a number and press Enter to select a game, or use the
                  links below.
                </p>
              </section>

              <section className="games-list">
                <h2 className="text-lg mb-2 border-b border-green-500 pb-1">
                  Available Games:
                </h2>
                <ul className="space-y-2 flex flex-grow flex-col">
                <li>
                    <Link
                      href="/"
                      className="block p-2 hover:bg-green-900 hover:bg-opacity-30 transition-colors"
                    >
                      <span className="text-yellow-400">[0]</span> Home -
                      Return to the main page
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="old-website/smash-the-walls"
                      className="block p-2 hover:bg-green-900 hover:bg-opacity-30 transition-colors"
                    >
                      <span className="text-yellow-400">[1]</span> Smash The Walls -
                      Smash the walls and break the high score
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="old-website/doge"
                      className="block p-2 hover:bg-green-900 hover:bg-opacity-30 transition-colors"
                    >
                      <span className="text-yellow-400">[2]</span> Doge -
                      A simple game where you can play with the doge meme
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="old-website/mine-sweeper"
                      className="block p-2 hover:bg-green-900 hover:bg-opacity-30 transition-colors"
                    >
                      <span className="text-yellow-400">[3]</span> Mine Sweeper -
                      Classic puzzle game where you clear a minefield without
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="old-website/that-one-finger"
                      className="block p-2 hover:bg-green-900 hover:bg-opacity-30 transition-colors"
                    >
                      <span className="text-yellow-400">[4]</span> That One Finger -
                      Try not to click the finger
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="old-website/check-box-race"
                      className="block p-2 hover:bg-green-900 hover:bg-opacity-30 transition-colors"
                    >
                      <span className="text-yellow-400">[5]</span> Check Box Race -
                      Try to check all the boxes as fast as you can
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="old-website/move-now-think-later"
                      className="block p-2 hover:bg-green-900 hover:bg-opacity-30 transition-colors"
                    >
                      <span className="text-yellow-400">[6]</span> Move Now Think Later -
                      A game of strategy and skill, where you have to move your pieces
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="old-website/cat-bounce"
                      className="block p-2 hover:bg-green-900 hover:bg-opacity-30 transition-colors"
                    >
                      <span className="text-yellow-400">[7]</span> Cat Bounce -
                      Watch the cats bounce around the screen
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="old-website/man-in-the-dark"
                      className="block p-2 hover:bg-green-900 hover:bg-opacity-30 transition-colors"
                    >
                      <span className="text-yellow-400">[8]</span> Man In The Dark -
                      A game of stealth and strategy, where you have to avoid the guards
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="old-website/koalas-to-the-max"
                      className="block p-2 hover:bg-green-900 hover:bg-opacity-30 transition-colors"
                    >
                      <span className="text-yellow-400">[9]</span> Koalas To The Max -
                      A game where you can create your own koalas and watch them dance
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="old-website/Hacker-Typer"
                      className="block p-2 hover:bg-green-900 hover:bg-opacity-30 transition-colors"
                    >
                      <span className="text-yellow-400">[10]</span> Hacker Typer -
                      A game where you can type like a hacker and create your own code
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="old-website/pointer"
                      className="block p-2 hover:bg-green-900 hover:bg-opacity-30 transition-colors"
                    >
                        <span className="text-yellow-400">[11]</span> Pointer -
                      A game where you have to find the pointer in the picture
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="old-website/yesnoif"
                      className="block p-2 hover:bg-green-900 hover:bg-opacity-30 transition-colors"
                    >
                      <span className="text-yellow-400">[12]</span> Yes No If -
                      A game where you can ask questions and get answers
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="old-website/move-block-around"
                      className="block p-2 hover:bg-green-900 hover:bg-opacity-30 transition-colors"
                    >
                      <span className="text-yellow-400">[13]</span> Move Block Around -
                      A game where you can move blocks around the screen
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="old-website/snowman"
                      className="block p-2 hover:bg-green-900 hover:bg-opacity-30 transition-colors"
                    >
                      <span className="text-yellow-400">[14]</span> SnowMan -
                      A game where you can create your own snowman and watch it dance
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="old-website/boring"
                      className="block p-2 hover:bg-green-900 hover:bg-opacity-30 transition-colors"
                    >
                        <span className="text-yellow-400">[15]</span> Boring -
                      A game where you can do nothing and watch the screen
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="old-website/cross-division"
                      className="block p-2 hover:bg-green-900 hover:bg-opacity-30 transition-colors"
                    >
                      <span className="text-yellow-400">[16]</span> Cross Division -
                      A game where you can cross the division and watch the screen
                    </Link>
                  </li>
                </ul>
              </section>

              <section className="terminal-input mt-auto  ">
                <div className="flex items-center">
                  <span className="text-green-500 mr-2">guest@arcade:~$</span>
                  {/* <span className="text-green-500 mr 2">admin@arcade:~$ </span> */}
                  <div className="relative flex-1">
                    <input
                      type="text"
                      className="w-full bg-transparent border-none outline-none focus:ring-0"
                      placeholder="Type a command..."
                      value={command}
                      onChange={(e) => setCommand(e.target.value)}
                      onKeyPress={handleCommand}
                    />
                  </div>
                </div>
              </section>
            </div>
          </div>
        </motion.div>
      </>

      <footer className="mt-4 text-xs text-center text-green-700">
        <p>
          Created by{" "}
          <a
            href="https://aaroncole.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-green-300"
          >
            Aaroncole.dev
          </a>{" "}
          and{" "}
          <a
            href="acolegames.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-green-300"
          >
            Acolegames.dev
          </a>
          , an AI-powered development tool from{" "}
          <a
            href="https://vercel.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-green-300"
          >
            vercel
          </a>
          , Contact Form{" "}
          <a
            href="other-links/contact"
            rel="noopener noreferrer"
            className="underline hover:text-green-300"
          >
            Here
          </a>
        </p>
        <p className="mt-1">Press F11 for fullscreen experience</p>
      </footer>
    </div>
  );
}

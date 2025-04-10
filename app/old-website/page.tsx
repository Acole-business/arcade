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
        case "17":
          router.push("old-website/dog-be-spinning");
          break;
        case "18":
          router.push("old-website/double-pressure");
          break;
        case "19":
          router.push("old-website/infinity");
          break;
        case "20":
          router.push("old-website/pug-in-a-rug");
          break;
        case "21":
          router.push("old-website/cursor-effect");
          break;
        case "22":
          router.push("old-website/box-maker");
          break;
        case "23":
          router.push("old-website/maze");
          break;
        case "24":
          router.push("old-website/i-has-a-bucket");
          break;
        case "25": 
          router.push("old-website/paper-clip-sim");
          break;
        case "26": 
          router.push("old-website/rgb");
          break;
        case "27": 
          router.push("old-website/noice");
          break;
        case "28": 
          router.push("old-website/emoji");
          break;
        case "29":
          router.push("old-website/falling-falling");
          break;
        case "30":
          router.push("old-website/solitaire");
          break;
        case "31":
          router.push("old-website/calculator");
          break;
        case "32":
          router.push("old-website/pico-park");
          break;
        case "33":
          router.push("old-website/google-fued");
          break;
        case "34":
          router.push("old-website/rings");
          break;
        case "35":
          router.push("old-website/wtf");
          break;
        case "36":
          router.push("old-website/the-zen");
          break;
        case "37":
          router.push("old-website/he-ho");
          break;
        case "38":
          router.push("old-website/find-the-cow");
          break;
        case "39":
          router.push("old-website/drawing");
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
              <div className="text-xs">v2.0.0 | Games: 24
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
                      href="old-website/hacker-typer"
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
                  <li>
                    <Link
                      href="old-website/dog-be-spinning"
                      className="block p-2 hover:bg-green-900 hover:bg-opacity-30 transition-colors"
                    >
                      <span className="text-yellow-400">[17]</span> Dog Be Spinning -
                      A game where you can spin the dog and watch the screen
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="old-website/double-pressure"
                      className="block p-2 hover:bg-green-900 hover:bg-opacity-30 transition-colors"
                    >
                      <span className="text-yellow-400">[18]</span> Double Pressure -
                      A game where you can double the pressure and watch the screen
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="old-website/infinity"
                      className="block p-2 hover:bg-green-900 hover:bg-opacity-30 transition-colors"
                    >
                      <span className="text-yellow-400">[19]</span> Infinity -
                      A game where you can create your own infinity and watch the screen
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="old-website/pug-in-a-rug"
                      className="block p-2 hover:bg-green-900 hover:bg-opacity-30 transition-colors"
                    >
                      <span className="text-yellow-400">[20]</span> Pug In A Rug -
                      A game where you can create your own pug and watch the screen
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="old-website/cursor-effect"
                      className="block p-2 hover:bg-green-900 hover:bg-opacity-30 transition-colors"
                    >
                      <span className="text-yellow-400">[21]</span> Cursor Effect -
                      A game where you can create your own cursor and watch the screen
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="old-website/box-maker"
                      className="block p-2 hover:bg-green-900 hover:bg-opacity-30 transition-colors"
                    >
                      <span className="text-yellow-400">[22]</span> Box Maker -
                      A game where you can create your own box and watch the screen
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="old-website/maze"
                      className="block p-2 hover:bg-green-900 hover:bg-opacity-30 transition-colors"
                    >
                      <span className="text-yellow-400">[23]</span> Maze -
                      A game where you can create your own maze and watch the screen
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="old-website/i-has-a-bucket"
                      className="block p-2 hover:bg-green-900 hover:bg-opacity-30 transition-colors"
                    >
                      <span className="text-yellow-400">[24]</span> I Has A Bucket -
                      A photo of a seal with a bucket
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="old-website/paper-clip-sim"
                      className="block p-2 hover:bg-green-900 hover:bg-opacity-30 transition-colors"
                    >
                      <span className="text-yellow-400">[25]</span> Paper Clip Simulator -
                      A game where you can create your own paper clips and watch the screen
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="old-website/rgb"
                      className="block p-2 hover:bg-green-900 hover:bg-opacity-30 transition-colors"
                    >
                      <span className="text-yellow-400">[26]</span> RGB -
                      A game where you can create your own RGB and watch the screen
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="old-website/noice"
                      className="block p-2 hover:bg-green-900 hover:bg-opacity-30 transition-colors"
                    >
                      <span className="text-yellow-400">[27]</span> Noice -
                      A game where you can create your own noise and watch the screen
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="old-website/emoji"
                      className="block p-2 hover:bg-green-900 hover:bg-opacity-30 transition-colors"
                    >
                      <span className="text-yellow-400">[28]</span> Emoji -
                      A game where you can create your own emoji and watch the screen
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="old-website/falling-falling"
                      className="block p-2 hover:bg-green-900 hover:bg-opacity-30 transition-colors"
                    >
                      <span className="text-yellow-400">[29]</span> Falling Falling -
                      Watch the falling screen
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="old-website/solitaire"
                      className="block p-2 hover:bg-green-900 hover:bg-opacity-30 transition-colors"
                    >
                      <span className="text-yellow-400">[30]</span> Solitaire -
                      A game of cards and strategy, where you have to build the deck
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="old-website/calculator"
                      className="block p-2 hover:bg-green-900 hover:bg-opacity-30 transition-colors"
                    >
                      <span className="text-yellow-400">[31]</span> Calculator -
                      A game where you try to solve the math problems as fast as you can
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="old-website/pico-park"
                      className="block p-2 hover:bg-green-900 hover:bg-opacity-30 transition-colors"
                    >
                      <span className="text-yellow-400">[32]</span> Pico Park -
                      A game where you can play with your friends and solve puzzles together
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="old-website/google-fued"
                      className="block p-2 hover:bg-green-900 hover:bg-opacity-30 transition-colors"
                    >
                      <span className="text-yellow-400">[33]</span> Google Feud -
                      A game where you can guess the top search results for a given query
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="old-website/rings"
                      className="block p-2 hover:bg-green-900 hover:bg-opacity-30 transition-colors"
                    >
                      <span className="text-yellow-400">[34]</span> Rings -
                      A game where you can create your own rings and watch the screen
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="old-website/wtf"
                      className="block p-2 hover:bg-green-900 hover:bg-opacity-30 transition-colors"
                    >
                      <span className="text-yellow-400">[35]</span> WTF -
                      A screen of only the word &quot;WTF&quot; and nothing else
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="old-website/the-zen"
                      className="block p-2 hover:bg-green-900 hover:bg-opacity-30 transition-colors"
                    >
                      <span className="text-yellow-400">[36]</span> The Zen -
                      A game where you can create your own zen and watch the screen
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="old-website/he-ho"
                      className="block p-2 hover:bg-green-900 hover:bg-opacity-30 transition-colors"
                    >
                      <span className="text-yellow-400">[37]</span> HE HO -
                      A game where you can create your own HE HO and watch the screen
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="old-website/find-the-cow"
                      className="block p-2 hover:bg-green-900 hover:bg-opacity-30 transition-colors"
                    >
                      <span className="text-yellow-400">[38]</span> Find The Cow -
                      A game where you can find the cow in the picture
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="old-website/drawing"
                      className="block p-2 hover:bg-green-900 hover:bg-opacity-30 transition-colors"
                    >
                      <span className="text-yellow-400">[39]</span> Drawing -
                      A game where you can draw on the screen and watch the screen
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
                      placeholder=" Type a command..."
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
            href="https://acolegames.dev"
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

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
        case "1":
          router.push("/game/blackjack");
          break;
        case "2":
          router.push("/game/snake");
          break;
        case "3":
          router.push("/game/hangman");
          break;
        case "4":
          router.push("/game/rock-paper-scissors");
          break;
        case "5":
          router.push("/game/guess-the-number");
          break;
        case "6":
          router.push("/game/memory-card");
          break;
        case "7":
          router.push("/game/tic-tac-toe");
          break;
        case "8":
          router.push("/game/wordle-clone");
          break;
        case "9":
          router.push("/game/minesweeper");
          break;
        case "10":
          router.push("/game/simon-says");
          break;
        case "11":
          router.push("/game/2048");
          break;
        case "12":
          router.push("/game/morse-code-trainer");
          break;
        case "13":
          router.push("/game/lights-out");
          break;
        case "14":
          router.push("/game/duck-hunt");
          break;
        case "15":
          router.push("/game/catch-the-target");
          break;
        case "16":
          router.push("/game/typing-speed-challenge");
          break;
        case "17":
          router.push("/game/missile-command");
          break;
        case "18":
          router.push("/game/tapper");
          break;
        case "19":
          router.push("/game/pixel-hopper");
          break;
        case "20":
          router.push("/game/pacman");
          break;
        case "21":
          router.push("/game/color-match");
          break;
        case "22":
          router.push("/game/loop-dash");
          break;
        case "23":
          router.push("/game/jump-king-lite");
          break;
        case "24":
          router.push("/game/draw-a-path");
          break;
        case "25":
          router.push("/game/tap-to-zero");
          break;
        case "26":
          router.push("/game/color-swap");
          break;
        case "27":
          router.push("/game/stay-on-the-line");
          break;
        case "28":
          router.push("/game/one-second-challenge");
          break;
        case "29":
          router.push("/game/quickest-draw");
          break;
        case "30":
          router.push("/game/what-changed");
          break;
        case "31":
          router.push("/game/mirror-maze");
          break;
        case "32":
          router.push("/game/emoji-equation");
          break;
        case "33":
          router.push("/game/click-the-smallest");
          break;
        case "34":
          router.push("/game/blurry-vision");
          break;
        case "35":
          router.push("/game/one-pixel-click");
          break;
        case "36":
          router.push("/game/emoji-memory-challenge");
          break;
        case "37":
          router.push("/game/rhythm-arrows");
          break;
        case "38":
          router.push("/game/swipe-the-right-way");
          break;
        case "39":
          router.push("/game/button-clicker");
          break;
        case "40":
          router.push("/game/chess");
          break;
        case "41":
          router.push("/game/tetis");
          break;
        case "42":
          router.push("/game/sudoku");
          break;
        case "43":
          router.push("/game/hunger-games");
          break;
        case "44":
          router.push("/game/uno");
          break;
        case "45":
          router.push("/game/space-invaders");
          break;
        case "46":
          router.push("/game/floppy-bird");
          break;
        case "47":
          router.push("/game/bowling");
          break;
        case "48":
          router.push("/game/jeopardy");
          break;
        case "49":
          router.push("/game/geoguessr");
          break;
        case "old-1":
            router.push("/old-website/smash-the-walls");
            break;
        case "old-2":
            router.push("/old-website/doge");
            break;
        case "old-3":
            router.push("/old-website/mine-sweeper");
            break;
        case "old-4":
            router.push("/old-website/that-one-finger");
            break;
        case "old-5":
            router.push("/old-webiste/check-box-race");
            break;
        case "old-6":
            router.push("/old-website/move-now-think-later");
            break;
        case "old-7":
            router.push("/old-website/cat-bounce");
            break;
        case "old-8":
            router.push("/old-website/man-in-the-dark");
            break;
        case "old-9":
            router.push("/old-website/koalas-to-the-max");
            break;
        case "old-10":
            router.push("/old-website/Hacker-Typer");
            break;
        case "old-11":
            router.push("/old-website/pointer");
            break;
        case "old-12":
            router.push("/old-website/yesnoif");
            break;
        case "old-13":
            router.push("/old-website/move-block-around");
            break;
        case "old-14":
            router.push("/old-website/snowman");
            break;
        case "old-15":
            router.push("/old-website/boring");
            break;
        case "old-16":
            router.push("/old-website/cross-division");
            break;
        case "old-17":
            router.push("old-website/dog-be-spinning");
            break;
        case "old-18":
            router.push("old-website/double-pressure");
            break;
        case "old-19":
            router.push("old-website/infinity");
            break;
        case "old-20":
            router.push("old-website/pug-in-a-rug");
            break;
        case "old-21":
            router.push("old-website/cursor-effect");
            break;
        case "old-22":
            router.push("old-website/box-maker");
            break;
        case "old-23":
            router.push("old-website/maze");
            break;
        case "old-24":
            router.push("old-website/i-has-a-bucket");
            break;
        case "old-25": 
            router.push("old-website/paper-clip-sim");
            break;
        case "old-26": 
            router.push("old-website/rgb");
            break;
        case "old-27": 
            router.push("old-website/noice");
            break;
        case "old-28": 
            router.push("old-website/emoji");
            break;
        case "old-29":
            router.push("old-website/falling-falling");
            break;
        case "old-30":
            router.push("old-website/solitaire");
            break;
        case "old-31":
            router.push("old-website/calculator");
            break;
        case "old-32":
            router.push("old-website/pico-park");
            break;
        case "old-33":
            router.push("old-website/google-fued");
            break;
        case "old-34":
            router.push("old-website/rings");
            break;
        case "old-35":
            router.push("old-website/wtf");
            break;
        case "old-36":
            router.push("old-website/the-zen");
            break;
        case "old-37":
            router.push("old-website/he-ho");
            break;
        case "old-38":
            router.push("old-website/find-the-cow");
            break;
        case "old-39":
            router.push("old-website/drawing");
            break;
        case "contact":
            router.push("other-links/contact");
            break;
        case "helper":
            router.push("other-links/robotics/helper");
            break;
        case "stats":
            router.push("other-links/robotics/stats");    
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
                  Admin
                  <span className="absolute hidden -right-2 top-0 h-full w-2 bg-green-500 animate-blink duration-800"></span>
                </h1>
              </div>
              <div className="text-xs">v2.0.0 | Games: 79 | Pages: 3
                {/* New Games: 49 | Old Games: 39 | Pages: 3 */}
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
                 <h1>New Site</h1>
                  <li>
                    <Link
                      href="/game/blackjack"
                      className="block p-2 hover:bg-green-900 hover:bg-opacity-30 transition-colors"
                    >
                      <span className="text-yellow-400">[1]</span> Blackjack -
                      Classic card game against the dealer
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/game/snake"
                      className="block p-2 hover:bg-green-900 hover:bg-opacity-30 transition-colors"
                    >
                      <span className="text-yellow-400">[2]</span> Snake -
                      Navigate and grow your snake
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/game/hangman"
                      className="block p-2 hover:bg-green-900 hover:bg-opacity-30 transition-colors"
                    >
                      <span className="text-yellow-400">[3]</span> Hangman -
                      Guess the word before it&apos;s too late
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/game/rock-paper-scissors"
                      className="block p-2 hover:bg-green-900 hover:bg-opacity-30 transition-colors"
                    >
                      <span className="text-yellow-400">[4]</span> Rock Paper
                      Scissors - Classic hand game against the computer
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/game/guess-the-number"
                      className="block p-2 hover:bg-green-900 hover:bg-opacity-30 transition-colors"
                    >
                      <span className="text-yellow-400">[5]</span> Guess the
                      Number - Try to guess the secret number
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/game/memory-card"
                      className="block p-2 hover:bg-green-900 hover:bg-opacity-30 transition-colors"
                    >
                      <span className="text-yellow-400">[6]</span> Memory Card -
                      Match pairs of cards to win
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/game/tic-tac-toe"
                      className="block p-2 hover:bg-green-900 hover:bg-opacity-30 transition-colors"
                    >
                      <span className="text-yellow-400">[7]</span> Tic-Tac-Toe -
                      Classic two-player strategy game
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/game/wordle-clone"
                      className="block p-2 hover:bg-green-900 hover:bg-opacity-30 transition-colors"
                    >
                      <span className="text-yellow-400">[8]</span> Wordle Clone
                      - Guess the five-letter word
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/game/minesweeper"
                      className="block p-2 hover:bg-green-900 hover:bg-opacity-30 transition-colors"
                    >
                      <span className="text-yellow-400">[9]</span> Minesweeper -
                      Clear the board without hitting mines
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/game/simon-says"
                      className="block p-2 hover:bg-green-900 hover:bg-opacity-30 transition-colors"
                    >
                      <span className="text-yellow-400">[10]</span> Simon Says -
                      Repeat the sequence of colors
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/game/2048"
                      className="block p-2 hover:bg-green-900 hover:bg-opacity-30 transition-colors"
                    >
                      <span className="text-yellow-400">[11]</span> 2048 -
                      Combine tiles to reach 2048
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/game/morse-code-trainer"
                      className="block p-2 hover:bg-green-900 hover:bg-opacity-30 transition-colors"
                    >
                      <span className="text-yellow-400">[12]</span> Morse Code
                      Trainer - Learn and practice Morse code
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/game/lights-out"
                      className="block p-2 hover:bg-green-900 hover:bg-opacity-30 transition-colors"
                    >
                      <span className="text-yellow-400">[13]</span> Lights Out -
                      Turn off all the lights in this puzzle game
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/game/duck-hunt"
                      className="block p-2 hover:bg-green-900 hover:bg-opacity-30 transition-colors"
                    >
                      <span className="text-yellow-400">[14]</span> Duck Hunt -
                      Shoot ducks as they fly across the screen
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/game/catch-the-target"
                      className="block p-2 hover:bg-green-900 hover:bg-opacity-30 transition-colors"
                    >
                      <span className="text-yellow-400">[15]</span> Catch the
                      Target - Click the moving target to score points
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/game/typing-speed-challenge"
                      className="block p-2 hover:bg-green-900 hover:bg-opacity-30 transition-colors"
                    >
                      <span className="text-yellow-400">[16]</span> Typing Speed
                      Challenge - Test your typing speed and accuracy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/game/missile-command"
                      className="block p-2 hover:bg-green-900 hover:bg-opacity-30 transition-colors"
                    >
                      <span className="text-yellow-400">[17]</span> Missile
                      Command - Defend your cities from incoming missiles
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/game/tapper"
                      className="block p-2 hover:bg-green-900 hover:bg-opacity-30 transition-colors"
                    >
                      <span className="text-yellow-400">[18]</span> Tapper -
                      Serve drinks to customers before they reach the end of the
                      bar
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/game/pixel-hopper"
                      className="block p-2 hover:bg-green-900 hover:bg-opacity-30 transition-colors"
                    >
                      <span className="text-yellow-400">[19]</span> Pixel Hopper
                      - Jump over obstacles and survive as long as you can
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/game/pacman"
                      className="block p-2 hover:bg-green-900 hover:bg-opacity-30 transition-colors"
                    >
                      <span className="text-yellow-400">[20]</span> Pacman - Eat
                      all the pellets and avoid the ghosts!
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/game/color-match"
                      className="block p-2 hover:bg-green-900 hover:bg-opacity-30 transition-colors"
                    >
                      <span className="text-yellow-400">[21]</span> Color Match
                      - Test your reflexes by matching colors
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/game/loop-dash"
                      className="block p-2 hover:bg-green-900 hover:bg-opacity-30 transition-colors"
                    >
                      <span className="text-yellow-400">[22]</span> Loop Dash -
                      Time your jumps to orbit perfectly
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/game/jump-king-lite"
                      className="block p-2 hover:bg-green-900 hover:bg-opacity-30 transition-colors"
                    >
                      <span className="text-yellow-400">[23]</span> Jump King
                      Lite - Precision jumping challenge
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/game/draw-a-path"
                      className="block p-2 hover:bg-green-900 hover:bg-opacity-30 transition-colors"
                    >
                      <span className="text-yellow-400">[24]</span> Draw a Path
                      - Connect the dots while avoiding obstacles
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/game/tap-to-zero"
                      className="block p-2 hover:bg-green-900 hover:bg-opacity-30 transition-colors"
                    >
                      <span className="text-yellow-400">[25]</span> Tap to Zero
                      - Click numbers in descending order quickly
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/game/color-swap"
                      className="block p-2 hover:bg-green-900 hover:bg-opacity-30 transition-colors"
                    >
                      <span className="text-yellow-400">[26]</span> Color Swap -
                      Swap tiles to match colors in fewest moves
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/game/stay-on-the-line"
                      className="block p-2 hover:bg-green-900 hover:bg-opacity-30 transition-colors"
                    >
                      <span className="text-yellow-400">[27]</span> Stay on the
                      Line - Keep the dot within the wiggling path
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/game/one-second-challenge"
                      className="block p-2 hover:bg-green-900 hover:bg-opacity-30 transition-colors"
                    >
                      <span className="text-yellow-400">[28]</span> One-Second
                      Challenge - Stop the countdown timer as close to zero as
                      possible
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/game/quickest-draw"
                      className="block p-2 hover:bg-green-900 hover:bg-opacity-30 transition-colors"
                    >
                      <span className="text-yellow-400">[29]</span> Quickest
                      Draw - Test your reaction time and accuracy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/game/what-changed"
                      className="block p-2 hover:bg-green-900 hover:bg-opacity-30 transition-colors"
                    >
                      <span className="text-yellow-400">[30]</span> What
                      Changed? - Spot the difference in a grid of emojis
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/game/mirror-maze"
                      className="block p-2 hover:bg-green-900 hover:bg-opacity-30 transition-colors"
                    >
                      <span className="text-yellow-400">[31]</span> Mirror Maze
                      - Navigate a maze with reversed controls
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/game/emoji-equation"
                      className="block p-2 hover:bg-green-900 hover:bg-opacity-30 transition-colors"
                    >
                      <span className="text-yellow-400">[32]</span> Emoji
                      Equation - Solve math problems using emojis
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/game/click-the-smallest"
                      className="block p-2 hover:bg-green-900 hover:bg-opacity-30 transition-colors"
                    >
                      <span className="text-yellow-400">[33]</span> Click the
                      Smallest - Test your precision with shrinking buttons
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/game/blurry-vision"
                      className="block p-2 hover:bg-green-900 hover:bg-opacity-30 transition-colors"
                    >
                      <span className="text-yellow-400">[34]</span> Blurry
                      Vision - Type the word before it becomes clear
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/game/one-pixel-click"
                      className="block p-2 hover:bg-green-900 hover:bg-opacity-30 transition-colors"
                    >
                      <span className="text-yellow-400">[35]</span> The
                      One-Pixel Click - Test your precision with a shrinking
                      pixel
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/game/emoji-memory-challenge"
                      className="block p-2 hover:bg-green-900 hover:bg-opacity-30 transition-colors"
                    >
                      <span className="text-yellow-400">[36]</span> Emoji Memory
                      Challenge - Memorize and recreate emoji sequences
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/game/rhythm-arrows"
                      className="block p-2 hover:bg-green-900 hover:bg-opacity-30 transition-colors"
                    >
                      <span className="text-yellow-400">[37]</span> Rhythm
                      Arrows - Press arrow keys in sync with falling arrows
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/game/swipe-the-right-way"
                      className="block p-2 hover:bg-green-900 hover:bg-opacity-30 transition-colors"
                    >
                      <span className="text-yellow-400">[38]</span> Swipe the
                      Right Way - Swipe in the direction shown on screen
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/game/button-clicker"
                      className="block p-2 hover:bg-green-900 hover:bg-opacity-30 transition-colors"
                    >
                      <span className="text-yellow-400">[39]</span> Button Clicker -
                      Click the button as fast as you can!
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/game/chess"
                      className="block p-2 hover:bg-green-900 hover:bg-opacity-30 transition-colors"
                    >
                      <span className="text-yellow-400">[40]</span> Chess -
                      Play a game of chess against the computer or a friend
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/game/tetris"
                      className="block p-2 hover:bg-green-900 hover:bg-opacity-30 transition-colors"
                    >
                      <span className="text-yellow-400">[41]</span> Tetris -
                      Classic falling block puzzle game
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/game/sudoku"
                      className="block p-2 hover:bg-green-900 hover:bg-opacity-30 transition-colors"
                    >
                      <span className="text-yellow-400">[42]</span> Sudoku -
                      Classic number puzzle game and solver
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/game/hunger-games"
                      className="block p-2 hover:bg-green-900 hover:bg-opacity-30 transition-colors"
                    >
                      <span className="text-yellow-400">[43]</span> Hunger Games - Simulator
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/game/uno"
                      className="block p-2 hover:bg-green-900 hover:bg-opacity-30 transition-colors"
                    >
                      <span className="text-yellow-400">[44]</span> Uno - Card game
                    </Link>
                    </li>
                    <li>
                    <Link
                      href="/game/space-invaders"
                      className="block p-2 hover:bg-green-900 hover:bg-opacity-30 transition-colors"
                    >
                      <span className="text-yellow-400">[45]</span> Space Invaders - Attack Alliens and help save the earth
                    </Link>
                    </li>
                  <li>
                    <Link
                      href="/game/floppy-bird"
                      className="block p-2 hover:bg-green-900 hover:bg-opacity-30 transition-colors"
                    >
                      <span className="text-yellow-400">[46]</span> Floppy Bird - Fly through the pipes and avoid obstacles
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/game/bowling"
                      className="block p-2 hover:bg-green-900 hover:bg-opacity-30 transition-colors"
                    >
                      <span className="text-yellow-400">[47]</span> Bowling - Classic bowling game
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/game/jeopardy"
                      className="block p-2 hover:bg-green-900 hover:bg-opacity-30 transition-colors"
                    >
                      <span className="text-yellow-400">[48]</span> Jeopardy - Classic trivia game
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/game/geoguessr"
                      className="block p-2 hover:bg-green-900 hover:bg-opacity-30 transition-colors"
                    >
                      <span className="text-yellow-400">[49]</span> Geoguessr - Guess the location based on the image
                    </Link>
                  </li>
                  <br />
                  <h1>Old Site</h1>
                  <br />
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

                  <br />
                  <h1>Other Links</h1>
                <br />
                    <li>
                        <Link
                        href="other-links/contact"
                        className="block p-2 hover:bg-green-900 hover:bg-opacity-30 transition-colors"
                        >
                        <span className="text-yellow-400">[1]</span> Contact -
                        Contact us for more information
                        </Link>
                    </li>
                    <li>
                        <Link
                        href="other-links/robotics/helper"
                        className="block p-2 hover:bg-green-900 hover:bg-opacity-30 transition-colors"
                        >
                        <span className="text-yellow-400">[2]</span> Robotics Helper -
                        A game where you can help the robots and watch them dance
                        </Link>
                    </li>
                    <li>
                        <Link
                        href="other-links/robotics/stats"
                        className="block p-2 hover:bg-green-900 hover:bg-opacity-30 transition-colors"
                        >
                        <span className="text-yellow-400">[3]</span> Robotics Stats -
                        A game where you can watch the robots and their stats
                        </Link>
                    </li>
                </ul>
              </section>

              <section className="terminal-input mt-auto  ">
                <div className="flex items-center">
                  <span className="text-green-500 mr 2">admin@arcade:~$</span>
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
          {/*, Robotics Page{" "}
          <a
            href="other-links/robotics/helper"
            rel="noopener noreferrer"
            className="underline hover:text-green-300"
          >
            Here
          </a>
          , Stats Page{" "}
          <a
            href="other-links/robotics/stats"
            rel="noopener noreferrer"
            className="underline hover:text-green-300"
          >
            Here
          </a> */}
        </p>
        <p className="mt-1">Press F11 for fullscreen experience</p>
      </footer>
    </div>
  );
}

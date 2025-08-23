// src/services/snakes/snakes.tsx
"use client";

import React, { useState } from "react";

export default function SnakesGame() {
  const [position, setPosition] = useState(0);
  const [message, setMessage] = useState("");

  // Snakes and ladders board mapping
  const snakes: Record<number, number> = {
    16: 6,
    47: 26,
    49: 11,
    56: 53,
    62: 19,
    64: 60,
    87: 24,
    93: 73,
    95: 75,
    98: 78,
  };

  const ladders: Record<number, number> = {
    1: 38,
    4: 14,
    9: 31,
    21: 42,
    28: 84,
    36: 44,
    51: 67,
    71: 91,
    80: 100,
  };

  const rollDice = () => {
    const roll = Math.floor(Math.random() * 6) + 1; // dice roll 1-6
    let newPos = position + roll;

    if (newPos > 100) {
      setMessage("You need the exact number to win!");
      return;
    }

    if (snakes[newPos]) {
      newPos = snakes[newPos];
      setMessage(`Oops! Bitten by a snake 🐍. Down to ${newPos}`);
    } else if (ladders[newPos]) {
      newPos = ladders[newPos];
      setMessage(`Yay! Climbed a ladder 🎉. Up to ${newPos}`);
    } else {
      setMessage(`Moved to ${newPos}`);
    }

    setPosition(newPos);

    if (newPos === 100) {
      setMessage("🎊 Congratulations! You reached 100 and won the game!");
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-green-400 to-blue-600 text-white p-6">
      <h1 className="text-3xl font-bold mb-4">🎲 Snakes & Ladders</h1>

      <div className="bg-white text-black rounded-lg shadow-lg p-6 w-80 text-center">
        <p className="text-lg mb-2">Current Position: {position}</p>
        <p className="text-sm italic mb-4">{message}</p>

        <button
          onClick={rollDice}
          className="btn-secondary px-6 py-2 bg-blue-500 rounded-lg text-white mb-6 hover:bg-blue-700 transition"
        >
          Roll Dice 🎲
        </button>
      </div>
    </main>
  );
}

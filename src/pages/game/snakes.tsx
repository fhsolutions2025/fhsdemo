// src/services/snakes/snakes.tsx
import React, { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import DiceMind from "@/components/dicemind";

const snakesAndLadders: { [key: number]: number } = {
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

export default function SnakesGame() {
  const [positions, setPositions] = useState([1, 1]);
  const [turn, setTurn] = useState(0);
  const [winner, setWinner] = useState<number | null>(null);

  const rollDice = () => {
    if (winner !== null) return;
    const dice = Math.floor(Math.random() * 6) + 1;
    let newPos = positions[turn] + dice;
    if (snakesAndLadders[newPos]) {
      newPos = snakesAndLadders[newPos];
    }
    if (newPos >= 100) {
      setWinner(turn);
    }
    const newPositions = [...positions];
    newPositions[turn] = newPos <= 100 ? newPos : positions[turn];
    setPositions(newPositions);
    setTurn((turn + 1) % positions.length);
  };

  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-b from-green-200 to-blue-200">
      <Header />
      <div className="flex-grow flex flex-col items-center justify-center p-6">
        <h1 className="text-3xl font-bold mb-6">🐍 Snakes & Ladders 🎲</h1>
        <div className="grid grid-cols-10 gap-1 bg-white p-4 rounded shadow-lg">
          {Array.from({ length: 100 }, (_, i) => {
            const num = 100 - i;
            const playerHere = positions.findIndex((p) => p === num);
            return (
              <div
                key={num}
                className={`w-8 h-8 flex items-center justify-center text-xs border 
                  ${playerHere !== -1 ? "bg-yellow-300 font-bold" : "bg-gray-100"}`}
              >
                {num}
              </div>
            );
          })}
        </div>
        {winner !== null ? (
          <div className="mt-4 font-bold">
            Player {winner + 1} wins! 🎉
          </div>
        ) : (
          <div className="mt-4">
            <DiceMind onRoll={rollDice} />
            <button
              onClick={rollDice}
              className="btn-secondary px-6 py-2 bg-blue-500 rounded-lg text-white mt-4"
            >
              Roll Dice 🎲
            </button>
          </div>
        )}
      </div>
      <Footer />
    </main>
  );
}

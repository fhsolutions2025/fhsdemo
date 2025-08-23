// src/pages/game/snakes.tsx
import Header from "@/components/header";
import Footer from "@/components/footer";
import DiceMind from "@/components/dicemind";
import { useState } from "react";

export default function Snakes() {
  const [playerPosition, setPlayerPosition] = useState(0);
  const [winner, setWinner] = useState<number | null>(null);

  // 🎲 handle dice roll
  const handleRoll = (roll: number) => {
    let newPos = playerPosition + roll;

    // basic win condition: reach 30
    if (newPos >= 30) {
      newPos = 30;
      setWinner(1);
    }

    setPlayerPosition(newPos);
  };

  return (
    <main className="min-h-screen flex flex-col">
      {/* Global Header */}
      <Header />

      {/* Game Title */}
      <div className="text-center text-2xl font-bold mt-4">
        🐍 Snakes &amp; Ladders 🎲
      </div>

      {/* Game Board Placeholder */}
      <div className="flex-grow flex flex-col items-center justify-center">
        <div className="border-2 border-gray-300 rounded-lg p-6 w-64 text-center bg-white shadow">
          <p className="mb-2 font-semibold">Player 1 Position: {playerPosition}</p>
          {winner ? (
            <p className="text-green-600 font-bold">🎉 Player {winner} Wins! 🎉</p>
          ) : (
            <DiceMind onRoll={handleRoll} />
          )}
        </div>
      </div>

      {/* Global Footer */}
      <Footer />
    </main>
  );
}

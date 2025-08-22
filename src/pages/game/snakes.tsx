import React, { useState } from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import DiceMind from "../../components/dicemind";
import PrizeSnlBoard from "../../components/prize-snl-board";

export default function Snakes() {
  const [position, setPosition] = useState(1);
  const [rolls, setRolls] = useState<number[]>([]);

  const snakes: Record<number, number> = { 17: 7, 54: 34, 62: 19, 98: 79 };
  const ladders: Record<number, number> = { 3: 22, 5: 8, 20: 29, 27: 56, 72: 91 };

  const handleRoll = (roll: number) => {
    let newPos = position + roll;
    if (newPos > 100) newPos = position; // overshoot stays put
    if (snakes[newPos]) newPos = snakes[newPos];
    if (ladders[newPos]) newPos = ladders[newPos];
    setPosition(newPos);
    setRolls([...rolls, roll]);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />

      <main className="flex-1 p-4 space-y-4">
        <h1 className="text-xl font-bold">🐍 Snakes & Ladders</h1>

        <PrizeSnlBoard />

        <DiceMind onRoll={handleRoll} />

        <div className="text-center mt-4">
          Current Position:{" "}
          <span className="font-bold">{position}</span>
        </div>

        <div className="text-sm text-gray-600">
          Roll history: {rolls.join(", ") || "-"}
        </div>
      </main>

      <Footer />
    </div>
  );
}

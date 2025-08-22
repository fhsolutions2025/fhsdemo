import React, { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import DiceMind from "@/components/dicemind";
import PrizeSnlBoard from "@/components/prize-snl-board";

type Player = {
  id: number;
  position: number;
};

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

export default function SnakesGame() {
  const [players, setPlayers] = useState<Player[]>([
    { id: 1, position: 0 },
    { id: 2, position: 0 },
  ]);
  const [turn, setTurn] = useState(0);

  const handleRoll = (roll: number) => {
    const newPlayers = [...players];
    let pos = newPlayers[turn].position + roll;

    if (snakes[pos]) pos = snakes[pos];
    if (ladders[pos]) pos = ladders[pos];
    if (pos > 100) pos = 100;

    newPlayers[turn].position = pos;
    setPlayers(newPlayers);
    setTurn((turn + 1) % players.length);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />

      <main className="flex-1 p-4 space-y-6">
        {/* Host video */}
        <section className="bg-black text-white flex items-center justify-center h-40 rounded-lg">
          Motabhai Host Video (PiP)
        </section>

        {/* Board */}
        <section className="grid grid-cols-10 gap-1 bg-white p-2 rounded shadow">
          {Array.from({ length: 100 }, (_, i) => {
            const num = 100 - i;
            const playerHere = players.find((p) => p.position === num);
            return (
              <div
                key={num}
                className="h-10 w-10 flex items-center justify-center border text-xs relative"
              >
                {num}
                {playerHere && (
                  <span className="absolute top-0 right-0 text-red-600">
                    P{playerHere.id}
                  </span>
                )}
              </div>
            );
          })}
        </section>

        {/* DiceMind controls */}
        <DiceMind onRoll={handleRoll} />

        {/* Prize board */}
        <PrizeSnlBoard />
      </main>

      <Footer />
    </div>
  );
}

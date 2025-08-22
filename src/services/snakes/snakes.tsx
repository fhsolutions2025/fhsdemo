import { useState } from "react";

const snakes: Record<number, number> = { 99: 54, 70: 55, 52: 42, 25: 2 };
const ladders: Record<number, number> = { 6: 27, 22: 58, 44: 79, 72: 93 };

export default function Snakes() {
  const [pos, setPos] = useState(1);
  const [dice, setDice] = useState<number | null>(null);

  const rollDice = () => {
    const d = Math.floor(Math.random() * 6) + 1;
    let newPos = pos + d;
    if (newPos > 100) newPos = pos; // must land exact
    if (snakes[newPos]) newPos = snakes[newPos];
    if (ladders[newPos]) newPos = ladders[newPos];
    setDice(d);
    setPos(newPos);
  };

  return (
    <div className="pt-16 pb-20 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">🐍 Snakes & Ladders</h1>

      <button
        onClick={rollDice}
        className="px-6 py-2 bg-blue-500 rounded-lg text-white mb-6"
        className="btn-secondary px-6 py-2 mb-6"
        className="btn-secondary px-6 py-2 bg-blue-500 rounded-lg text-white mb-6"
      >
        Roll Dice 🎲
      </button>

      {dice && <div className="text-lg mb-2">You rolled: {dice}</div>}
      <div className="text-2xl font-bold">Position: {pos}</div>
    </div>
  );
}
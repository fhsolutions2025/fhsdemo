import React, { useState, useEffect } from "react";

interface DiceMindProps {
  onRoll: (roll: number) => void;
}

export default function DiceMind({ onRoll }: DiceMindProps) {
  const [lastRoll, setLastRoll] = useState<number | null>(null);
  const [suggestion, setSuggestion] = useState<number | null>(null);

  const rollDice = () => {
    const roll = Math.floor(Math.random() * 6) + 1;
    setLastRoll(roll);
    onRoll(roll);
  };

  useEffect(() => {
    setSuggestion(Math.floor(Math.random() * 6) + 1);
  }, [lastRoll]);

  return (
    <div className="card text-center space-y-2">
      <h2 className="font-semibold">DiceMind 🎲</h2>
      <button
        onClick={rollDice}
        className="btn-secondary"
      >
        Roll Dice
      </button>
      <div>Last Roll: {lastRoll ?? "-"}</div>
      <div className="text-sm text-gray-600">
        AI Suggestion: try for{" "}
        <span className="font-bold">{suggestion ?? "-"}</span>
      </div>
    </div>
  );
}
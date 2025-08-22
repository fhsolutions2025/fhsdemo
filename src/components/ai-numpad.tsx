import React, { useEffect, useState } from "react";

interface AiNumPadProps {
  onSelect?: (num: number) => void;
}

export default function AiNumPad({ onSelect }: AiNumPadProps) {
  const [suggested, setSuggested] = useState<number[]>([]);

  // For demo: just pick random numbers 1–90
  useEffect(() => {
    const picks = Array.from({ length: 12 }, () =>
      Math.floor(Math.random() * 90) + 1
    );
    setSuggested(picks);
  }, []);

  const handleClick = (num: number) => {
    if (onSelect) onSelect(num);
  };

  return (
    <div className="grid grid-cols-3 gap-2 p-2 bg-white rounded shadow">
      {suggested.map((num, i) => (
        <button
          key={i}
          onClick={() => handleClick(num)}
          className="py-3 bg-green-500 text-white rounded hover:bg-green-600"
        >
          {num}
        </button>
      ))}

      {/* Escape hatch to full NumPad */}
      <button
        onClick={() => alert("Open full NumPad")}
        className="col-span-3 py-3 bg-gray-400 text-white rounded"
      >
        Open Full NumPad
      </button>
    </div>
  );
}

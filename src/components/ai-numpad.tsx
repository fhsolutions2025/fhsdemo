import React, { useState, useEffect } from "react";

interface AiNumPadProps {
  onSelect?: (num: number) => void;
}

export default function AiNumPad({ onSelect }: AiNumPadProps) {
  const [suggestion, setSuggestion] = useState<number | null>(null);

  useEffect(() => {
    // Demo suggestion refresh every 3s
    const interval = setInterval(() => {
      setSuggestion(Math.floor(Math.random() * 90) + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full p-2 bg-white rounded shadow space-y-2">
    <div className="card w-full space-y-2">
      <h2 className="font-semibold">AI NumPad 🤖</h2>
    return (
      <div className="w-full p-2 bg-white rounded shadow space-y-2">
        <div className="card w-full space-y-2">
          <h2 className="font-semibold">AI NumPad 🤖</h2>

      <div className="flex flex-wrap gap-2">
        {Array.from({ length: 9 }, (_, i) => i * 10 + 1).map((start) => (
          <button
            key={start}
            onClick={() => onSelect && onSelect(start)}
            className="flex-1 m-1 py-2 rounded bg-purple-200 hover:bg-purple-300"
          >
            {start}-{start + 9}
          </button>
        ))}
      </div>
          <div className="flex flex-wrap gap-2">
            {Array.from({ length: 9 }, (_, i) => i * 10 + 1).map((start) => (
              <button
                key={start}
                onClick={() => onSelect && onSelect(start)}
                className="flex-1 m-1 py-2 rounded bg-purple-200 hover:bg-purple-300"
              >
                {start}-{start + 9}
              </button>
            ))}
          </div>

      <div className="text-sm text-gray-600">
        Suggested pick:{" "}
        <span className="font-bold">{suggestion ?? "-"}</span>
          <div className="text-sm text-gray-600">
            Suggested pick:{" "}
            <span className="font-bold">{suggestion ?? "-"}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
    );
  }
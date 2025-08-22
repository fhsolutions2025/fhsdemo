import React, { useState } from "react";

type Prize = {
  id: number;
  label: string;
  amount: number;
  status: "OPEN" | "CLAIMED";
};

const demoPrizes: Prize[] = [
  { id: 1, label: "Winner – Rank 1", amount: 5000, status: "OPEN" },
  { id: 2, label: "Runner Up – Rank 2", amount: 3000, status: "OPEN" },
  { id: 3, label: "Third Place – Rank 3", amount: 2000, status: "OPEN" },
];

export default function PrizeSnlBoard() {
  const [prizes, setPrizes] = useState<Prize[]>(demoPrizes);

  const claimPrize = (id: number) => {
    setPrizes(
      prizes.map((p) =>
        p.id === id ? { ...p, status: "CLAIMED" } : p
      )
    );
  };

  return (
    <div className="bg-white rounded-lg p-4 shadow">
      <h2 className="font-semibold mb-2">
        Snakes & Ladders Prize Pool – ₹10,000
      </h2>
      <ul className="space-y-2">
        {prizes.map((p) => (
          <li
            key={p.id}
            className="flex justify-between items-center border-b pb-1"
          >
            <span>
              {p.label} – ₹{p.amount}
            </span>
            <button
              onClick={() => claimPrize(p.id)}
              disabled={p.status === "CLAIMED"}
              className={`px-2 py-1 text-xs rounded ${
                p.status === "OPEN"
                  ? "bg-green-500 text-white"
                  : "bg-gray-300 text-gray-600 cursor-not-allowed"
              }`}
            >
              {p.status}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

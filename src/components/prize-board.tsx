import React, { useState } from "react";

type Prize = {
  id: number;
  name: string;
  amount: number;
  status: "OPEN" | "PENDING" | "CLAIMED";
};

const demoPrizes: Prize[] = [
  { id: 1, name: "First Line", amount: 800, status: "OPEN" },
  { id: 2, name: "Second Line", amount: 800, status: "OPEN" },
  { id: 3, name: "Third Line", amount: 800, status: "OPEN" },
  { id: 4, name: "Four Corners", amount: 1000, status: "OPEN" },
  { id: 5, name: "Full House 1", amount: 3900, status: "OPEN" },
  { id: 6, name: "Full House 2", amount: 1500, status: "OPEN" },
];

export default function PrizeBoard() {
  const [prizes, setPrizes] = useState<Prize[]>(demoPrizes);

  // Demo: claim a prize when clicked
  const handleClaim = (id: number) => {
    setPrizes(
      prizes.map((p) =>
        p.id === id ? { ...p, status: "CLAIMED" } : p
      )
    );
  };

  return (
    <div className="bg-white rounded-lg p-4 shadow">
      <h2 className="font-semibold mb-2">Prize Board – Demo ₹10,000</h2>
      <ul className="space-y-2">
        {prizes.map((p) => (
          <li
            key={p.id}
            className="flex justify-between items-center border-b pb-1"
          >

 1  import React, { useState } from "react";
 2
 3  type Prize = {
 4    id: number;
 5    name: string;
 6    amount: number;
 7    status: "OPEN" | "PENDING" | "CLAIMED";
 8  };
 9
10  const demoPrizes: Prize[] = [
11    { id: 1, name: "First Line", amount: 800, status: "OPEN" },
12    { id: 2, name: "Second Line", amount: 800, status: "OPEN" },
13    { id: 3, name: "Third Line", amount: 800, status: "OPEN" },
14    { id: 4, name: "Four Corners", amount: 1000, status: "OPEN" },
15    { id: 5, name: "Full House 1", amount: 3900, status: "OPEN" },
16    { id: 6, name: "Full House 2", amount: 1500, status: "OPEN" },
17  ];
18
19  export default function PrizeBoard() {
20    const [prizes, setPrizes] = useState<Prize[]>(demoPrizes);
21
22    const handleClaim = (id: number) => {
23      setPrizes(
24        prizes.map((p) =>
25          p.id === id ? { ...p, status: "CLAIMED" } : p
26        )
27      );
28    };
29
30    return (
31      <div className="bg-white rounded-lg p-4 shadow">
32        <h2 className="font-semibold mb-2">Prize Board – Demo ₹10,000</h2>
33        <ul className="space-y-2">
34          {prizes.map((p) => (
35            <li
36              key={p.id}
37              className="flex justify-between items-center border-b pb-1"
38            >
39              <span>
40                {p.name} – ₹{p.amount}
41              </span>
42              <button
43                onClick={() => handleClaim(p.id)}
44                disabled={p.status === "CLAIMED"}
45                className={`px-2 py-1 text-xs rounded ${
46                  p.status === "OPEN"
47                    ? "bg-indigo-500 text-white"
48                    : "bg-gray-300 text-gray-600 cursor-not-allowed"
49                }`}
50              >
51                {p.status}
52              </button>
53            </li>
54          ))}
55        </ul>
56      </div>
57    );
58  }
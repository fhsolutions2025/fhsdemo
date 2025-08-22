 1  import React, { useState } from "react";
 2
 3  type Prize = {
 4    id: number;
 5    label: string;
 6    amount: number;
 7    status: "OPEN" | "CLAIMED";
 8  };
 9
10  const demoPrizes: Prize[] = [
11    { id: 1, label: "Winner – Rank 1", amount: 5000, status: "OPEN" },
12    { id: 2, label: "Runner Up – Rank 2", amount: 3000, status: "OPEN" },
13    { id: 3, label: "Third Place – Rank 3", amount: 2000, status: "OPEN" },
14  ];
15
16  export default function PrizeSnlBoard() {
17    const [prizes, setPrizes] = useState<Prize[]>(demoPrizes);
18
19    const claimPrize = (id: number) => {
20      setPrizes(
21        prizes.map((p) =>
22          p.id === id ? { ...p, status: "CLAIMED" } : p
23        )
24      );
25    };
26
27    return (
28      <div className="bg-white rounded-lg p-4 shadow">
29        <h2 className="font-semibold mb-2">
30          Snakes & Ladders Prize Pool – ₹10,000
31        </h2>
32        <ul className="space-y-2">
33          {prizes.map((p) => (
34            <li
35              key={p.id}
36              className="flex justify-between items-center border-b pb-1"
37            >
38              <span>
39                {p.label} – ₹{p.amount}
40              </span>
41              <button
42                onClick={() => claimPrize(p.id)}
43                disabled={p.status === "CLAIMED"}
44                className={`px-2 py-1 text-xs rounded ${
45                  p.status === "OPEN"
46                    ? "bg-green-500 text-white"
47                    : "bg-gray-300 text-gray-600 cursor-not-allowed"
48                }`}
49              >
50                {p.status}
51              </button>
52            </li>
53          ))}
54        </ul>
55      </div>
56    );
57  }

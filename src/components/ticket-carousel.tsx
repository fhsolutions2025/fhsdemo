 1  import React, { useState } from "react";
 2
 3  type TicketProps = {
 4    id: number;
 5  };
 6
 7  // Notice: number | null allowed
 8  function generateTicket(): (number | null)[][] {
 9    const ticket: (number | null)[][] = Array.from({ length: 3 }, () =>
10      Array(9).fill(null)
11    );
12
13    const columns = [
14      [1, 9],
15      [10, 19],
16      [20, 29],
17      [30, 39],
18      [40, 49],
19      [50, 59],
20      [60, 69],
21      [70, 79],
22      [80, 90],
23    ];
24
25    let count = 0;
26    while (count < 15) {
27      const col = Math.floor(Math.random() * 9);
28      const [min, max] = columns[col];
29      const num = Math.floor(Math.random() * (max - min + 1)) + min;
30
31      // skip if number already exists
32      if (ticket.some((row) => row[col] === num)) continue;
33
34      // pick row with available slot
35      const row = ticket.findIndex((r) => r[col] === null);
36      if (row !== -1) {
37        ticket[row][col] = num;
38        count++;
39      }
40    }
41
42    return ticket;
43  }
44
45  function Ticket({ id }: TicketProps) {
46    const [grid, setGrid] = useState<(number | null)[][]>(generateTicket());
47    const [daubed, setDaubed] = useState<Set<string>>(new Set());
48
49    const toggleDaub = (row: number, col: number) => {
50      const key = `${row}-${col}`;
51      const newDaubed = new Set(daubed);
52      if (newDaubed.has(key)) {
53        newDaubed.delete(key);
54      } else {
55        newDaubed.add(key);
56      }
57      setDaubed(newDaubed);
58    };
59
60    return (
61      <div className="inline-block bg-white rounded-lg shadow p-2 m-2">
62        <div className="text-sm font-semibold mb-1">Ticket #{id}</div>
63        <div className="grid grid-cols-9 gap-1">
64          {grid.map((row, r) =>
65            row.map((num, c) => {
66              const key = `${r}-${c}`;
66              const isDaubed = daubed.has(key);
67              return (
68                <div
69                  key={key}
70                  onClick={() => num && toggleDaub(r, c)}
71                  className={`h-10 w-10 flex items-center justify-center border rounded cursor-pointer text-sm ${
72                    num
73                      ? isDaubed
74                        ? "bg-green-500 text-white"
75                        : "bg-yellow-100 hover:bg-yellow-200"
76                      : "bg-gray-200"
77                  }`}
78                >
79                  {num ?? ""}
80                </div>
81              );
82            })
83          )}
84        </div>
85      </div>
86    );
87  }
88
89  export default function TicketCarousel() {
90    // For demo: always render 3 tickets
91    const tickets = [1, 2, 3];
92
93    return (
94      <div className="overflow-x-auto flex">
95        {tickets.map((id) => (
96          <Ticket key={id} id={id} />
97        ))}
98      </div>
99    );
100  }

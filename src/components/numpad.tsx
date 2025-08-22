 1  import React, { useState } from "react";
 2
 3  interface NumPadProps {
 4    onSelect?: (num: number) => void;
 5  }
 6
 7  export default function NumPad({ onSelect }: NumPadProps) {
 8    const [rangeStart, setRangeStart] = useState<number | null>(null);
 9
10    // Ranges: 1–9, 10–19, ... 90
11    const ranges = Array.from({ length: 9 }, (_, i) => i * 10 + 1);
12
13    const handleRangeClick = (start: number) => {
14      setRangeStart(start);
15    };
16
17    const handleNumberClick = (num: number) => {
18      if (onSelect) onSelect(num);
19      setRangeStart(null); // close overlay
20    };
21
22    return (
23      <div className="w-full p-2">
24        {/* Range bar */}
25        <div className="flex justify-between mb-2">
26          {ranges.map((start) => (
27            <button
28              key={start}
29              onClick={() => handleRangeClick(start)}
30              className="flex-1 m-1 py-2 rounded bg-indigo-200 hover:bg-indigo-300"
31            >
32              {start}-{start + 9}
33            </button>
34          ))}
35        </div>
36
37        {/* Overlay grid when a range is selected */}
38        {rangeStart !== null && (
39          <div className="grid grid-cols-5 gap-2 bg-white p-2 rounded shadow">
40            {Array.from({ length: 10 }, (_, i) => rangeStart + i).map(
41              (num) =>
42                num <= 90 && (
43                  <button
44                    key={num}
45                    onClick={() => handleNumberClick(num)}
46                    className="py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
47                  >
48                    {num}
49                  </button>
50                )
51            )}
52          </div>
53        )}
54      </div>
55    );
56  }

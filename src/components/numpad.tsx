import React, { useState } from "react";

interface NumPadProps {
  onCallNumber?: (num: number) => void;
}

const NumPad: React.FC<NumPadProps> = ({ onCallNumber }) => {
  const [rangeStart, setRangeStart] = useState<number | null>(null);
  const ranges = Array.from({ length: 9 }, (_, i) => i * 10 + 1);

  const handleRangeClick = (start: number) => {
    setRangeStart(start);
  };

  const handleNumberClick = (num: number) => {
    if (onCallNumber) onCallNumber(num);
    setRangeStart(null);
  };

  return (
    <div className="w-full p-2">
      <div className="flex justify-between mb-2">
        {ranges.map((start) => (
          <button
            key={start}
            onClick={() => handleRangeClick(start)}
            className="flex-1 m-1 py-2 rounded bg-indigo-200 hover:bg-indigo-300"
          >
            {start}-{start + 9}
          </button>
        ))}
      </div>

      {rangeStart !== null && (
        <div className="grid grid-cols-5 gap-2 bg-white p-2 rounded shadow">
          {Array.from({ length: 10 }, (_, i) => rangeStart + i).map(
            (num) =>
              num <= 90 && (
                <button
                  key={num}
                  onClick={() => handleNumberClick(num)}
                  className="py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
                >
                  {num}
                </button>
              )
          )}
        </div>
      )}
    </div>
  );
};

export default NumPad;

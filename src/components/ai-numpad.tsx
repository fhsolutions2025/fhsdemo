import React from "react";

export interface AiNumPadProps {
  onCallNumber: (num: number) => void;
}

const AiNumPad: React.FC<AiNumPadProps> = ({ onCallNumber }) => {
  const numbers = Array.from({ length: 12 }, (_, i) => i + 1);

  return (
    <div className="grid grid-cols-3 gap-2">
      {numbers.map((n) => (
        <button
          key={n}
          type="button"
          onClick={() => onCallNumber(n)}
          className="p-4 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        >
          {n}
        </button>
      ))}
    </div>
  );
};

export default AiNumPad;

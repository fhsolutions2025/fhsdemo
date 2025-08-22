import { useState } from "react";

export default function Housie() {
  const [called, setCalled] = useState<number[]>([]);
  const [last, setLast] = useState<number | null>(null);

  const callNumber = () => {
    if (called.length >= 90) return;
    let num;
    do {
      num = Math.floor(Math.random() * 90) + 1;
    } while (called.includes(num));
    setCalled([...called, num]);
    setLast(num);
  };

  return (
    <div className="pt-16 pb-20 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">🎟️ Housie</h1>
      
      <button
        onClick={callNumber}
        className="px-6 py-2 bg-green-500 rounded-lg text-white mb-6"
        className="btn-primary px-6 py-2 mb-6"
      >
        Call Number
      </button>

      {last && <div className="text-4xl font-bold mb-4">Last: {last}</div>}

      <div className="grid grid-cols-10 gap-2">
        {Array.from({ length: 90 }, (_, i) => i + 1).map((n) => (
          <div
            key={n}
            className={`w-8 h-8 flex items-center justify-center rounded text-sm font-bold ${
              called.includes(n) ? "bg-green-600 text-white" : "bg-gray-200 text-gray-800"
            }`}
          >
            {n}
          </div>
        ))}
      </div>
    </div>
  );
}
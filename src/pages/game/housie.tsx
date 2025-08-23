import { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import NumPad from "@/components/numpad";
import AiNumPad from "@/components/ai-numpad";

function generateTicket(): (number | null)[][] {
  const ticket: (number | null)[][] = Array.from({ length: 3 }, () =>
    Array(9).fill(null)
  );
  const columns = [
    [1, 9],
    [10, 19],
    [20, 29],
    [30, 39],
    [40, 49],
    [50, 59],
    [60, 69],
    [70, 79],
    [80, 90],
  ];
  let count = 0;
  while (count < 15) {
    const col = Math.floor(Math.random() * 9);
    const [min, max] = columns[col];
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    if (ticket.some((row) => row[col] === num)) continue;
    const row = ticket.findIndex((r) => r[col] === null);
    if (row !== -1) {
      ticket[row][col] = num;
      count++;
    }
  }
  return ticket;
}

export default function Housie() {
  const [ticket] = useState<(number | null)[][]>(generateTicket);
  const [called, setCalled] = useState<number[]>([]);
  const [last, setLast] = useState<number | null>(null);
  const [firstRowWin, setFirstRowWin] = useState(false);
  const [fullHouseWin, setFullHouseWin] = useState(false);

  const handleSelect = (num: number) => {
    if (called.includes(num)) return;
    const newCalled = [...called, num];
    setCalled(newCalled);
    setLast(num);

    const calledSet = new Set(newCalled);
    const firstRowNums = ticket[0].filter((n): n is number => n !== null);
    const allNums = ticket.flat().filter((n): n is number => n !== null);
    if (!firstRowWin && firstRowNums.every((n) => calledSet.has(n))) {
      setFirstRowWin(true);
    }
    if (!fullHouseWin && allNums.every((n) => calledSet.has(n))) {
      setFullHouseWin(true);
    }
  };

  return (
    <>
      <Header />
      <div className="pt-16 pb-20 flex flex-col items-center space-y-4">
        {last && <div className="text-4xl font-bold">Last: {last}</div>}
        <div className="card">
          <div className="grid grid-cols-9 gap-1">
            {ticket.map((row, r) =>
              row.map((num, c) => (
                <div
                  key={`${r}-${c}`}
                  className={`w-10 h-10 flex items-center justify-center border rounded text-sm ${
                    num
                      ? called.includes(num)
                        ? "bg-green-500 text-white"
                        : "bg-yellow-100"
                      : "bg-gray-200"
                  }`}
                >
                  {num ?? ""}
                </div>
              ))
            )}
          </div>
        </div>
        {firstRowWin && (
          <div className="text-green-600 font-bold">First Row Complete!</div>
        )}
        {fullHouseWin && (
          <div className="text-purple-600 font-bold">Full House!</div>
        )}
        <AiNumPad onSelect={handleSelect} />
        <NumPad onSelect={handleSelect} />
        <div className="grid grid-cols-10 gap-2">
          {Array.from({ length: 90 }, (_, i) => i + 1).map((n) => (
            <div
              key={n}
              className={`w-8 h-8 flex items-center justify-center rounded text-sm font-bold ${
                called.includes(n)
                  ? "bg-green-600 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              {n}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

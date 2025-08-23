import React, { useState } from "react";

type TicketProps = {
  id: number;
};

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

function Ticket({ id }: TicketProps) {
  const [grid] = useState<(number | null)[][]>(generateTicket());
  const [daubed, setDaubed] = useState<Set<string>>(new Set());

  const toggleDaub = (row: number, col: number) => {
    const key = `${row}-${col}`;
    const newDaubed = new Set(daubed);
    if (newDaubed.has(key)) {
      newDaubed.delete(key);
    } else {
      newDaubed.add(key);
    }
    setDaubed(newDaubed);
  };

  return (
    <div className="inline-block bg-white rounded-lg shadow p-2 m-2">
      <div className="text-sm font-semibold mb-1">Ticket #{id}</div>
      <div className="grid grid-cols-9 gap-1">
        {grid.map((row, r) =>
          row.map((num, c) => {
            const key = `${r}-${c}`;
            const isDaubed = daubed.has(key);
            return (
              <div
                key={key}
                onClick={() => num && toggleDaub(r, c)}
                className={`h-10 w-10 flex items-center justify-center border rounded cursor-pointer text-sm ${
                  num
                    ? isDaubed
                      ? "bg-green-500 text-white"
                      : "bg-yellow-100 hover:bg-yellow-200"
                    : "bg-gray-200"
                }`}
              >
                {num ?? ""}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default function TicketCarousel() {
  const tickets = [1, 2, 3];

  return (
    <div className="overflow-x-auto flex">
      {tickets.map((id) => (
        <Ticket key={id} id={id} />
      ))}
    </div>
  );
}

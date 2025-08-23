// src/components/ticket-carousel.tsx
import React from "react";

interface TicketCarouselProps {
  calledNumbers: number[];
}

export default function TicketCarousel({ calledNumbers }: TicketCarouselProps) {
  return (
    <div className="grid grid-cols-5 gap-4 bg-white p-4 rounded-lg shadow-lg">
      {Array.from({ length: 5 }, (_, ticketIndex) => (
        <div
          key={ticketIndex}
          className="border border-gray-300 rounded-lg p-3 grid grid-cols-9 gap-1"
        >
          {Array.from({ length: 27 }, (_, cellIndex) => {
            const number = ticketIndex * 27 + cellIndex + 1;
            const isCalled = calledNumbers.includes(number);

            return (
              <div
                key={cellIndex}
                className={`w-6 h-6 flex items-center justify-center text-xs rounded 
                ${isCalled ? "bg-green-500 text-white" : "bg-gray-100 text-gray-800"}`}
              >
                {number <= 90 ? number : ""}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}

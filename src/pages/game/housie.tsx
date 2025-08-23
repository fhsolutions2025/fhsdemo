// src/pages/game/housie.tsx
import React, { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import NumPad from "@/components/numpad";
import AiNumPad from "@/components/ai-numpad";
import TicketCarousel from "@/components/ticket-carousel";

export default function HousieGame() {
  const [calledNumbers, setCalledNumbers] = useState<number[]>([]);
  const [aiMode, setAiMode] = useState(false);

  const handleCallNumber = (num: number) => {
    if (!calledNumbers.includes(num)) {
      setCalledNumbers([...calledNumbers, num]);
    }
  };

  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-b from-purple-100 to-indigo-200">
      {/* Header */}
      <Header />

      {/* Content */}
      <div className="flex-grow flex flex-col items-center justify-center p-6">
        <h1 className="text-3xl font-bold mb-6">🎉 FullHousey Housie 🎉</h1>

        {/* Ticket Carousel */}
        <div className="mb-6 w-full max-w-3xl">
          <TicketCarousel calledNumbers={calledNumbers} />
        </div>

        {/* Called Numbers */}
        <div className="grid grid-cols-10 gap-2 mb-6">
          {Array.from({ length: 90 }, (_, i) => {
            const num = i + 1;
            const isCalled = calledNumbers.includes(num);
            return (
              <div
                key={num}
                className={`w-8 h-8 flex items-center justify-center rounded text-sm font-medium border 
                ${isCalled ? "bg-green-400 text-white" : "bg-gray-100 text-gray-800"}`}
              >
                {num}
              </div>
            );
          })}
        </div>

        {/* Number Pads */}
        <div className="mt-6 flex flex-col items-center gap-4">
          {aiMode ? (
            <AiNumPad onCallNumber={handleCallNumber} />
          ) : (
            <NumPad onCallNumber={handleCallNumber} />
          )}

          <button
            onClick={() => setAiMode(!aiMode)}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600"
          >
            {aiMode ? "Switch to Manual Mode" : "Switch to AI Mode"}
          </button>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}

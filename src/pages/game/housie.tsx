import React, { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import NumPad from "@/components/numpad";
import AiNumPad from "@/components/ai-numpad";
import PrizeBoard from "@/components/prize-board";
import TicketCarousel from "@/components/ticket-carousel";

export default function HousieGame() {
  const [calledNumbers, setCalledNumbers] = useState<number[]>([]);
  const [lastNumber, setLastNumber] = useState<number | null>(null);
  const [useAiPad, setUseAiPad] = useState(false);

  // Call next random number (1–90)
  const callNumber = () => {
    if (calledNumbers.length >= 90) return;
    let num;
    do {
      num = Math.floor(Math.random() * 90) + 1;
    } while (calledNumbers.includes(num));
    setCalledNumbers([...calledNumbers, num]);
    setLastNumber(num);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />

      <main className="flex-1 p-4 space-y-6">
        {/* Host video */}
        <section className="bg-black text-white flex items-center justify-center h-40 rounded-lg">
          HeyGen Host Video (PiP)
        </section>

        {/* Current number + drum */}
        <section className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <h2 className="font-semibold">Last Number</h2>
            <div className="text-3xl">{lastNumber ?? "-"}</div>
          </div>

          <div className="flex-1">
            <h2 className="font-semibold">Called Numbers</h2>
            <div className="flex flex-wrap gap-1 max-h-32 overflow-y-auto">
              {calledNumbers.map((n) => (
                <span key={n} className="px-2 py-1 bg-indigo-100 rounded">
                  {n}
                </span>
              ))}
            </div>
          </div>

          <button
            onClick={callNumber}
            className="px-4 py-2 bg-indigo-600 text-white rounded"
          >
            Call Next
          </button>
        </section>

        {/* Tickets carousel */}
        <TicketCarousel />

        {/* Prize board */}
        <PrizeBoard />

        {/* NumPad / AiNumPad */}
        <section className="bg-white rounded-lg p-4 shadow">
          <div className="flex justify-between items-center mb-2">
            <h2 className="font-semibold">
              {useAiPad ? "AI NumPad" : "NumPad"}
            </h2>
            <button
              onClick={() => setUseAiPad(!useAiPad)}
              className="px-3 py-1 bg-gray-200 rounded"
            >
              Switch to {useAiPad ? "NumPad" : "AI NumPad"}
            </button>
          </div>

          {useAiPad ? (
            <AiNumPad onSelect={(n) => console.log("AI selected:", n)} />
          ) : (
            <NumPad onSelect={(n) => console.log("Selected:", n)} />
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}

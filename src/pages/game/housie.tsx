import React, { useState } from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import NumPad from "../../components/numpad";
import AiNumPad from "../../components/ai-numpad";
import PrizeBoard from "../../components/prize-board";
import TicketCarousel from "../../components/ticket-carousel";

export default function Housie() {
  const [selectedNumber, setSelectedNumber] = useState<number | null>(null);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />

      <main className="flex-1 p-4 space-y-4">
        <h1 className="text-xl font-bold">🎲 Housie Show</h1>

        <PrizeBoard />

        <TicketCarousel />

        <div className="grid grid-cols-2 gap-4">
          <NumPad onSelect={setSelectedNumber} />
          <AiNumPad onSelect={setSelectedNumber} />
        </div>

        <div className="text-center mt-4">
          Selected Number:{" "}
          <span className="font-bold">{selectedNumber ?? "-"}</span>
        </div>
      </main>

      <Footer />
    </div>
  );
}

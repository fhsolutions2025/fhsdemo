import React from "react";
import Link from "next/link";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Lobby() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
    <div className="flex flex-col min-h-screen bg-gradient-relaxed">
      <Header />

      <main className="flex-1 p-6 space-y-6">
        <h1 className="text-2xl font-bold">🎮 Game Lobby</h1>
        <p className="text-gray-700">
          Welcome to the FullHousey demo! Choose a show to play:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Link
            href="/game/housie"
            className="p-6 bg-white rounded-lg shadow hover:shadow-md transition"
            className="card p-6 hover:shadow-md transition"
          >
            <h2 className="text-lg font-semibold mb-2">🎲 Housie Show</h2>
            <p className="text-sm text-gray-600">
              Classic Housie with AI NumPad support and prize pool ₹10,000.
            </p>
          </Link>

          <Link
            href="/game/snakes"
            className="p-6 bg-white rounded-lg shadow hover:shadow-md transition"
            className="card p-6 hover:shadow-md transition"
          >
            <h2 className="text-lg font-semibold mb-2">🐍 Snakes & Ladders</h2>
            <p className="text-sm text-gray-600">
              Play Snakes & Ladders with DiceMind AI guidance. Prize pool ₹10,000.
            </p>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
}

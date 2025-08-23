import React from "react";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Lobby() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-100 via-white to-purple-100">
      <Header />

      <main className="flex-1 px-6 py-10 space-y-8 max-w-5xl mx-auto w-full">
        {/* Title Section */}
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-800">
            🎮 Game Lobby
          </h1>
          <p className="text-gray-600 mt-2">
            Welcome to the FullHousey demo! Choose a show to play:
          </p>
        </div>

        {/* Game Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Housie */}
          <Link href="/game/housie" passHref>
            <a className="block rounded-2xl border border-gray-200 bg-white shadow-lg p-6 hover:shadow-2xl hover:border-blue-400 transition-all">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                🎲 Housie Show
              </h2>
              <p className="text-sm text-gray-600">
                Classic Housie with AI NumPad support. Prize pool:{" "}
                <span className="font-bold text-green-600">₹10,000</span>
              </p>
            </a>
          </Link>

          {/* Snakes & Ladders */}
          <Link href="/game/snakes" passHref>
            <a className="block rounded-2xl border border-gray-200 bg-white shadow-lg p-6 hover:shadow-2xl hover:border-green-400 transition-all">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                🐍 Snakes & Ladders
              </h2>
              <p className="text-sm text-gray-600">
                Play Snakes & Ladders with <span className="font-bold">DiceMind AI</span>. Prize pool:{" "}
                <span className="font-bold text-green-600">₹10,000</span>
              </p>
            </a>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}

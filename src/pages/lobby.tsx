import React from "react";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Lobby() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header */}
      <Header />

      {/* Main content */}
      <main className="flex-1 p-4 space-y-4">
        <h1 className="text-xl font-semibold mb-2">Lobby</h1>
        <p className="text-gray-600 mb-4">Choose your game</p>

        <div className="grid grid-cols-2 gap-4">
          <Link href="/game/housie">
            <div className="p-4 rounded-xl shadow-md bg-white hover:bg-gray-50 cursor-pointer text-center">
              🎲 Housie Show
            </div>
          </Link>

          <Link href="/game/snakes">
            <div className="p-4 rounded-xl shadow-md bg-white hover:bg-gray-50 cursor-pointer text-center">
              🐍 Snakes & Ladders
            </div>
          </Link>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

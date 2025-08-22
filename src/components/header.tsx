import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-indigo-700 text-white py-3 px-4 flex justify-between items-center shadow">
      {/* Logo / Title */}
      <Link href="/lobby" className="text-lg font-bold">
        FullHousey 🎲
      </Link>

      {/* Nav buttons */}
      <nav className="space-x-4">
        <Link href="/game/housie" className="hover:underline">
          Housie
        </Link>
        <Link href="/game/snakes" className="hover:underline">
          Snakes & Ladders
        </Link>
        <Link href="/profile" className="hover:underline">
          My Account
        </Link>
      </nav>
    </header>
  );
}

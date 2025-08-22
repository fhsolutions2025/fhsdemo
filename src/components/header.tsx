import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full flex items-center justify-between p-4 bg-indigo-600 text-white">
      {/* Left (empty for now, can hold back button later) */}
      <div className="w-1/3"></div>

      {/* Center Logo */}
      <div className="w-1/3 text-center font-bold text-xl">
        Housie Khazana
      </div>

      {/* Right: balance + notifications */}
      <div className="w-1/3 flex justify-end gap-4 text-sm">
        <span className="cursor-pointer">🔔</span>
        <span className="cursor-pointer">💰 500</span>
        <Link href="/account">
          <span className="cursor-pointer">👤</span>
        </Link>
      </div>
    </header>
  );
}

import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full flex justify-around items-center p-3 bg-white border-t text-sm text-gray-600">
      <Link href="/lobby">🏠 Home</Link>
      <Link href="/cashier">💳 Cashier</Link>
      <Link href="/discovery">🌐 Discovery</Link>
      <Link href="/mygames">🎮 My Games</Link>
      <Link href="/support">🧑‍💻 Support</Link>
    </footer>
  );
}

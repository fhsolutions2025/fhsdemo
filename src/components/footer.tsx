// src/components/Footer.tsx
import { useRouter } from "next/router";
import { Home, Wallet, Gamepad2, LifeBuoy, Sparkles, Dice5, Grid3x3 } from "lucide-react";

export default function Footer() {
  const router = useRouter();

  // detect which page we are on
  const path = router.pathname;

  // NAT adaptive label + icon
  let natLabel = "Discover";
  let NatIcon = Sparkles;
  if (path.includes("game/housie")) {
    natLabel = "AI NumPad";
    NatIcon = Grid3x3;
  } else if (path.includes("game/snakes")) {
    natLabel = "DiceMind";
    NatIcon = Dice5;
  }

  return (
    <footer className="fixed bottom-0 left-0 w-full bg-gray-900 text-white border-t border-gray-700">
      <div className="flex justify-around items-center h-16 text-sm">
        {/* Home */}
        <button
          onClick={() => router.push("/lobby")}
          className="flex flex-col items-center hover:text-blue-400"
        >
          <Home className="w-5 h-5" />
          <span>Home</span>
        </button>

        {/* Cashier */}
        <button
          onClick={() => alert("Wallet screen coming soon 💰")}
          className="flex flex-col items-center hover:text-blue-400"
        >
          <Wallet className="w-5 h-5" />
          <span>Cashier</span>
        </button>

        {/* NAT (Adaptive) */}
        <button
          onClick={() => alert(`${natLabel} activated ✨`)}
          className="flex flex-col items-center text-yellow-400 animate-pulse"
        >
          <NatIcon className="w-6 h-6" />
          <span className="font-bold">{natLabel}</span>
        </button>

        {/* My Games */}
        <button
          onClick={() => alert("My Games 📚")}
          className="flex flex-col items-center hover:text-blue-400"
        >
          <Gamepad2 className="w-5 h-5" />
          <span>My Games</span>
        </button>

        {/* Support */}
        <button
          onClick={() => alert("Support with AI 🤖")}
          className="flex flex-col items-center hover:text-blue-400"
        >
          <LifeBuoy className="w-5 h-5" />
          <span>Support</span>
        </button>
      </div>
    </footer>
  );
}

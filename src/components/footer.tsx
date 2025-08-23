import { useRouter } from "next/router";
import {
  Home,
  Wallet,
  Gamepad2,
  LifeBuoy,
  Sparkles,
  Dice5,
  Grid3x3,
} from "lucide-react";

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
    <footer className="footer fixed bottom-0 left-0 w-full bg-gray-900 text-white border-t border-gray-700">
      <div className="flex justify-around items-center h-16 text-sm">
        {/* Home */}
        <button
          onClick={() => router.push("/lobby")}
          className="nav-btn nav-btn-home flex flex-col items-center hover:text-blue-400"
        >
          <Home className="w-5 h-5" />
          <span>Home</span>
        </button>

        {/* Cashier */}
        <button
          onClick={() => alert("Wallet screen coming soon 💰")}
          className="nav-btn nav-btn-cashier flex flex-col items-center hover:text-blue-400"
        >
          <Wallet className="w-5 h-5" />
          <span>Cashier</span>
        </button>

        {/* NAT (Adaptive) */}
        <button
          onClick={() => alert(`${natLabel} activated ✨`)}
          className="nav-btn nav-btn-nat animate-pulse flex flex-col items-center text-yellow-400"
        >
          <NatIcon className="w-5 h-5" />
          <span className="font-bold">{natLabel}</span>
        </button>

        {/* My Games */}
        <button
          onClick={() => alert("My Games 📚")}
          className="nav-btn nav-btn-games flex flex-col items-center hover:text-blue-400"
        >
          <Gamepad2 className="w-5 h-5" />
          <span>My Games</span>
        </button>

        {/* Support */}
        <button
          onClick={() => alert("Support with AI 🤖")}
          className="nav-btn nav-btn-support flex flex-col items-center hover:text-blue-400"
        >
          <LifeBuoy className="w-5 h-5" />
          <span>Support</span>
        </button>
      </div>
    </footer>
  );
}
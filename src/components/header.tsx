import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  const { pathname } = router;

  return (
    <header className="fixed top-0 left-0 w-full h-14 bg-gray-800 text-white flex items-center justify-between px-4 shadow-md z-50">
    <header className="header">
      {/* Logo / Brand */}
      <Link href="/lobby" className="text-xl font-bold tracking-wide">
        FullHousey
      </Link>

      {/* Context-sensitive title */}
      <h2 className="text-lg font-semibold">
        {pathname.includes("housie") && "🎟️ Housie"}
        {pathname.includes("snakes") && "🐍 Snakes & Ladders"}
        {pathname === "/lobby" && "🏠 Lobby"}
      </h2>

      {/* Placeholder for profile/avatar */}
      <Link href="/profile" className="rounded-full bg-purple-500 w-8 h-8 flex items-center justify-center">
      <Link href="/profile" className="profile-glow bg-purple-500 w-8 h-8 flex items-center justify-center">
        😊
      </Link>
    </header>
  );
}
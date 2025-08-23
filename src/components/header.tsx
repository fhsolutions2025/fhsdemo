import Link from "next/link";
import { useRouter } from "next/router";
import { useProfile } from "@/context/ProfileContext";

export default function Header() {
  const { profile } = useProfile();
  const { pathname } = useRouter();

  const title = pathname.includes("housie")
    ? "Housie"
    : pathname.includes("snakes")
    ? "Snakes"
    : "Lobby";

  const backgroundColor = profile?.palette.primary ?? "#000";

  return (
    <header className="header" style={{ backgroundColor }}>
      <Link href="/lobby" className="text-xl font-bold tracking-wide">
        FullHousey
      </Link>
      <h2 className="text-lg font-semibold">{title}</h2>
      <Link href="/profile" className="w-8 h-8 rounded-full overflow-hidden">
        {profile?.img ? (
          <img
            src={profile.img}
            alt={profile.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="flex items-center justify-center w-full h-full bg-white/20 text-sm">
            😊
          </span>
        )}
      </Link>
    </header>
  );
}

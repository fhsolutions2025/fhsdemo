import { useRouter } from "next/router";
import Header from "@/components/header";
import { useProfile, Profile } from "@/context/ProfileContext";

const profiles: Profile[] = [
  {
    id: "bigwins",
    name: "Big Wins",
    img: "/images/bigwins.png",
    gradientFrom: "#f59e0b",
    gradientTo: "#ef4444",
    palette: { primary: "#f59e0b", secondary: "#ef4444", accent: "#fbbf24" },
    featured: "high-stakes",
  },
  {
    id: "ladyboss",
    name: "Lady Boss",
    img: "/images/ladyboss.png",
    gradientFrom: "#ec4899",
    gradientTo: "#a855f7",
    palette: { primary: "#ec4899", secondary: "#a855f7", accent: "#f9a8d4" },
    featured: "tournament",
  },
  {
    id: "mainacts",
    name: "Main Acts",
    img: "/images/mainacts.png",
    gradientFrom: "#06b6d4",
    gradientTo: "#3b82f6",
    palette: { primary: "#06b6d4", secondary: "#3b82f6", accent: "#67e8f9" },
    featured: "showtime",
  },
  {
    id: "relaxed",
    name: "Relaxed",
    img: "/images/relaxed.png",
    gradientFrom: "#22c55e",
    gradientTo: "#16a34a",
    palette: { primary: "#22c55e", secondary: "#16a34a", accent: "#86efac" },
    featured: "casual",
  },
  {
    id: "tezz",
    name: "Tezz",
    img: "/images/tezz.png",
    gradientFrom: "#f97316",
    gradientTo: "#dc2626",
    palette: { primary: "#f97316", secondary: "#dc2626", accent: "#fb923c" },
    featured: "speed",
  },
];

export default function Splash() {
  const router = useRouter();
  const { profile, setProfile } = useProfile();

  if (!profile) {
    return (
      <div className="flex flex-col min-h-screen bg-base-200">
        <Header />
        <main className="pt-16 text-white">
          <h2 className="text-3xl font-bold mb-6 text-center">🎭 Choose Your Profile</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 px-8">
            {profiles.map((p) => (
              <button
                key={p.id}
                onClick={() => setProfile(p)}
                className="flex flex-col items-center"
              >
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-24 h-24 rounded-full border-2 border-yellow-400 mb-3"
                />
                <span className="font-semibold">{p.name}</span>
              </button>
            ))}
          </div>
        </main>
      </div>
    );
  }

  const backgroundStyle = {
    backgroundImage: `linear-gradient(to bottom right, ${profile.gradientFrom}, ${profile.gradientTo})`,
  };

  return (
    <div className="flex flex-col min-h-screen text-white" style={backgroundStyle}>
      <Header />
      <main className="flex flex-1 flex-col items-center justify-center pt-16">
        <img
          src={`/images/${profile.id}-splash-banner.png`}
          alt={`${profile.name} banner`}
          className="w-full max-w-md mb-10"
        />
        <button onClick={() => router.push("/otp")} className="btn-primary">
          Continue →
        </button>
      </main>
    </div>
  );
}

Splash.showHeader = true;
Splash.showFooter = false;

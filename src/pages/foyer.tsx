import Header from "@/components/header";
import { useProfile } from "@/context/ProfileContext";
import { useRouter } from "next/router";
import { useEffect, CSSProperties } from "react";

const recommendedGames = [
  {
    id: "housie",
    title: "🎲 Housie Show",
    description: "Classic bingo fun for everyone",
    link: "/game/housie",
  },
  {
    id: "snakes",
    title: "🐍 Snakes & Ladders",
    description: "Race to the top in this timeless game",
    link: "/game/snakes",
  },
];

export default function Foyer() {
  const { profile } = useProfile();
  const router = useRouter();

  useEffect(() => {
    if (!profile) router.push("/profile");
  }, [profile, router]);

  if (!profile) {
    return (
      <div className="flex items-center justify-center h-screen">Loading...</div>
    );
  }

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        backgroundImage: `linear-gradient(to bottom right, ${profile.gradientFrom}, ${profile.gradientTo}), url(${profile.img})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Header />
      <main
        className="flex-1 p-4 text-gray-800 space-y-4"
        style={
          {
            "--primary": profile.palette.primary,
            "--secondary": profile.palette.secondary,
            "--accent": profile.palette.accent,
          } as CSSProperties
        }
      >
        <section className="card text-center">
          <img
            src={profile.img}
            alt={profile.name}
            className="w-24 h-24 mx-auto rounded-full mb-2"
          />
          <h2 className="text-xl font-bold">Welcome, {profile.name}!</h2>
        </section>

        <section className="card">
          <h3 className="text-lg font-semibold mb-2">My Account</h3>
          <p className="mb-4">Balance: ₹0</p>
          <div className="flex gap-2">
            <button className="btn-primary">Deposit</button>
            <button className="btn-secondary">Withdraw</button>
          </div>
        </section>

        <section className="card">
          <h3 className="text-lg font-semibold mb-2">Featured Show</h3>
          <p className="mb-4 capitalize">
            {profile.featured} entertainment selected for you
          </p>
          <button className="btn-accent">
            Explore {profile.featured} Shows
          </button>
        </section>

        <section className="card">
          <h3 className="text-lg font-semibold mb-4">Recommended Games</h3>
          <div className="space-y-2">
            {recommendedGames.map((g) => (
              <div
                key={g.id}
                className="flex items-center justify-between p-2 rounded bg-gray-100"
              >
                <div>
                  <p className="font-medium">{g.title}</p>
                  <p className="text-sm text-gray-600">{g.description}</p>
                </div>
                <button
                  className="btn-primary"
                  onClick={() => (window.location.href = g.link)}
                >
                  Play
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

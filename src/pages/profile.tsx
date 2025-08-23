import React from "react";
import Header from "@/components/header";
import { Profile } from "@/context/ProfileContext";

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
    id: "tezz",
    name: "Tezz",
    img: "/images/tezz.png",
    gradientFrom: "#22c55e",
    gradientTo: "#16a34a",
    palette: { primary: "#22c55e", secondary: "#16a34a", accent: "#86efac" },
    featured: "casual",
  },
  {
    id: "mummyssee",
    name: "Mummyssee",
    img: "/images/mummyssee.png",
    gradientFrom: "#06b6d4",
    gradientTo: "#3b82f6",
    palette: { primary: "#06b6d4", secondary: "#3b82f6", accent: "#67e8f9" },
    featured: "tournament",
  },
  {
    id: "motabhai",
    name: "JJ Motabhai",
    img: "/images/motabhai.png",
    gradientFrom: "#f97316",
    gradientTo: "#dc2626",
    palette: { primary: "#f97316", secondary: "#dc2626", accent: "#fb923c" },
    featured: "high-stakes",
  },
];

export default function ProfileSelector() {
  const selectProfile = (profile: Profile) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("profile", JSON.stringify(profile));
      window.location.href = "/foyer";
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-800 to-gray-900 text-white">
      <Header />
      <main className="flex-1 p-8">
        <h2 className="text-3xl font-bold mb-6 text-center">
          🎭 Choose Your Profile
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          {profiles.map((p) => (
            <button
              key={p.id}
              onClick={() => selectProfile(p)}
              className="flex flex-col items-center bg-gray-800 rounded-xl shadow-lg p-4 hover:bg-gray-700 hover:scale-105 transition"
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

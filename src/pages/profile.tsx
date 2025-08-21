import { useRouter } from "next/router";

// Available Profiles
const profiles = [
  { key: "relaxed", label: "Relaxed", img: "/images/relaxed.png" },
  { key: "tezz", label: "Tezz", img: "/images/tezz.png" },
  { key: "bigwins", label: "Big Wins", img: "/images/bigwins.png" },
  { key: "mainacts", label: "Main Acts", img: "/images/mainacts.png" },
  { key: "ladyboss", label: "Lady Boss", img: "/images/ladyboss.png" },
];

export default function ProfileSelector() {
  const router = useRouter();

  const handleSelect = (key: string) => {
    router.push("/lobby");
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Banner */}
      <div className="h-1/3">
        <img
          src="/images/profile-selector-banner.png"
          alt="Profile Banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Profile Grid */}
      <div className="flex-1 grid grid-cols-2 gap-6 p-6">
        {profiles.map((p) => (
          <div
            key={p.key}
            onClick={() => handleSelect(p.key)}
            className="flex flex-col items-center cursor-pointer hover:scale-105 transition"
          >
            <img src={p.img} alt={p.label} className="w-24 h-24 mb-2" />
            <p className="font-semibold">{p.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

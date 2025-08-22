const profiles = [
  { id: 1, name: "Big Wins", img: "/images/bigwins.png" },
  { id: 2, name: "Lady Boss", img: "/images/ladyboss.png" },
  { id: 3, name: "Tezz", img: "/images/tezz.png" },
  { id: 4, name: "Mummyssee", img: "/images/mummyssee.png" },
  { id: 5, name: "JJ Motabhai", img: "/images/motabhai.png" },
];

export default function ProfileSelector() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-800 to-gray-900 text-white p-8">
      <h2 className="text-3xl font-bold mb-6 text-center">🎭 Choose Your Profile</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
        {profiles.map((p) => (
          <button
            key={p.id}
            onClick={() => (window.location.href = "/lobby")}
            className="flex flex-col items-center bg-gray-800 rounded-xl shadow-lg p-4 hover:bg-gray-700 hover:scale-105 transition"
          >
            <img src={p.img} alt={p.name} className="w-24 h-24 rounded-full border-2 border-yellow-400 mb-3" />
            <span className="font-semibold">{p.name}</span>
          </button>
        ))}
      </div>
    </main>
  );
}

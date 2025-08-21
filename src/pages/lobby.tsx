export default function Lobby() {
  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <header className="bg-blue-700 text-white p-4 text-center text-lg font-bold">
        FullHousey Lobby
      </header>

      {/* Carousel Placeholder */}
      <main className="flex-1 bg-gray-100 flex flex-col items-center justify-center">
        <p className="text-xl font-semibold mb-4">Featured Shows</p>
        <div className="w-4/5 h-40 bg-white shadow-md rounded flex items-center justify-center">
          Carousel goes here
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4 flex justify-around">
        <button>Fast Games</button>
        <button>Join Show</button>
        <button>Top 10</button>
        <button>Featured</button>
      </footer>
    </div>
  );
}

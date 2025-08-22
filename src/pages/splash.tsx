export default function Splash() {
  return (
    <main className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-indigo-700 to-purple-800 text-white">
    <main className="flex flex-col items-center justify-center h-screen bg-gradient-royal text-white">
      <h1 className="text-5xl font-extrabold mb-6 animate-fade-in">🚀 Welcome to FullHousey</h1>
      <p className="text-lg opacity-80 mb-10">Your personalized gaming journey starts here</p>
      <button
        onClick={() => (window.location.href = "/otp")}
        className="px-8 py-3 bg-yellow-400 text-black font-bold rounded-xl shadow-lg hover:scale-105 transition"
        className="btn-primary px-8 py-3"
      >
        Continue →
      </button>
    </main>
  );
}
}

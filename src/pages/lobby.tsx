// src/pages/lobby.tsx
import { useRouter } from "next/router";

export default function Lobby() {
  const router = useRouter();

  const enterGame = (game: string) => {
    alert(`Entering ${game} (demo placeholder)`);
    // later this can route to /game/housie, /game/snakes etc
    // router.push(`/game/${game}`);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Lobby</h1>
      <p>Select a show to preview:</p>
      <div style={{ marginTop: "20px" }}>
        <button onClick={() => enterGame("Housie")} style={{ margin: "10px", padding: "10px 20px" }}>
          🎟️ Housie
        </button>
        <button onClick={() => enterGame("Snakes & Ladders")} style={{ margin: "10px", padding: "10px 20px" }}>
          🎲 Snakes & Ladders
        </button>
      </div>
    </div>
  );
}

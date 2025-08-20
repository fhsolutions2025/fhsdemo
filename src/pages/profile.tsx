// src/pages/profile.tsx
import { useRouter } from "next/router";

export default function Profile() {
  const router = useRouter();

  const selectProfile = (profile: string) => {
    console.log("Selected profile:", profile);
    router.push("/lobby");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Select Your Profile</h1>
      <p>Choose one to continue:</p>
      <div style={{ marginTop: "20px" }}>
        <button onClick={() => selectProfile("Player1")} style={{ margin: "10px", padding: "10px 20px" }}>
          Player 1
        </button>
        <button onClick={() => selectProfile("Player2")} style={{ margin: "10px", padding: "10px 20px" }}>
          Player 2
        </button>
      </div>
    </div>
  );
}

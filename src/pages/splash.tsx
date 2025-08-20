// src/pages/splash.tsx
import { useRouter } from "next/router";

export default function Splash() {
  const router = useRouter();

  const handleContinue = () => {
    router.push("/otp");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>🎉 Welcome to FullHousey Demo 🎉</h1>
      <p>This is the splash screen.</p>
      <button onClick={handleContinue} style={{ padding: "10px 20px" }}>
        Continue
      </button>
    </div>
  );
}

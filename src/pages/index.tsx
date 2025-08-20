// src/pages/index.tsx
import { useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    // Hardcoded password for demo
    if (password === "demo123") {
      router.push("/splash");
    } else {
      alert("Invalid password. Try 'demo123'");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Welcome to FHS Demo</h1>
      <p>Enter password to continue:</p>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ padding: "8px", margin: "10px" }}
      />
      <button onClick={handleLogin} style={{ padding: "8px 16px" }}>
        Login
      </button>
    </div>
  );
}

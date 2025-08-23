import React, { useState } from "react";
import { useRouter } from "next/router";

export default function Index() {
  const router = useRouter();
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (password === "demo123") router.push("/splash");
    else alert("Invalid password");
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gradient-gold">
      <div className="card p-6 shadow-lg">
        <h1 className="text-2xl font-bold mb-4">
          Welcome to FullHousey Demo
        </h1>
        <input
          type="password"
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
          placeholder="Enter password"
          className="w-full px-3 py-2 border rounded mb-4"
        />
        <button onClick={handleLogin} className="w-full btn-secondary">
          Continue
        </button>
      </div>
    </div>
  );
}

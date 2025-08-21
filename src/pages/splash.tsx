import { useRouter } from "next/router";
import { useState } from "react";

// SegMint Placeholder
const segmintProfile = "bigwins"; // replace with dynamic logic later

export default function Splash() {
  const router = useRouter();
  const [mobile, setMobile] = useState("");

  const handleContinue = () => {
    if (mobile) {
      router.push("/otp");
    }
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Banner Area */}
      <div className="h-1/2 w-full">
        <img
          src={`/images/${segmintProfile}-splash-banner.png`}
          alt="Splash Banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Mobile Input */}
      <div className="flex flex-col items-center justify-center h-1/2 bg-white p-6">
        <h2 className="text-xl font-bold mb-4">Enter Mobile Number</h2>
        <input
          type="tel"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          placeholder="10-digit mobile number"
          className="w-full border rounded px-3 py-2 mb-4"
        />
        <button
          onClick={handleContinue}
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Continue
        </button>
      </div>
    </div>
  );
}

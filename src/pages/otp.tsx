import { useRouter } from "next/router";
import { useState } from "react";

// SegMint Placeholder
const segmintProfile = "bigwins";

export default function Otp() {
  const router = useRouter();
  const [otp, setOtp] = useState("");

  const handleVerify = () => {
    if (otp.length === 4) {
      router.push("/profile");
    }
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Banner Area */}
      <div className="h-1/2 w-full">
        <img
          src={`/images/${segmintProfile}-otp-banner.png`}
          alt="OTP Banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* OTP Input */}
      <div className="flex flex-col items-center justify-center h-1/2 bg-white p-6">
        <h2 className="text-xl font-bold mb-4">Enter OTP</h2>
        <input
          type="text"
          maxLength={4}
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          placeholder="4-digit OTP"
          className="w-full border rounded px-3 py-2 mb-4 text-center tracking-widest text-2xl"
        />
        <button
          onClick={handleVerify}
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Verify
        </button>
      </div>
    </div>
  );
}

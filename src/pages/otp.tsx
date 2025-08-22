import { useState } from "react";

export default function OTP() {
  const [otp, setOtp] = useState(["", "", "", ""]);

  const handleChange = (value: string, index: number) => {
    if (/^\d?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      if (value && index < 3) {
        document.getElementById(`otp-${index + 1}`)?.focus();
      }
    }
  };

  return (
    <main className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-pink-600 to-red-600 text-white">
      <h2 className="text-3xl font-bold mb-8">🔑 Enter OTP</h2>
      <div className="flex gap-4 mb-8">
        {otp.map((digit, i) => (
          <input
            key={i}
            id={`otp-${i}`}
            type="text"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(e.target.value, i)}
            className="w-14 h-14 text-center text-2xl font-bold rounded-xl bg-white text-black shadow-md focus:ring-4 focus:ring-yellow-400"
          />
        ))}
      </div>
      <button
        onClick={() => (window.location.href = "/profile")}
        className="px-8 py-3 bg-yellow-400 text-black font-bold rounded-xl shadow-lg hover:scale-105 transition"
      >
        Verify →
      </button>
    </main>
  );
}

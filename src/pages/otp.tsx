import { useState } from "react";
import Header from "@/components/header";
import { useProfile } from "@/context/ProfileContext";

export default function OTP() {
  const { profile } = useProfile();
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
    <div className="flex flex-col min-h-screen bg-base-200">
      <Header />
      <main className="flex flex-1 flex-col items-center justify-center p-6">
        {profile && (
          <img
            src={`/images/${profile.id}-otp-banner.png`}
            alt="OTP banner"
            className="mb-6"
          />
        )}
        <div className="card items-center p-8 space-y-6">
          <h2 className="text-3xl font-bold">🔑 Enter OTP</h2>
          <div className="flex gap-4">
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
            className="btn-primary w-full"
          >
            Verify →
          </button>
        </div>
      </main>
    </div>
  );
}

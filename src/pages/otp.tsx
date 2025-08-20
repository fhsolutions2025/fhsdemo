// src/pages/otp.tsx
import { useState } from "react";
import { useRouter } from "next/router";

export default function OTP() {
  const [otp, setOtp] = useState("");
  const router = useRouter();

  const handleVerify = () => {
    // For demo, hardcoded OTP = 1234
    if (otp === "1234") {
      router.push("/profile");
    } else {
      alert("Invalid OTP. Try 1234");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Enter OTP</h1>
      <input
        type="text"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        style={{ padding: "8px", margin: "10px" }}
      />
      <button onClick={handleVerify} style={{ padding: "8px 16px" }}>
        Verify
      </button>
    </div>
  );
}

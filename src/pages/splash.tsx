import { useRouter } from "next/router";
import Image from "next/image";
import { useState } from "react";

const Splash = () => {
  const router = useRouter();
  const [phone, setPhone] = useState("");

  // SegMint profile placeholder (replace later with real logic)
  const segmintProfile = "relaxed";

  // Banner mapping
  const banners: Record<string, string> = {
    relaxed: "/images/relaxed-splash-banner.png",
    tezz: "/images/tezz-splash-banner.png",
    bigwins: "/images/bigwins-splash-banner.png",
    mainacts: "/images/mainacts-splash-banner.png",
    ladyboss: "/images/ladyboss-splash-banner.png",
  };

  const handleContinue = () => {
    if (phone.trim()) {
      router.push("/otp");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-purple-600 to-blue-600 px-4">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-sm">
        <Image
          src={banners[segmintProfile] || banners["relaxed"]}
          alt="SegMint Banner"
          width={400}
          height={200}
          className="rounded-lg mb-6"
        />
        <h1 className="text-xl font-bold text-center mb-4">SegMint</h1>
        <p className="text-gray-600 text-center mb-6">
          Enter your mobile number to continue
        </p>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Enter mobile number"
          className="w-full p-3 border rounded-lg mb-4"
        />
        <button
          onClick={handleContinue}
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default Splash;

+import { useRouter } from "next/router";
+import { useProfile } from "../context/ProfileContext";
+
+const profiles = [
+  { id: "bigwins", name: "Big Wins" },
+  { id: "ladyboss", name: "Lady Boss" },
+  { id: "mainacts", name: "Main Acts" },
+  { id: "relaxed", name: "Relaxed" },
+  { id: "tezz", name: "Tezz" },
+];
+
 export default function Splash() {
+  const router = useRouter();
+  const { profile, setProfile } = useProfile();
+
+  const gradientClass = profile ? `bg-gradient-${profile}` : "bg-gradient-royal";
+
+  if (!profile) {
+    return (
+      <main className={`min-h-screen ${gradientClass} text-white pt-16`}> 
+        <h2 className="text-3xl font-bold mb-6 text-center">🎭 Choose Your Profile</h2>
+        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 px-8">
+          {profiles.map((p) => (
+            <button
+              key={p.id}
+              onClick={() => setProfile(p.id)}
+              className="flex flex-col items-center"
+            >
+              <img
+                src={`/images/${p.id}.png`}
+                alt={p.name}
+                className="w-24 h-24 rounded-full border-2 border-yellow-400 mb-3"
+              />
+              <span className="font-semibold">{p.name}</span>
+            </button>
+          ))}
+        </div>
+      </main>
+    );
+  }
+
   return (
-    <main className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-indigo-700 to-purple-800 text-white">
-      <h1 className="text-5xl font-extrabold mb-6 animate-fade-in">🚀 Welcome to FullHousey</h1>
-      <p className="text-lg opacity-80 mb-10">Your personalized gaming journey starts here</p>
-      <button
-        onClick={() => (window.location.href = "/otp")}
-        className="px-8 py-3 bg-yellow-400 text-black font-bold rounded-xl shadow-lg hover:scale-105 transition"
-      >
+    <main className={`min-h-screen ${gradientClass} flex flex-col items-center justify-center pt-16 text-white`}>
+      <img
+        src={`/images/${profile}-splash-banner.png`}
+        alt={`${profile} banner`}
+        className="w-full max-w-md mb-10"
+      />
+      <button onClick={() => router.push("/otp")} className="btn-primary">
         Continue →
       </button>
     </main>
   );
 }
+
+Splash.showHeader = true;
+Splash.showFooter = false;

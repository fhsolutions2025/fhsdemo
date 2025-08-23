+import { useEffect, useState } from "react";
+
 const profiles = [
-  { id: 1, name: "Big Wins", img: "/images/bigwins.png" },
-  { id: 2, name: "Lady Boss", img: "/images/ladyboss.png" },
-  { id: 3, name: "Tezz", img: "/images/tezz.png" },
-  { id: 4, name: "Mummyssee", img: "/images/mummyssee.png" },
-  { id: 5, name: "JJ Motabhai", img: "/images/motabhai.png" },
+  { id: "bigwins", name: "Big Wins", img: "/images/bigwins.png" },
+  { id: "ladyboss", name: "Lady Boss", img: "/images/ladyboss.png" },
+  { id: "mainacts", name: "Main Acts", img: "/images/mainacts.png" },
+  { id: "relaxed", name: "Relaxed", img: "/images/relaxed.png" },
+  { id: "tezz", name: "Tezz", img: "/images/tezz.png" },
 ];
 
 export default function ProfileSelector() {
+  const [selected, setSelected] = useState<string>(profiles[0].id);
+
+  useEffect(() => {
+    const stored = localStorage.getItem("profile");
+    if (stored && profiles.some((p) => p.id === stored)) {
+      setSelected(stored);
+    }
+  }, []);
+
+  const handleSelect = (id: string) => {
+    localStorage.setItem("profile", id);
+    window.location.href = "/lobby";
+  };
+
   return (
     <main className="min-h-screen bg-gradient-to-b from-blue-800 to-gray-900 text-white p-8">
+      <img
+        src={`/images/${selected}-profile-banner.png`}
+        alt="Profile banner"
+        className="w-full mb-6 rounded-xl"
+      />
       <h2 className="text-3xl font-bold mb-6 text-center">🎭 Choose Your Profile</h2>
       <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
         {profiles.map((p) => (
           <button
             key={p.id}
-            onClick={() => (window.location.href = "/lobby")}
-            className="flex flex-col items-center bg-gray-800 rounded-xl shadow-lg p-4 hover:bg-gray-700 hover:scale-105 transition"
+            onClick={() => handleSelect(p.id)}
+            className={`flex flex-col items-center bg-gray-800 rounded-xl shadow-lg p-4 hover:bg-gray-700 hover:scale-105 transition ${selected === p.id ? "profile-glow" : ""}`}
           >
-            <img src={p.img} alt={p.name} className="w-24 h-24 rounded-full border-2 border-yellow-400 mb-3" />
+            <img
+              src={p.img}
+              alt={p.name}
+              className="w-24 h-24 rounded-full border-2 border-yellow-400 mb-3"
+            />
             <span className="font-semibold">{p.name}</span>
           </button>
         ))}
       </div>
     </main>
   );
 }

+import Header from "@/components/header";
+import Footer from "@/components/footer";
+import DiceMind from "@/components/dicemind";
 import { useState } from "react";
 
 const snakes: Record<number, number> = { 99: 54, 70: 55, 52: 42, 25: 2 };
 const ladders: Record<number, number> = { 6: 27, 22: 58, 44: 79, 72: 93 };
 
 export default function Snakes() {
-  const [pos, setPos] = useState(1);
-  const [dice, setDice] = useState<number | null>(null);
+  const [positions, setPositions] = useState<number[]>([1, 1]);
+  const [current, setCurrent] = useState(0);
+  const [winner, setWinner] = useState<number | null>(null);
 
-  const rollDice = () => {
-    const d = Math.floor(Math.random() * 6) + 1;
-    let newPos = pos + d;
-    if (newPos > 100) newPos = pos; // must land exact
+  const handleRoll = (d: number) => {
+    if (winner !== null) return;
+    const newPositions = [...positions];
+    let newPos = newPositions[current] + d;
+    if (newPos > 100) newPos = newPositions[current];
     if (snakes[newPos]) newPos = snakes[newPos];
     if (ladders[newPos]) newPos = ladders[newPos];
-    setDice(d);
-    setPos(newPos);
+    newPositions[current] = newPos;
+    setPositions(newPositions);
+    if (newPos === 100) setWinner(current);
+    else setCurrent((current + 1) % positions.length);
   };
 
-  return (
-    <div className="pt-16 pb-20 flex flex-col items-center">
-      <h1 className="text-2xl font-bold mb-4">🐍 Snakes & Ladders</h1>
-
-      <button
-        onClick={rollDice}
-        className="px-6 py-2 bg-blue-500 rounded-lg text-white mb-6"
-      >
-        Roll Dice 🎲
-      </button>
+  const board: number[] = [];
+  for (let r = 9; r >= 0; r--) {
+    for (let c = 0; c < 10; c++) {
+      const num = r * 10 + (r % 2 === 0 ? c + 1 : 10 - c);
+      board.push(num);
+    }
+  }
 
-      {dice && <div className="text-lg mb-2">You rolled: {dice}</div>}
-      <div className="text-2xl font-bold">Position: {pos}</div>
-    </div>
+  return (
+    <>
+      <Header />
+      <main className="pt-16 pb-20 flex flex-col items-center">
+        <h1 className="text-2xl font-bold mb-4">🐍 Snakes & Ladders</h1>
+        <div className="grid grid-cols-10 gap-1">
+          {board.map((n) => (
+            <div
+              key={n}
+              className="relative w-8 h-8 border flex items-center justify-center text-[10px]"
+            >
+              {n}
+              {snakes[n] && (
+                <span className="absolute top-0 left-0 text-red-500 text-[8px]">
+                  🐍
+                </span>
+              )}
+              {ladders[n] && (
+                <span className="absolute bottom-0 right-0 text-green-500 text-[8px]">
+                  🪜
+                </span>
+              )}
+              {positions.map(
+                (p, idx) =>
+                  p === n && (
+                    <span
+                      key={idx}
+                      className={`absolute ${
+                        idx === 0 ? "text-blue-600" : "text-red-600"
+                      }`}
+                    >
+                      {idx === 0 ? "🔵" : "🔴"}
+                    </span>
+                  )
+              )}
+            </div>
+          ))}
+        </div>
+        {winner !== null && (
+          <div className="mt-4 font-bold">Player {winner + 1} wins! 🎉</div>
+        )}
+        <div className="mt-4">
+          <DiceMind onRoll={handleRoll} />
+        </div>
+      </main>
+      <Footer />
+    </>
   );
 }
+

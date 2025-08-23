 import Link from "next/link";
 import { useRouter } from "next/router";
+import { useProfile } from "../context/ProfileContext";
 
 export default function Header() {
   const router = useRouter();
   const { pathname } = router;
+  const { profile } = useProfile();
+
+  const title = pathname.includes("housie")
+    ? "Housie"
+    : pathname.includes("snakes")
+    ? "Snakes"
+    : "Lobby";
 
   return (
-    <header className="fixed top-0 left-0 w-full h-14 bg-gray-800 text-white flex items-center justify-between px-4 shadow-md z-50">
-      {/* Logo / Brand */}
+    <header className="header" style={{ backgroundColor: profile.color }}>
       <Link href="/lobby" className="text-xl font-bold tracking-wide">
         FullHousey
       </Link>
-
-      {/* Context-sensitive title */}
-      <h2 className="text-lg font-semibold">
-        {pathname.includes("housie") && "🎟️ Housie"}
-        {pathname.includes("snakes") && "🐍 Snakes & Ladders"}
-        {pathname === "/lobby" && "🏠 Lobby"}
-      </h2>
-
-      {/* Placeholder for profile/avatar */}
-      <Link href="/profile" className="rounded-full bg-purple-500 w-8 h-8 flex items-center justify-center">
-        😊
+      <h2 className="text-lg font-semibold">{title}</h2>
+      <Link href="/profile" className="w-8 h-8 rounded-full overflow-hidden">
+        {profile.img ? (
+          <img src={profile.img} alt={profile.name} className="w-full h-full object-cover" />
+        ) : (
+          <span className="flex items-center justify-center w-full h-full bg-white/20 text-sm">😊</span>
+        )}
       </Link>
     </header>
   );
 }

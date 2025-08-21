📑 Build Map – FullHousey Demo

(Created: Day 1)

Root Files (4)

package.json → Project dependencies & scripts for Next.js app.

tsconfig.json → TypeScript config.

.gitignore → Git ignored files.

README.md → (placeholder) to document setup.

Project Structure (9 folders, 16 files total)
src/pages/

index.tsx → Entry page (login with hardcoded pw).

splash.tsx → Splash page (SegMint banners, mobile number).

otp.tsx → OTP page (same layout as splash, with input).

profile.tsx → Profile selector (dynamic banners, SegMint).

lobby.tsx → Lobby page (fixed header/footer, carousel banners, links to Fast Games / Join Show / Top 10 / Featured).

src/components/

.gitkeep → placeholder.

src/services/

.gitkeep → placeholder.

src/utils/

.gitkeep → placeholder.

src/styles/

.gitkeep → placeholder.

src/hooks/

.gitkeep → placeholder.

src/context/

.gitkeep → placeholder.

src/api/

.gitkeep → placeholder.

public/

.gitkeep → placeholder for static assets (icons, logos, banners).

🔗 Interconnections

splash.tsx → otp.tsx → profile.tsx → lobby.tsx (user flow).

SegMint placeholder integrated in: splash.tsx, profile.tsx, lobby.tsx.

Lobby depends on header/footer components (to be built under /src/components).

Future gameplay (game.tsx) not yet added.

👉 Upload this file as /docs/BUILD_MAP.md in your repo.
👉 Tomorrow, instead of me forgetting, you can just tell me: “Check Build Map in repo before we start.”

Do you want me to also add a “Features Tracker” section inside the Build Map (e.g., ✅ Splash, ⏳ AI Numpad, ❌ Game Play)? That way we don’t lose sight of what’s pending.

You said:
yes add
ChatGPT said:

Perfect — let’s extend the Build Map to also track features, so tomorrow you won’t need to repeat explanations.

📑 Build Map – FullHousey Demo

(Day 1)

Root Files (4)

package.json → Project dependencies & scripts for Next.js app.

tsconfig.json → TypeScript config.

.gitignore → Git ignored files.

README.md → placeholder documentation.

Project Structure (9 folders, 16 files total)
src/pages/

index.tsx → Entry page (login with hardcoded pw).

splash.tsx → Splash page (SegMint banners, mobile number).

otp.tsx → OTP page (same layout as splash, with OTP input).

profile.tsx → Profile selector (SegMint banners, 5 profiles).

lobby.tsx → Lobby page (fixed header/footer, carousel banners, routes to Fast Games / Join Show / Top 10 / Featured).

src/components/

.gitkeep

src/services/

.gitkeep

src/utils/

.gitkeep

src/styles/

.gitkeep

src/hooks/

.gitkeep

src/context/

.gitkeep

src/api/

.gitkeep

public/

.gitkeep

🔗 Interconnections

Flow: splash.tsx → otp.tsx → profile.tsx → lobby.tsx.

SegMint placeholders exist in: splash.tsx, profile.tsx, lobby.tsx.

Lobby expects Header + Footer components (future in /components).

✅ Feature Tracker (Demo Readiness)

Splash Page – ✅ Done (with SegMint placeholder).

OTP Page – ✅ Done.

Profile Selector – ✅ Done (SegMint dynamic banners, 5 profiles: Relaxed, Big Wins, Tezzz, Natasha, CFO).

Lobby – ✅ Done (header, footer, carousel, nav to game areas).

SegMint Integration – ⏳ Placeholder only (dynamic logic not wired).

AI Numpad – ❌ Not started.

Gameplay Page (Housie) – ❌ Not started.

Prize Configurator (PRISM) – ❌ Not started.

HouseyBuddy / Shoutouts – ❌ Not started.

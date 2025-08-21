📑 Build Map – FullHousey Demo

(Updated: 21st August 2025, 9:14pm ist)

Root Files (7)

package.json → Project dependencies & scripts for Next.js app.

tsconfig.json → TypeScript config.

.gitignore → Git ignored files.

README.md → placeholder documentation.

next.config.js → Next.js configuration.

post.config.js → PostCSS config (for Tailwind).

tailwind.config.js → Tailwind CSS config.

Project Structure (11 folders, ~20+ files)
public/

images/ → static asset folder for banners & profile icons.

bigwins.png, bigwins-splash-banner.png, bigwins-otp-banner.png

ladyboss.png, ladyboss-splash-banner.png, ladyboss-otp-banner.png

mainacts.png, mainacts-splash-banner.png, mainacts-otp-banner.png

relaxed.png, relaxed-splash-banner.png, relaxed-otp-banner.png

tezz.png, tezz-splash-banner.png, tezz-otp-banner.png

.gitkeep

src/pages/

_app.tsx → wraps all pages, imports global CSS.

index.tsx → Entry page (hardcoded login).

splash.tsx → Splash page (SegMint banners, mobile number entry, continue → OTP).

otp.tsx → OTP page (similar to splash, OTP input).

profile.tsx → Profile selector (SegMint dynamic banners, 5 profiles).

lobby.tsx → Lobby (fixed header/footer, carousel, links to Fast Games / Join Show / Top 10 / Featured).

game/ → (empty folder for now, placeholder for gameplay).

src/components/

.gitkeep → placeholder for UI components (header, footer etc).

src/services/

.gitkeep → placeholder (APIs, business logic).

src/utils/

.gitkeep → placeholder.

src/styles/

globals.css → Tailwind entry file (@tailwind base; @tailwind components; @tailwind utilities;).

.gitkeep

src/hooks/

.gitkeep

src/context/

.gitkeep

src/api/

.gitkeep

🔗 Interconnections

Flow: splash.tsx → otp.tsx → profile.tsx → lobby.tsx.

SegMint banners: integrated in splash.tsx, profile.tsx, lobby.tsx.

public/images/ holds splash + otp + profile banners for all 5 profiles (Relaxed, Big Wins, Main Acts, Lady Boss, Tezz).

Lobby expects Header + Footer from /src/components (future work).

Gameplay game.tsx (to be added).

✅ Feature Tracker (Demo Readiness)

Splash Page – ✅ Done (with SegMint placeholder + banner).

OTP Page – ✅ Done.

Profile Selector – ✅ Done (dynamic banners, 5 profiles).

Lobby – ✅ Done (carousel, header/footer pending).

SegMint Integration – ⏳ Placeholder (logic not wired).

AI Numpad – ❌ Not started.

Gameplay Page (Housie) – ❌ Not started.

Prize Configurator (PRISM) – ❌ Not started.

HouseyBuddy / Shoutouts – ❌ Not started.

⚠ CSS/Tailwind Styling – ❌ Not working on any page.

Tried updating _app.tsx, globals.css, configs → no errors.

Tried redeploying with cache clear on Vercel → no improvement.

Tried deploying fresh project → same issue.

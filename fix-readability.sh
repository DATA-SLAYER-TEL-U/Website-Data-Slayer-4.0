#!/bin/bash
# 1. Fix Navbar "Daftar Sekarang" button text color
sed -i '' 's/text-white bg-gradient-to-r from-panel-2 to-panel/text-ink bg-gradient-to-r from-panel-2 to-panel/g' src/components/Navbar.tsx

# 2. Fix HomePage "INSERT COIN TO CONTINUE" text color
sed -i '' 's/text-gold tracking-widest/text-ink-dim tracking-widest/g' src/pages/HomePage.tsx

# 3. Enhance "SLAYER" and "EDISI KE-4.0" in HomePage
sed -i '' 's/<span className="text-cyan \[text-shadow:0_0_24px_rgba(255,255,255,0.7)\]">SLAYER<\/span>/<span className="text-cyan text-outline-white">SLAYER<\/span>/g' src/pages/HomePage.tsx

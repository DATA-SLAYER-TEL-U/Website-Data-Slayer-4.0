#!/bin/bash
# Replace from-cyan-500 to-blue-600 with from-panel-2 to-panel in Navbar
sed -i '' 's/from-cyan-500 to-blue-600/from-panel-2 to-panel/g' src/components/Navbar.tsx

# Fix rgba(18, 23, 61, 0.75) to var(--color-panel) in main.css
sed -i '' 's/rgba(18, 23, 61, 0.75)/var(--color-panel)/g' src/main.css

# Fix any leftover rgba(0, 229, 255, ...) in main.css
sed -i '' 's/rgba(0, 229, 255,/rgba(255, 255, 255,/g' src/main.css

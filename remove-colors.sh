#!/bin/bash
# Remove hardcoded colors in tsx files

# Replace text-[#c0c7d6] (silver) and text-[#cd7f32] (bronze) with text-ink-dim
sed -i '' 's/text-\[#c0c7d6\]/text-ink-dim/g' src/pages/HomePage.tsx
sed -i '' 's/text-\[#cd7f32\]/text-ink-dim/g' src/pages/HomePage.tsx

# Replace footer bg-[#0a0f2e] with bg-void
sed -i '' 's/bg-\[#0a0f2e\]/bg-void/g' src/components/Footer.tsx

# Replace gradient background via-[#18215a]/45 with via-panel-2/45
find src -name "*.tsx" -type f -exec sed -i '' 's/via-\[#18215a\]\/45/via-panel-2\/45/g' {} +
find src -name "*.tsx" -type f -exec sed -i '' 's/via-\[#18215a\]\/70/via-panel-2\/70/g' {} +
find src -name "*.tsx" -type f -exec sed -i '' 's/via-\[#12194a\]\/50/via-panel-2\/50/g' {} +
find src -name "*.tsx" -type f -exec sed -i '' 's/from-\[#18215a\]\/70/from-panel-2\/70/g' {} +

# Replace EventPage from-[#1c2668] to-[#12194a] with from-panel-2 to-panel
sed -i '' 's/from-\[#1c2668\] to-\[#12194a\]/from-panel-2 to-panel/g' src/pages/EventPage.tsx

# Replace Button Gradients: to-[#00b4d8] with to-cyan
find src -name "*.tsx" -type f -exec sed -i '' 's/to-\[#00b4d8\]/to-cyan/g' {} +

# Replace any lingering rgba(0,229,255,...) with rgba(255,255,255,...) for white glow
find src -name "*.tsx" -type f -exec sed -i '' 's/rgba(0,229,255,/rgba(255,255,255,/g' {} +
# Replace gold glow rgba(255,210,63,...) with rgba(255,255,255,...)
find src -name "*.tsx" -type f -exec sed -i '' 's/rgba(255,210,63,/rgba(255,255,255,/g' {} +

echo "Done replacing hardcoded hexes in tsx."

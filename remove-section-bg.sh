#!/bin/bash
# Remove background gradients from all <section> tags
find src -name "*.tsx" -type f -exec sed -i '' 's/bg-gradient-to-b from-transparent via-panel-2\/45 to-transparent //g' {} +
find src -name "*.tsx" -type f -exec sed -i '' 's/bg-gradient-to-b from-panel-2\/70 via-panel-2\/50 to-transparent //g' {} +
find src -name "*.tsx" -type f -exec sed -i '' 's/bg-gradient-to-b from-transparent via-panel\/50 to-transparent //g' {} +
find src -name "*.tsx" -type f -exec sed -i '' 's/bg-gradient-to-b from-transparent via-panel\/40 to-transparent //g' {} +

# Remove linear-gradient from .section--alt
sed -i '' 's/background: linear-gradient(180deg, transparent, rgba(255, 255, 255, 0.3), transparent);/border-top: 1px solid var(--color-line); border-bottom: 1px solid var(--color-line);/g' src/main.css

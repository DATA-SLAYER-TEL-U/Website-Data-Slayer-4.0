sed -i '' 's/grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-32/grid grid-cols-2 gap-3 sm:gap-6 md:gap-32/g' src/pages/HomePage.tsx
sed -i '' 's/text-7xl md:text-\[8rem\]/text-5xl sm:text-7xl md:text-[8rem]/g' src/pages/HomePage.tsx
sed -i '' 's/text-3xl md:text-5xl/text-xl sm:text-3xl md:text-5xl/g' src/pages/HomePage.tsx
sed -i '' 's/bottom-6 font-body font-bold text-sm tracking-widest uppercase text-cyan opacity-0/bottom-4 md:bottom-6 font-body font-bold text-[0.55rem] sm:text-xs md:text-sm tracking-widest uppercase text-cyan text-center px-2 opacity-0/g' src/pages/HomePage.tsx

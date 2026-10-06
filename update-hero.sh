sed -i '' '/<h1 id="hero-title"/,/<\/h1>/c\
            <h1 id="hero-title" className="font-pixel text-[clamp(2.1rem,8vw,4rem)] tracking-wide leading-tight text-ink mb-4">\
              DATA<br /><span className="text-cyan text-outline-white">SLAYER 4.0</span>\
            </h1>
' src/pages/HomePage.tsx

sed -i '' '/EDISI KE-4.0/d' src/pages/HomePage.tsx

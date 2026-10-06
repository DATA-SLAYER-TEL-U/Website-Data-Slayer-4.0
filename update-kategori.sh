#!/bin/bash
cat << 'INNER_EOF' > kategori-new.tsx
        <div className="max-w-[72rem] mx-auto text-center flex flex-col items-center">
          {/* Are You Ready Typography */}
          <div className="flex flex-col items-center mb-16 select-none cursor-default drop-shadow-sm">
            <span className="font-pixel text-[clamp(2.5rem,6vw,4rem)] text-cyan text-outline-white leading-none">Are</span>
            <span className="font-cursive text-[clamp(4.5rem,10vw,7.5rem)] text-gold text-outline-thin leading-[0.5] -my-1 md:-my-3 relative z-10 -rotate-2">You</span>
            <span className="font-pixel text-[clamp(2.5rem,6vw,4rem)] text-cyan text-outline-white leading-none mt-2 md:mt-0">Ready?</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-32 mt-4 w-full max-w-[56rem]">
            {/* MLC Card */}
            <Link to="/mlc" className="glass-card aspect-square md:aspect-[4/3] flex flex-col items-center justify-center p-8 transition-all duration-300 hover:scale-105 hover:shadow-[0_15px_40px_rgba(110,120,160,0.25)] group relative overflow-hidden">
               <div className="flex items-baseline justify-center select-none relative z-10">
                 <span className="font-cursive text-7xl md:text-[8rem] text-cyan text-outline-thin leading-none">M</span>
                 <span className="font-pixel text-3xl md:text-5xl text-cyan text-outline-white tracking-widest ml-2">LC</span>
               </div>
               <span className="absolute bottom-6 font-body font-bold text-sm tracking-widest uppercase text-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                 Machine Learning
               </span>
            </Link>

            {/* DAC Card */}
            <Link to="/dac" className="glass-card aspect-square md:aspect-[4/3] flex flex-col items-center justify-center p-8 transition-all duration-300 hover:scale-105 hover:shadow-[0_15px_40px_rgba(110,120,160,0.25)] group relative overflow-hidden">
               <div className="flex items-baseline justify-center select-none relative z-10">
                 <span className="font-cursive text-7xl md:text-[8rem] text-cyan text-outline-thin leading-none">D</span>
                 <span className="font-pixel text-3xl md:text-5xl text-cyan text-outline-white tracking-widest ml-2">AC</span>
               </div>
               <span className="absolute bottom-6 font-body font-bold text-sm tracking-widest uppercase text-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                 Dashboard Analytics
               </span>
            </Link>
          </div>
        </div>
      </section>
INNER_EOF

# Replace lines 140 to 221 in HomePage.tsx with the new content
awk '
  NR==140 {
    system("cat kategori-new.tsx")
    skip=1
  }
  NR==222 {
    skip=0
  }
  !skip { print }
' src/pages/HomePage.tsx > temp.tsx && mv temp.tsx src/pages/HomePage.tsx

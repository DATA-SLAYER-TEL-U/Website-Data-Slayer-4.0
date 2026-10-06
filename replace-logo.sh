#!/bin/bash
# 1. Update Navbar
sed -i '' '/<span className="logo-icon"/,/<span className="text-cyan ml-1">SLAYER<\/span><\/span>/c\
          <img src="/logo.png" alt="Data Slayer Logo" className="h-8 md:h-9 w-auto object-contain" />
' src/components/Navbar.tsx

# 2. Update Footer
sed -i '' 's/<div className="font-pixel text-lg text-ink font-bold flex items-center gap-1.5">DATA<span className="text-cyan ml-0.5">SLAYER<\/span> 4.0<\/div>/<img src="\/logo.png" alt="Data Slayer Logo" className="h-12 w-auto object-contain mb-3" \/>/g' src/components/Footer.tsx

# 3. Update HomePage Hero
sed -i '' '/<h1 id="hero-title"/,/<\/h1>/c\
            <h1 id="hero-title" className="flex justify-center mb-4">\
              <img src="/logo.png" alt="Data Slayer Logo" className="w-40 sm:w-48 md:w-56 h-auto drop-shadow-sm object-contain" />\
            </h1>
' src/pages/HomePage.tsx

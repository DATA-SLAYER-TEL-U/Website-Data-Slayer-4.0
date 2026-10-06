const fs = require('fs');
const file = 'src/main.css';
let css = fs.readFileSync(file, 'utf8');

// Replace @theme block
const themeBlockRegex = /@theme\s*\{[\s\S]*?\}/;
const newThemeBlock = `@theme {
  --color-void: #fdfcff;
  --color-panel: rgba(255, 255, 255, 0.5);
  --color-panel-2: rgba(255, 255, 255, 0.7);
  --color-line: rgba(255, 255, 255, 0.8);
  --color-ink: #2b2742;
  --color-ink-dim: #5c5979;
  --color-cyan: #79aee5;
  --color-gold: #f5d17a;
  --color-magenta: #e8a2d3;

  --font-pixel: "Press Start 2P", monospace;
  --font-body: "Space Grotesk", ui-sans-serif, system-ui, sans-serif;
  --font-cursive: "Great Vibes", cursive;
}`;
css = css.replace(themeBlockRegex, newThemeBlock);

// Replace body block to add pastel gradient and grain
const bodyRegex = /body\s*\{[\s\S]*?\}/;
const newBodyBlock = `body {
  background-color: #fdfcff;
  color: var(--color-ink);
  font-family: var(--font-body);
  -webkit-font-smoothing: antialiased;
  background-image: 
    url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.08'/%3E%3C/svg%3E"),
    linear-gradient(135deg, #c3f0ff 0%, #ecd4ff 50%, #ffe9cf 100%);
  background-attachment: fixed;
  background-size: auto, cover;
  padding-top: 6.5rem;
}`;
css = css.replace(bodyRegex, newBodyBlock);

fs.writeFileSync(file, css);
console.log('Patched theme and body in main.css');

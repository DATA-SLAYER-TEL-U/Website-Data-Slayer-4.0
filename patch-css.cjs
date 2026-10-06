const fs = require('fs');
const file = 'src/main.css';
let css = fs.readFileSync(file, 'utf8');

// Replace colors in @theme
css = css.replace(/--color-void: .*/, '--color-void: #000000;');
css = css.replace(/--color-panel: .*/, '--color-panel: #111111;');
css = css.replace(/--color-panel-2: .*/, '--color-panel-2: #222222;');
css = css.replace(/--color-line: .*/, '--color-line: #333333;');
css = css.replace(/--color-ink: .*/, '--color-ink: #ffffff;');
css = css.replace(/--color-ink-dim: .*/, '--color-ink-dim: #a3a3a3;');
css = css.replace(/--color-magenta: .*/, '--color-magenta: #ffffff;');
css = css.replace(/--color-cyan: .*/, '--color-cyan: #ffffff;');
css = css.replace(/--color-gold: .*/, '--color-gold: #ffffff;');

// Remove background-image gradients from body
css = css.replace(/background-image:[\s\S]*?background-attachment: fixed;/m, 'background-attachment: fixed;');

fs.writeFileSync(file, css);
console.log('Patched main.css');

const fs = require('fs');
let content = fs.readFileSync('d:/Silicon/web/src/components/layout/Footer.tsx', 'utf8');

// Replacements
content = content.replace(/bg-\[\#D3BE9B\]/g, 'bg-gradient-to-r from-[#D0AE8B] to-[#B39A80]');
content = content.replace(/text-zinc-900/g, 'text-[#413F4C]');
content = content.replace(/text-zinc-800/g, 'text-[#413F4C]/90');
content = content.replace(/hover:text-black/g, 'hover:text-[#413F4C]/70');
content = content.replace(/bg-zinc-900/g, 'bg-[#413F4C]');
content = content.replace(/hover:bg-black/g, 'hover:bg-[#413F4C]/80');
content = content.replace(/text-\[\#D3BE9B\]/g, 'text-[#D0AE8B]');

fs.writeFileSync('d:/Silicon/web/src/components/layout/Footer.tsx', content);
console.log('Footer updated successfully!');

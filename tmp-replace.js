const fs = require('fs');
const path = require('path');

const filePath = process.argv[2];
let content = fs.readFileSync(filePath, 'utf8');

// Replace Footer styles
content = content.replace(/bg-\[#c5a367\]/g, 'bg-bg-surface');
content = content.replace(/text-black\/80/g, 'text-text-secondary');
content = content.replace(/text-black\/70/g, 'text-text-secondary');
content = content.replace(/text-black\/60/g, 'text-text-secondary');
content = content.replace(/text-black/g, 'text-text-primary');
content = content.replace(/bg-black\/10/g, 'bg-border-color');
content = content.replace(/bg-black\/20/g, 'bg-border-color');
content = content.replace(/border-black\/10/g, 'border-border-color');
content = content.replace(/text-white/g, 'text-bg-primary');
content = content.replace(/bg-zinc-900/g, 'bg-accent');
content = content.replace(/hover:bg-zinc-800/g, 'hover:bg-accent-light');

fs.writeFileSync(filePath, content, 'utf8');
console.log('Done');

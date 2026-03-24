const fs = require('fs');
const path = require('path');

const filePath = process.argv[2];
let content = fs.readFileSync(filePath, 'utf8');

content = content.replace(/bg-\[#c5a367\]/g, 'bg-bg-surface');
content = content.replace(/text-black\/80/g, 'text-text-secondary');
content = content.replace(/text-black\/40/g, 'text-text-secondary');
content = content.replace(/text-black/g, 'text-text-primary');
content = content.replace(/bg-black\/10/g, 'bg-bg-card');
content = content.replace(/bg-black\/5/g, 'bg-bg-card\\/50');
content = content.replace(/border-black\/10/g, 'border-border-color');
content = content.replace(/from-\[#c5a367\]\/80/g, 'from-bg-surface\\/80');
content = content.replace(/to-\[#a68a57\]\/95/g, 'to-bg-primary\\/95');

fs.writeFileSync(filePath, content, 'utf8');
console.log('Done SideMenu');

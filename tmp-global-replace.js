const fs = require('fs');
const path = require('path');

function processDirectory(dirPath) {
  const items = fs.readdirSync(dirPath);
  for (const item of items) {
    const fullPath = path.join(dirPath, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts') || fullPath.endsWith('.css')) {
      processFile(fullPath);
    }
  }
}

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // 1. Replace gold colors
  content = content.replace(/bg-\[#c5a367\]/g, 'bg-accent');
  content = content.replace(/text-\[#c5a367\]/g, 'text-accent');
  content = content.replace(/border-\[#c5a367\]/g, 'border-accent');
  content = content.replace(/from-\[#c5a367\]/g, 'from-accent');
  content = content.replace(/to-\[#a68a57\]/g, 'to-bg-surface');
  content = content.replace(/#c5a367/g, '#E6E9EE'); // For placeholder links

  // 2. Placeholder text colors (000000 -> 9AA0A6) for contrast on light grey
  content = content.replace(/E6E9EE\/000000/g, 'E6E9EE/9AA0A6');

  // 3. Fix large fonts in hero sections
  if (filePath.includes('HeroSlider.tsx')) {
    // Make text normal size and remove redundant titles
    content = content.replace(/text-lg md:text-2xl/g, 'text-base md:text-lg');
    // In HeroSlider, the title and subtitle are separated. User says "redundant text". 
    // Let's hide the subtitle to reduce redundancy.
    content = content.replace(/<p \n\s*key={`subtitle-\${currentIndex}`} \n\s*className="text-white\/90/g, '<p \n          key={`subtitle-${currentIndex}`} \n          className="hidden');
    // Also the title font isn't explicitly sized there, but uses h1 which is text-4xl from globals.css. We can make it h2
    content = content.replace(/<h1/g, '<h2');
    content = content.replace(/<\/h1>/g, '</h2>');
  }

  if (filePath.includes('ProjectHero.tsx')) {
    // Reduce massive fonts
    content = content.replace(/text-6xl md:text-8xl lg:text-9xl/g, 'text-4xl md:text-5xl lg:text-6xl');
    content = content.replace(/text-2xl md:text-3xl tracking-\[0.3em\]/g, 'text-xl tracking-[0.2em]');
  }

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated: ${filePath}`);
  }
}

processDirectory(path.join(__dirname, 'src'));
console.log('Finished processing files.');

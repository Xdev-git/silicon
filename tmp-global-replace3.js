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

  // We missed URL hex codes because they don't have a leading #
  content = content.replace(/c5a367/g, 'E6E9EE');
  content = content.replace(/9b7d4e/g, 'E6E9EE');

  // Also replace some remnant `#E6E9EE` if they accidently became `E6E9EE` where they shouldn't? 
  // Wait, if it was already `E6E9EE` it's fine.

  // Placeholder text colors (000000 -> 9AA0A6) for contrast on light grey
  content = content.replace(/E6E9EE\/000000/g, 'E6E9EE/9AA0A6');

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated placeholders: ${filePath}`);
  }
}

try {
  processDirectory(path.join(__dirname, 'src'));
  console.log('Finished processing placeholder links.');
} catch (e) {
  console.error(e);
}

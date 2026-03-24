const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    const fullPath = path.join(dir, f);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath, callback);
    } else if (/\.(tsx|ts|css)$/.test(f)) {
      callback(fullPath);
    }
  });
}

let count = 0;
walkDir(path.join(__dirname, 'src'), (filePath) => {
  let content = fs.readFileSync(filePath, 'utf8');
  const updated = content
    .replace(/#D0AE8B/gi, '#F5CD90')
    .replace(/#B39A80/gi, '#AD9266');
  if (updated !== content) {
    fs.writeFileSync(filePath, updated, 'utf8');
    console.log('Updated:', filePath);
    count++;
  }
});
console.log(`Done. ${count} files updated.`);

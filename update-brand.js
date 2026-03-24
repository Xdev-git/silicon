const fs = require('fs');

const files = [
  "d:/Silicon/web/src/components/layout/Navbar.tsx",
  "d:/Silicon/web/src/components/layout/Footer.tsx",
  "d:/Silicon/web/src/components/home/TrustSection.tsx",
  "d:/Silicon/web/src/app/terms-of-use/page.tsx",
  "d:/Silicon/web/src/app/privacy-policy/page.tsx",
  "d:/Silicon/web/src/app/nri-corner/page.tsx",
  "d:/Silicon/web/src/app/layout.tsx",
  "d:/Silicon/web/src/app/faqs/page.tsx",
  "d:/Silicon/web/src/app/buyers-guide/page.tsx",
  "d:/Silicon/web/src/app/buyers-guide/guideline/page.tsx",
  "d:/Silicon/web/src/app/buyers-guide/first-steps/page.tsx",
  "d:/Silicon/web/src/app/buyers-guide/checklist/page.tsx",
  "d:/Silicon/web/src/app/about/chairmans-message/page.tsx"
];

for (const path of files) {
  try {
    let content = fs.readFileSync(path, 'utf8');
    // Replace case-sensitively
    content = content.replace(/Antigravity/g, "Silicon");
    content = content.replace(/antigravity/g, "silicon");
    fs.writeFileSync(path, content, 'utf8');
    console.log(`Updated ${path}`);
  } catch (err) {
    console.error(`Failed to update ${path}: ${err.message}`);
  }
}

const fs = require("fs");
const path = require("path");


function exists(p) {
  try {
    return fs.existsSync(p);
  } catch {
    return false;
  }
}


const root = process.cwd();
const appDir = path.join(root, "app");
const pagesDir = path.join(root, "pages");


const hasApp = exists(appDir);
const hasPages = exists(pagesDir);


if (hasApp && hasPages) {
  console.error(`
❌ BUILD STOPPED: Both "app" and "pages" routers detected.


This breaks Vercel builds.
Fix ONE of the following:
1) Remove /pages if using App Router
2) Remove /app if using Pages Router
`);
  process.exit(1);
}


// Detect illegal <Html> usage
function scan(dir) {
  fs.readdirSync(dir).forEach(file => {
    const full = path.join(dir, file);
    if (fs.statSync(full).isDirectory()) scan(full);
    else if (file.match(/\.(js|jsx|ts|tsx)$/)) {
      const content = fs.readFileSync(full, "utf8");
      if (
        content.includes("<Html") &&
        !full.includes("pages/_document")
      ) {
        console.error(`
❌ BUILD STOPPED: <Html> used outside pages/_document.js
File: ${full}
`);
        process.exit(1);
      }
    }
  });
}


scan(root);


console.log("✅ Next.js build verification passed");

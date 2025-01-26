const fs = require("fs");
const path = require("path");

const srcDir = path.join(__dirname, "src");
const distDir = path.join(__dirname, "dist");

if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir);
}

fs.readdirSync(srcDir).forEach((file) => {
  const srcPath = path.join(srcDir, file);
  const destPath = path.join(distDir, file);

  if (fs.statSync(srcPath).isDirectory()) {
    fs.cpSync(srcPath, destPath, { recursive: true });
  } else {
    fs.copyFileSync(srcPath, destPath);
  }
});

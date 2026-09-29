import { execSync } from "node:child_process";
import {
  copyFileSync,
  mkdirSync,
  readdirSync,
  rmSync,
  statSync,
  writeFileSync,
} from "node:fs";
import { join, relative } from "node:path";

const dist = "dist";
const outDir = "wix-upload";
const zipName = "ac-advisory-wix.zip";

function walk(dir, files = []) {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    const stat = statSync(path);
    if (stat.isDirectory()) walk(path, files);
    else files.push(path);
  }
  return files;
}

for (const extra of ["netlify.toml", "_redirects"]) {
  try {
    rmSync(join(dist, extra));
  } catch {
    /* not present */
  }
}

copyFileSync(join(dist, "index.html"), join(dist, "404.html"));

const files = walk(dist);
const tooBig = [];
let total = 0;
for (const file of files) {
  const size = statSync(file).size;
  total += size;
  if (size > 3 * 1024 * 1024) tooBig.push({ file, size });
}

const report = {
  fileCount: files.length,
  totalBytes: total,
  totalMB: +(total / (1024 * 1024)).toFixed(2),
  wixLimitMB: 20,
  perFileLimitMB: 3,
  overPerFileLimit: tooBig.map((item) => ({
    file: relative(dist, item.file),
    mb: +(item.size / (1024 * 1024)).toFixed(2),
  })),
  withinTotalLimit: total <= 20 * 1024 * 1024,
};

if (tooBig.length || !report.withinTotalLimit) {
  console.error("Wix size check failed:", JSON.stringify(report, null, 2));
  process.exit(1);
}

rmSync(outDir, { recursive: true, force: true });
mkdirSync(outDir, { recursive: true });
const zipPath = join(outDir, zipName);
execSync(`cd ${dist} && zip -r ../${zipPath} . -x '*.DS_Store'`, {
  stdio: "inherit",
});
writeFileSync(join(outDir, "size-report.json"), JSON.stringify(report, null, 2));

console.log(`Wix zip ready: ${zipPath}`);
console.log(JSON.stringify(report, null, 2));

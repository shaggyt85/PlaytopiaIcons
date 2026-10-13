/**
 * Añade iconos de Lucide a la librería a partir de sus nombres de lucide-react,
 * los que usan los prototipos de Lovable.
 *
 * Copia cada SVG de lucide-static (la versión fijada en devDependencies) a
 * `src/svg/icon-lo-<nombre>.svg`, resolviendo los alias. No genera nada: después
 * va `npm run build`, que los optimiza y crea los componentes.
 *
 * Uso: node scripts/add-lucide-icons.mjs AlertCircle CreditCard XCircle
 */
import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";

import { parseLucideIndex, planLucideIcon } from "./lib/lucide.mjs";
import { SVG_DIR } from "./lib/paths.mjs";

const names = process.argv.slice(2);
if (names.length === 0) {
  console.error("Uso: node scripts/add-lucide-icons.mjs <NombreLucideReact> [...]");
  process.exit(1);
}

const require = createRequire(import.meta.url);
const lucideRoot = path.dirname(require.resolve("lucide-static/package.json"));
const { version } = require("lucide-static/package.json");
const index = parseLucideIndex(
  fs.readFileSync(path.join(lucideRoot, "dist", "esm", "lucide-static.js"), "utf8"),
);
const existing = new Set(fs.readdirSync(SVG_DIR));

let missing = 0;
console.log(`lucide-static ${version}`);
for (const name of names) {
  const plan = planLucideIcon(name, index, existing);
  switch (plan.status) {
    case "missing":
      missing += 1;
      console.log(`  NO EXISTE  ${name}`);
      break;
    case "exists":
      console.log(`  ya está    ${name} (${plan.file})`);
      break;
    case "add":
      fs.copyFileSync(
        path.join(lucideRoot, "icons", `${plan.source}.svg`),
        path.join(SVG_DIR, plan.file),
      );
      console.log(`  añadido    ${name} → ${plan.file}${plan.alias ? ` (alias de ${plan.source})` : ""}`);
      break;
  }
}
process.exit(missing > 0 ? 1 : 0);

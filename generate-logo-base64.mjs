// Genera base64 PNG del LogoHorizontalWhite para usar en emails
import { readFileSync } from "fs";
import sharp from "sharp";

const content = readFileSync("./src/brand/LogoHorizontalWhite.tsx", "utf8");
const matches = [...content.matchAll(/fill="white"\s+d="([^"]+)"/g)];

const [pathSymbol, pathText] = matches.map((m) => m[1]);

// viewBox original: 0 0 233 116  — render a 2x para nitidez en retina
const svg = `<svg viewBox="0 0 233 116" width="466" height="232" xmlns="http://www.w3.org/2000/svg" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" fill="white" d="${pathSymbol}"/>
  <path fill-rule="evenodd" clip-rule="evenodd" fill="white" d="${pathText}"/>
</svg>`;

const png = await sharp(Buffer.from(svg)).png().toBuffer();

const b64 = png.toString("base64");
const dataUri = `data:image/png;base64,${b64}`;

console.log("=== DATA URI (pegar en lettre_email.rs) ===");
console.log(dataUri.substring(0, 80) + "...");
console.log("=== LENGTH ===", b64.length, "chars");

// Guardar también como archivo para verificación visual
import { writeFileSync } from "fs";
writeFileSync("./logo-email-preview.png", png);
console.log("=== Preview guardado en logo-email-preview.png ===");
writeFileSync("./logo-email-base64.txt", dataUri);
console.log("=== Base64 completo guardado en logo-email-base64.txt ===");

import { describe, it, expect } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SVG_DIR = path.resolve(__dirname, '../../src/svg');
const REACT_DIR = path.resolve(__dirname, '../../src/react');
const RN_DIR = path.resolve(__dirname, '../../src/react-native');

/** Convierte "icon-home-filled.svg" → "IconHomeFilled" */
function svgFileToComponentName(filename: string): string {
  return filename
    .replace(/\.svg$/, '')
    .split(/[-_]+/)
    .map((part: string) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
    .join('');
}

describe('Integridad de la librería', () => {
  const svgFiles = fs.readdirSync(SVG_DIR).filter((f: string) => f.endsWith('.svg'));

  it('existe al menos un SVG en src/svg/', () => {
    expect(svgFiles.length).toBeGreaterThan(0);
  });

  describe.each(svgFiles)('%s', (svgFile: string) => {
    const componentName = svgFileToComponentName(svgFile);

    it(`tiene componente React: ${componentName}.tsx`, () => {
      const exists = fs.existsSync(path.join(REACT_DIR, `${componentName}.tsx`));
      expect(exists).toBe(true);
    });

    it(`tiene componente React Native: ${componentName}.tsx`, () => {
      const exists = fs.existsSync(path.join(RN_DIR, `${componentName}.tsx`));
      expect(exists).toBe(true);
    });

    it(`está exportado en React index.ts`, () => {
      const content = fs.readFileSync(path.join(REACT_DIR, 'index.ts'), 'utf-8');
      expect(content).toContain(`export { ${componentName} }`);
    });

    it(`está exportado en React Native index.ts`, () => {
      const content = fs.readFileSync(path.join(RN_DIR, 'index.ts'), 'utf-8');
      expect(content).toContain(`export { ${componentName} }`);
    });
  });
});

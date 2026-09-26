import { describe, it, expect } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';

import { svgFileToComponentName } from '../../scripts/lib/naming.mjs';
import { REACT_DIR, RN_DIR, SVG_DIR } from '../../scripts/lib/paths.mjs';

/**
 * SVG que llevan un color fijo a propósito, con el motivo. Cualquier otro debe
 * pintarse con `currentColor` (o `none`) para que la prop `color` lo cambie.
 */
const FIXED_COLOR_ALLOWED: Record<string, string> = {
  'icon-money.svg': 'el símbolo del euro es un recorte blanco sobre la bolsa',
  'icon-oval-close.svg': 'el círculo va relleno de blanco bajo el aspa',
};

/** Colores de `fill`, `stroke` y `stop-color` que no son `none` ni `currentColor`. */
function fixedColors(svg: string): string[] {
  return [...svg.matchAll(/(?:fill|stroke|stop-color)="([^"]*)"/g)]
    .map(([, color]) => color)
    .filter((color) => color !== 'none' && color !== 'currentColor');
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

    it('se puede colorear con la prop color (sin colores fijos)', () => {
      if (svgFile in FIXED_COLOR_ALLOWED) return;
      const svg = fs.readFileSync(path.join(SVG_DIR, svgFile), 'utf-8');
      expect(fixedColors(svg)).toEqual([]);
    });

    it(`está exportado en React Native index.ts`, () => {
      const content = fs.readFileSync(path.join(RN_DIR, 'index.ts'), 'utf-8');
      expect(content).toContain(`export { ${componentName} }`);
    });
  });
});

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

/**
 * Las formas de un componente generado que no se pintan: sin `stroke` ni `fill`
 * propios. El `<svg>` raíz del componente va con fill="none" y sin trazo, así
 * que una forma así no hereda nada y el icono sale vacío (le pasó a los SVG de
 * Lucide, que traen el trazo en la raíz, hasta que el generador lo repartió).
 * No cuenta lo que hay dentro de máscaras, recortes y degradados.
 */
function unpaintedShapes(component: string): string[] {
  const visible = component.replace(
    /<(defs|mask|clipPath|linearGradient|radialGradient|Defs|Mask|ClipPath|LinearGradient|RadialGradient)\b[\s\S]*?<\/\1>/g,
    '',
  );
  return [
    ...visible.matchAll(
      /<(path|circle|rect|ellipse|polygon|polyline|line|Path|Circle|Rect|Ellipse|Polygon|Polyline|Line)\b[^>]*>/g,
    ),
  ]
    .map(([tag]) => tag)
    .filter((tag) => !/\s(stroke|fill)=/.test(tag));
}

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

    it('cada forma se pinta, en React y en React Native (trazo o relleno)', () => {
      for (const dir of [REACT_DIR, RN_DIR]) {
        const component = fs.readFileSync(path.join(dir, `${componentName}.tsx`), 'utf-8');
        expect(unpaintedShapes(component)).toEqual([]);
      }
    });

    it(`está exportado en React Native index.ts`, () => {
      const content = fs.readFileSync(path.join(RN_DIR, 'index.ts'), 'utf-8');
      expect(content).toContain(`export { ${componentName} }`);
    });
  });
});

import { describe, it, expect } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from '../../scripts/lib/paths.mjs';

// Se ejecuta tras `npm run build` (así lo hacen la CI y la publicación).
const pkg = JSON.parse(fs.readFileSync(path.join(ROOT, 'package.json'), 'utf-8')) as {
  main: string;
  module: string;
  types: string;
  exports: Record<string, Record<string, string>>;
};

const exists = (file: string) => fs.existsSync(path.join(ROOT, file));
const read = (file: string) => fs.readFileSync(path.join(ROOT, file), 'utf-8');

describe('package.json apunta a ficheros que existen', () => {
  it.each(['main', 'module', 'types'] as const)('%s', (field) => {
    expect(exists(pkg[field])).toBe(true);
  });

  describe.each(Object.entries(pkg.exports))('exports["%s"]', (_subpath, conditions) => {
    it('types va primero, que es donde TypeScript lo busca', () => {
      expect(Object.keys(conditions)[0]).toBe('types');
    });

    it.each(Object.entries(conditions))('%s → %s existe', (_condition, file) => {
      expect(exists(file)).toBe(true);
    });

    it('import es ESM y require es CommonJS', () => {
      expect(read(conditions.import)).not.toMatch(/^"use strict"/);
      expect(read(conditions.require)).toMatch(/^"use strict"/);
    });
  });
});

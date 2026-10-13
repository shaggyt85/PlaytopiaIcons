import { describe, it, expect } from 'vitest';

import {
  libraryFileFor,
  parseLucideIndex,
  planLucideIcon,
} from '../../scripts/lib/lucide.mjs';

const INDEX = parseLucideIndex(
  [
    "export { default as AlertCircle, default as CircleAlert } from './icons/circle-alert.js';",
    "export { default as Ban } from './icons/ban.js';",
    "export { default as CircleX, default as XCircle } from './icons/circle-x.js';",
  ].join('\n'),
);

describe('Iconos de Lucide', () => {
  it('lee los alias del índice de lucide-static', () => {
    expect(INDEX.get('AlertCircle')).toBe('circle-alert');
    expect(INDEX.get('CircleAlert')).toBe('circle-alert');
    expect(INDEX.get('Ban')).toBe('ban');
  });

  it('nombra el fichero con el nombre de lucide-react, mayúsculas seguidas y números incluidos', () => {
    expect(libraryFileFor('XCircle')).toBe('icon-lo-x-circle.svg');
    expect(libraryFileFor('BarChart3')).toBe('icon-lo-bar-chart-3.svg');
    expect(libraryFileFor('RefreshCw')).toBe('icon-lo-refresh-cw.svg');
    expect(libraryFileFor('Settings2')).toBe('icon-lo-settings-2.svg');
  });

  it('copia un alias desde su SVG real, con el nombre del prototipo', () => {
    expect(planLucideIcon('XCircle', INDEX, new Set())).toEqual({
      status: 'add',
      file: 'icon-lo-x-circle.svg',
      source: 'circle-x',
      alias: true,
    });
  });

  it('no marca como alias el que se llama igual', () => {
    expect(planLucideIcon('Ban', INDEX, new Set())).toMatchObject({ alias: false });
  });

  it('no vuelve a copiar el que ya está', () => {
    expect(planLucideIcon('Ban', INDEX, new Set(['icon-lo-ban.svg']))).toEqual({
      status: 'exists',
      file: 'icon-lo-ban.svg',
    });
  });

  it('avisa del que no existe en Lucide', () => {
    expect(planLucideIcon('Instagramm', INDEX, new Set())).toEqual({ status: 'missing' });
  });
});

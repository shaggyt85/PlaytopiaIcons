import { defineConfig } from 'tsup';

export default defineConfig([
  // Build para React (web/Next.js)
  {
    entry: ['src/react/index.ts'],
    outDir: 'dist/react',
    format: ['esm', 'cjs'],
    dts: true,
    minify: true,
    clean: true,
    target: 'es2019',
    external: ['react'],
    splitting: false,
    shims: false,
    sourcemap: true,
  },
  // Build para React Native/Expo
  {
    entry: ['src/react-native/index.ts'],
    outDir: 'dist/react-native',
    format: ['esm', 'cjs'],
    dts: true,
    minify: true,
    clean: false,
    target: 'es2019',
    external: ['react', 'react-native', 'react-native-svg'],
    splitting: false,
    shims: false,
    sourcemap: true,
  },
  // Build para Brand assets (logos, no auto-generados)
  {
    entry: ['src/brand/index.ts'],
    outDir: 'dist/brand',
    format: ['esm', 'cjs'],
    dts: true,
    minify: true,
    clean: false,
    target: 'es2019',
    external: ['react'],
    splitting: false,
    shims: false,
    sourcemap: true,
  },
]);

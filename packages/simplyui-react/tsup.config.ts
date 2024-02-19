import { defineConfig } from 'tsup';

export default defineConfig({
  treeshake: true,
  minify: true,
  target: 'es2018',
  external: ['react'],
  sourcemap: true,
  dts: true,
  format: ['esm', 'cjs'],
  injectStyle: true,
});

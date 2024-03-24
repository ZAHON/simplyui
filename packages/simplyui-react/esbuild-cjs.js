import esbuild from 'esbuild';
import glob from 'glob';

const dir = 'dist/cjs';

const files = glob.sync('src/**/*.tsx').concat(glob.sync('src/**/*.ts'));
const filteredFiles = files.filter((file) => !file.endsWith('.test.tsx') && !file.endsWith('stories.tsx'));

const options = {
  entryPoints: filteredFiles,
  outdir: dir,
  format: 'cjs',
  target: 'es2020',
  sourcemap: true,
  minify: true,
};

// Check if "watch=true" flag is passed
if (process.argv[2]) {
  const [key, value] = process.argv[2].split('=');
  if (key === 'watch' && value === 'true') {
    const ctx = await esbuild.context(options);
    await ctx.watch();
  }
}

esbuild.build(options).catch(() => process.exit(1));

import fs from 'node:fs/promises';
import { watch } from 'node:fs';
import path from 'node:path';
import * as esbuild from 'esbuild';
import less from 'less';

const LIBRARY_PATH = 'library';
const LESS_PATH = path.join(LIBRARY_PATH, 'style');
const SCRIPT_PATH = path.join(LIBRARY_PATH, 'scripts');
const BUILD_PATH = path.join(LIBRARY_PATH, 'build');
const PORT = 8080;

const dev = process.argv.includes('--dev');

const jsOptions = {
  entryPoints: [path.join(SCRIPT_PATH, 'modules', 'main.js')],
  outfile: path.join(BUILD_PATH, 'main.js'),
  bundle: true,
  format: 'iife',
  target: 'es2017',
  minify: !dev,
  sourcemap: dev ? 'linked' : false,
  logLevel: 'info',
};

async function buildCss() {
  const entry = path.join(LESS_PATH, 'style.less');
  const source = await fs.readFile(entry, 'utf8');
  const { css } = await less.render(source, { filename: entry });
  const { code } = await esbuild.transform(css, {
    loader: 'css',
    minify: !dev,
  });
  await fs.writeFile(path.join(BUILD_PATH, 'style.css'), code);
  console.log(`  ${path.join(BUILD_PATH, 'style.css')}`);
}

await fs.mkdir(BUILD_PATH, { recursive: true });

if (dev) {
  const ctx = await esbuild.context(jsOptions);
  await Promise.all([ctx.watch(), buildCss()]);

  watch(LESS_PATH, { recursive: true }, (_event, file) => {
    if (file && file.endsWith('.less')) {
      buildCss().catch(err => console.error(err.message));
    }
  });

  const { port } = await ctx.serve({ servedir: '.', port: PORT });
  console.log(`\n  Serving at http://localhost:${port}\n`);
} else {
  await Promise.all([esbuild.build(jsOptions), buildCss()]);
}

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const distDir = path.join(rootDir, 'dist');
const template = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');

const { render } = await import(
  pathToFileURL(path.join(rootDir, 'dist-ssr/entry-server.js'))
);

const routes = ['/', '/nosotros', '/servicios', '/desarrollo', '/diseno', '/contacto'];

for (const url of routes) {
  const { appHtml, headTags } = render(url);

  const html = template
    .replace(/<!-- seo:start -->[\s\S]*?<!-- seo:end -->/, headTags)
    .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

  const outDir = url === '/' ? distDir : path.join(distDir, url.slice(1));
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, 'index.html'), html);
  console.log('prerendered:', url);
}

fs.rmSync(path.join(rootDir, 'dist-ssr'), { recursive: true, force: true });

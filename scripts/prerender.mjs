import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { ROUTES } from '../src/i18n/routes.js';

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const distDir = path.join(rootDir, 'dist');
const template = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');

const { render } = await import(
  pathToFileURL(path.join(rootDir, 'dist-ssr/entry-server.js'))
);

const routes = ROUTES.flatMap((r) => [r.es, r.en]);

for (const url of routes) {
  const { appHtml, headTags, htmlAttrs } = render(url);

  const html = template
    .replace(/<!-- seo:start -->[\s\S]*?<!-- seo:end -->/, headTags)
    .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)
    .replace(/<html lang="[^"]*"/, `<html ${htmlAttrs || 'lang="es"'}`);

  const outDir =
    url === '/' ? distDir
      : url === '/en/' ? path.join(distDir, 'en')
      : path.join(distDir, url.slice(1));
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, 'index.html'), html);
  console.log('prerendered:', url);
}

fs.rmSync(path.join(rootDir, 'dist-ssr'), { recursive: true, force: true });

# Atelie Real

Site publicado via GitHub Pages a partir da branch `main`.

O codigo-fonte do projeto Vite fica em `site-src/`.

Para gerar uma nova versao publicada:

```bash
cd site-src
npx -p node@22 -p npm@10 npm ci
npx -p node@22 -p npm@10 npm run build
cp dist/index.html ../index.html
cp dist/.nojekyll ../.nojekyll
rm -rf ../images
cp -R dist/images ../images
```

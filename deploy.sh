#!/bin/zsh
# GitHub Pages deployment. The production build already contains config/production under /config/,
# which targets the Raspberry Pi reverse proxy: edit dist/.../config/*.json here for GitHub Pages URLs.
ng build --configuration production --base-href /vixo-mx-host/
cd dist/vixo-mx-host/browser
git init
git remote add origingp git@github.com:v1x0/vixo-mx-host.git
cp index.html 404.html
touch .nojekyll
git add .
git commit -m "Deploy Githubpages"
git push -f origingp main:gh-pages

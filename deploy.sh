#!/bin/zsh
# GitHub Pages deployment. The build is the same for every environment:
# the environment configuration (federation manifest, MFE registry) is published under /config/.
ng build --configuration production --base-href /vixo-mx-host/
cd dist/vixo-mx-host/browser
mkdir -p config
cp ../../../config/production/*.json config/
git init
git remote add origingp git@github.com:v1x0/vixo-mx-host.git
cp index.html 404.html
touch .nojekyll
git add .
git commit -m "Deploy Githubpages"
git push -f origingp main:gh-pages

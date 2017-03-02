#!/bin/bash

set -o errexit # Exit on error
DEST="./fingerpich.github.io/spiro3d/"
npm run build
git clone https://github.com/fingerpich/fingerpich.github.io.git
cp ./build/index.html $DEST
cp ./build/style.css $DEST
cp ./build/bundle.js $DEST
cp ./build/spiro3D_SW.js $DEST
cp -R "./build/icons" $DEST
cp ./src/manifest.webmanifest $DEST
(cd $DEST && git add . && git commit -a -m "deploy Spiro3D on io" && git push origin master)
rm -rf ./fingerpich.github.io

#!/bin/bash

set -o errexit # Exit on error
DEST="./fingerpich.github.io/spiro3d"
SRC="./build"

npm run build
git clone https://github.com/fingerpich/fingerpich.github.io.git

cp ./src/manifest.webmanifest $SRC
rm $SRC/*.map
cp -R $SRC/* $DEST

(cd $DEST && git add . && git commit -a -m "deploy Spiro3D on io" && git push origin master)
rm -rf ./fingerpich.github.io

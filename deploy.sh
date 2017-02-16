#!/bin/bash

set -o errexit # Exit on error

npm run build
git clone https://github.com/fingerpich/fingerpich.github.io.git
cp ./build/index.html ./fingerpich.github.io/
cp ./build/style.css ./fingerpich.github.io/
cp ./build/bundle.js ./fingerpich.github.io/
(cd ./fingerpich.github.io/ && git commit -a -m "deploy on io" && git push origin master)
rm -rf ./fingerpich.github.io

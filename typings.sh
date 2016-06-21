#!/usr/bin/env bash

# This script updates typings and removes the following warning
# typings WARN deprecated 6/2/2016: "registry:dt/core-js#0.0.0+20160317120654" is deprecated (updated, replaced or removed)
# An entry should exist here for each entry in typings.json
# This script assumes that the NodeJS module 'typings' is installed locally
# I do not know how to revert changes so this script backs up typings.json

echo "Backing up typings.json";
cp typings.json typings.json.bak

echo "Updating typings.json";
npm run typings -- install dt~core-js --global --save
npm run typings -- install dt~jasmine --global --save
npm run typings -- install dt~lodash --global --save
npm run typings -- install dt~node --global --save

echo "Update complete";

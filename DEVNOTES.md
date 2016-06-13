# TypeScript compiler

There TS compiler knows nothing about third party libs
To educate it, for example, run ..

npm run typings -- install dt~lodash --global --save

Which will add an entry to typings.json
It will also update the typings folder with required .d.ts files

Note that gulp task 'ts-2-js' sources ['app/**/*.ts', 'typings/**/*.d.ts']

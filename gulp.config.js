const browserSync = require('browser-sync').create();
const GLOBAL_STYL = 'app/global.styl';
const GLOBAL_THRESHOLD = 50;
const config = {
  browserSync: browserSync,
  browserSyncPort: 3000,
  apiPhp: 'http://localhost:7777',
  vmPhp: 'https://10.20.14.108:9100',
  files: {
    js: ['*.js', 'gulp/**/*.js'],
    ts: ['app/**/*.ts'],
    tsd: ['typings/**/*.d.ts'],
    styl: ['app/**/*.styl', '!' + GLOBAL_STYL],
    stylStream: [GLOBAL_STYL],
    copy: ['app/**/*.html', 'app/**/*.jpg', 'app/**/*.png', 'app/**/*.css', 'app/**/*.eot', 'app/**/*.svg', 'app/**/*.ttf', 'app/**/*.woff', 'app/**/*.woff2']
  },
  coverageThresholds: {
    statements: GLOBAL_THRESHOLD,
    branches: GLOBAL_THRESHOLD,
    functions: GLOBAL_THRESHOLD,
    lines: GLOBAL_THRESHOLD
  }
};

module.exports = config;

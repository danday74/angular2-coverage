const browserSync = require('browser-sync').create();
const GLOBAL_STYL = 'app/global.styl';
const config = {
  browserSync: browserSync,
  apiPhp: 'http://localhost:7777',
  vmPhp: 'https://10.20.14.108:9100',
  files: {
    ts: ['app/**/*.ts'],
    tsd: ['typings/**/*.d.ts'],
    styl: ['app/**/*.styl', '!' + GLOBAL_STYL],
    stylStream: [GLOBAL_STYL],
    copy: ['app/**/*.html', 'app/**/*.jpg', 'app/**/*.png', 'app/**/*.css', 'app/**/*.eot', 'app/**/*.svg', 'app/**/*.ttf', 'app/**/*.woff', 'app/**/*.woff2']
  }
};

module.exports = config;

const GLOBAL_STYL = 'app/global.styl';
const GLOBAL_THRESHOLD = 50;
// noinspection JSUnusedGlobalSymbols
const config = {
  browserSyncPort: 4000,
  apiPhp: 'http://localhost:7777',
  vmPhp: 'https://10.20.14.108:9100',
  files: {
    js: ['*.js', 'gulp/**/*.js'],
    ts: ['app/**/*.ts'],
    tsd: ['typings/**/*.d.ts'],
    styl: ['app/**/*.styl', '!' + GLOBAL_STYL],
    stylStream: [GLOBAL_STYL],
    copy: [
      'app/**/*.html',
      'app/**/*.css',
      'app/**/*.jpg',
      'app/**/*.png',
      'app/**/*.ico',
      'app/**/*.eot',
      'app/**/*.svg',
      'app/**/*.ttf',
      'app/**/*.woff',
      'app/**/*.woff2'
    ]
  },
  coverageThresholds: {
    statements: GLOBAL_THRESHOLD,
    branches: GLOBAL_THRESHOLD,
    functions: GLOBAL_THRESHOLD,
    lines: GLOBAL_THRESHOLD
  },
  coverageOutput: 'coverage/coverage-js.json',
  coverageReports: {
    'html': 'coverage/html',
    'json-summary': 'coverage/coverage-ts-summary.json',
    'json': 'coverage/coverage-ts.json',
    'text-summary': 'coverage/coverage-ts-summary.txt',
    'text': 'coverage/coverage-ts.txt'
  },
  sourcemaps: {
    dir: '.',
    options: {
      includeContent: false,
      // Returns 'app' file relative to 'build' file
      // Used for locating the original file
      sourceRoot: (file) => {
        let srcRoot = 'app';
        let temp = file.path.replace(/\\/g, '/');
        let filePath = temp.split(/\/app\/(.+)?/)[1];
        let numDotDot = filePath.split('/').length;
        // noinspection JSPotentiallyInvalidConstructorUsage
        let range = Array.from(Array(numDotDot).keys());
        range.forEach(() => {
          srcRoot = `../${srcRoot}`;
        });
        return srcRoot;
      }
    }
  }
};

module.exports = config;

module.exports = config => {

  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    plugins: [
      require('karma-jasmine'),
      //require('karma-chrome-launcher'),
      require('karma-phantomjs-launcher'),
      //require('karma-htmlfile-reporter'),
      require('karma-coverage'),
      require('karma-mocha-reporter')
    ],

    customLaunchers: {
      // From the CLI. Not used here but interesting
      // chrome setup for travis CI using chromium
      Chrome_travis_ci: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    },
    files: [
      // System.js for module loading
      'node_modules/systemjs/dist/system.src.js',

      // Polyfills
      'node_modules/core-js/client/shim.js',

      // Reflect and Zone.js
      'node_modules/reflect-metadata/Reflect.js',
      'node_modules/zone.js/dist/zone.js',
      'node_modules/zone.js/dist/jasmine-patch.js',
      'node_modules/zone.js/dist/async-test.js',
      'node_modules/zone.js/dist/fake-async-test.js',

      // RxJs.
      {pattern: 'node_modules/rxjs/**/*.js', included: false, watched: false},
      {pattern: 'node_modules/rxjs/**/*.js.map', included: false, watched: false},

      // Angular 2 itself and the testing library
      {pattern: 'node_modules/@angular/**/*.js', included: false, watched: false},
      {pattern: 'node_modules/@angular/**/*.js.map', included: false, watched: false},

      {pattern: 'systemjs.config.js', included: false, watched: false},
      'karma-test-shim.js',

      // transpiled application & spec code paths loaded via module imports
      {pattern: 'build/**/*.js', included: false, watched: true},

      // asset (HTML & CSS) paths loaded via Angular's component compiler
      // (these paths need to be rewritten, see proxies section)
      {pattern: 'build/**/*.html', included: false, watched: true},
      {pattern: 'build/**/*.css', included: false, watched: true},
      { pattern: 'node_modules/systemjs/dist/system-polyfills.js', included: false, watched: false }, // PhantomJS2 (and possibly others) might require it

      // paths for debugging with source maps in dev tools
      {pattern: 'app/**/*.ts', included: false, watched: false},
      {pattern: 'build/**/*.js.map', included: false, watched: false}
    ],

    // proxied base paths for loading assets
    proxies: {
      // required for component assets fetched by Angular's compiler
      //"/app/": appAssets,
      // '/app/': '/base/app/',
      // '/build/': '/base/build/'
    },

    exclude: [],
    // preprocessors: {},

    preprocessors: {
      'build/**/!(*spec).js': ['coverage']
    },

    //reporters: ['progress', 'dots', 'html', 'mocha'],
    reporters: ['mocha', 'coverage'],

    // HtmlReporter configuration
    htmlReporter: {
      // Open this file to see results in browser
      outputFile: '_test-output/tests.html',

      // Optional
      pageTitle: 'Unit Tests',
      subPageTitle: __dirname
    },

    coverageReporter: {
      reporters: [
        {type: 'json', subdir: '.', file: 'coverage-final.json'}
      ]
    },

    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: true
  })
};

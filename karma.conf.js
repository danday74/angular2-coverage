module.exports = (config) => {

  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    plugins: [
      require('karma-jasmine'),
      require('karma-phantomjs-launcher'),
      require('karma-coverage'),
      require('karma-mocha-reporter'),
      require('karma-super-dots-reporter')
    ],

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
      // lodash
      {pattern: 'node_modules/lodash/**/*.js', included: false, watched: false},
      // Angular 2 and the testing library
      {pattern: 'node_modules/@angular/**/*.js', included: false, watched: false},
      {pattern: 'node_modules/@angular/**/*.js.map', included: false, watched: false},
      {pattern: 'systemjs.config.js', included: false, watched: false},
      'karma-test-shim.js',
      // Transpiled application & spec code paths loaded via module imports
      {pattern: 'build/**/*.js', included: false, watched: true},
      // Asset (HTML & CSS) paths loaded via Angular's component compiler
      // (these paths need to be rewritten, see proxies section)
      {pattern: 'build/**/*.html', included: false, watched: true},
      {pattern: 'build/**/*.css', included: false, watched: true},
      {pattern: 'node_modules/systemjs/dist/system-polyfills.js', included: false, watched: false}, // PhantomJS2 (and possibly others) might require it
      // Paths for debugging with source maps in dev tools
      {pattern: 'app/**/*.ts', included: false, watched: false},
      {pattern: 'build/**/*.js.map', included: false, watched: false}
    ],

    proxies: {
      '/build/': '/base/build/'
    },
    exclude: [],
    preprocessors: {
      'build/**/!(*spec).js': ['coverage']
    },

    reporters: ['mocha', 'coverage'],
    mochaReporter: {},
    coverageReporter: {
      reporters: [
        {type: 'json', subdir: '.', file: 'coverage-js.json'}
      ]
    },

    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    browsers: ['PhantomJS'],
    singleRun: true,
    autoWatch: false
  });
};

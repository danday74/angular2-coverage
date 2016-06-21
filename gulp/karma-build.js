const TASK = 'karma-build';
const core = require('../core-gulp-modules');
const Server = require('karma').Server;
const path = require('path');

core.gulp.task(TASK, done => {
  core.subHeading(TASK, 'Running unit tests');
  new Server({
    configFile: path.join(__dirname, '../karma.conf.js'),
    reporters: ['super-dots', 'coverage']
    // dots
    // mocha
    // threshold
    // narrow
    // super-dots
    // nyan
    // karma-remap-istanbul
  }, () => {
    done();
  }).start();
});

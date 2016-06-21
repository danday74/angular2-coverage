const TASK = 'karma-watch';
const core = require('../core-gulp-modules');
const Server = require('karma').Server;
const path = require('path');

core.gulp.task(TASK, done => {
  core.subHeading(TASK, 'Running unit tests');
  new Server({
    configFile: path.join(__dirname, '../karma.conf.js'),
    reporters: ['super-dots', 'coverage']
  }, () => {
    console.log();
    done();
  }).start();
});

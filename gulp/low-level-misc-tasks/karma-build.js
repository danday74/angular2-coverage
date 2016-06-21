const TASK = 'karma-build';
const core = require('../../core-gulp-modules');
const Server = require('karma').Server;

core.gulp.task(TASK, done => {
  core.subHeading(TASK, 'Running unit tests');
  new Server({
    configFile: core.path.join(__dirname, '../../karma.conf.js'),
    reporters: ['mocha', 'coverage']
  }, () => {
    done();
  }).start();
});

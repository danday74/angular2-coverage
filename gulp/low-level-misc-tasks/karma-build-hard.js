const TASK = 'karma-build-hard';
const core = require('../../gulp-core');
const Server = require('karma').Server;

core.gulp.task(TASK, (done) => {
  core.subHeading(TASK, 'Running unit tests');
  new Server({
    configFile: core.path.join(__dirname, '../../karma.conf.js'),
    reporters: ['mocha', 'coverage']
  }, (exitCode) => {
    if (exitCode > 0) {
      process.exit(exitCode);
    }
    done();
  }).start();
});

const TASK = 'karma-watch';
const core = require('../../gulp-core');
const Server = require('karma').Server;

core.gulp.task(TASK, (done) => {
  core.subHeading(TASK, 'Running unit tests');
  new Server({
    configFile: core.path.join(__dirname, '../../karma.conf.js'),
    reporters: ['super-dots', 'coverage']
  }, () => {
    console.log();
    done();
  }).start();
});

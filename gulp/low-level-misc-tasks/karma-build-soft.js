const TASK = 'karma-build-soft';
const core = require('../../gulp-core');
const Server = require('karma').Server;

core.gulp.task(TASK, (done) => {
  core.subHeading(TASK, 'Running unit tests');
  new Server({
    configFile: core.path.join(__dirname, '../../karma.conf.js'),
    reporters: ['mocha', 'coverage']
  }, () => {
    // TODO: Consider this log statement and delete or do something with it
    console.log('XXXXX WHY CONSOLE LOG HERE! XXXXX');
    done();
  }).start();
});

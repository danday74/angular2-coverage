const TASK = 'test-watch';
const core = require('../core-gulp-modules');

core.gulp.task(TASK, done => {
  core.mainHeading(TASK, 'Starting test run');
  core.runSequence(
    'coverage-clean',
    'karma-watch',
    'coverage-main',
    'coverage-summary-short',
    'coverage-open',
    'coverage-enforcer-soft',
    done);
});

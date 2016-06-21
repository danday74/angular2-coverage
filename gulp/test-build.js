const TASK = 'test-build';
const core = require('../core-gulp-modules');

core.gulp.task(TASK, done => {
  core.subHeading(TASK, 'Starting test run');
  core.runSequence(
    'coverage-clean',
    'karma-build',
    'coverage-main',
    'coverage-summary-long',
    'coverage-open',
    'coverage-enforcer-hard',
    done);
});

const TASK = 'test-npm-test';
const core = require('../gulp-core');

core.gulp.task(TASK, (done) => {
  core.mainHeading(TASK, 'Starting test run');
  core.runSequence(
    'coverage-clean',
    'karma-build-soft',
    'coverage-main',
    'coverage-summary-long',
    'coverage-open',
    'coverage-enforcer-soft',
    done);
});

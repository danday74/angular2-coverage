const TASK = 'test-npm-build';
const core = require('../gulp-core');

core.gulp.task(TASK, (done) => {
  core.mainHeading(TASK, 'Starting test run');
  core.runSequence(
    'coverage-clean',
    'karma-build-hard',
    'coverage-main',
    'coverage-summary-long',
    'coverage-open',
    'coverage-enforcer-hard',
    done);
});

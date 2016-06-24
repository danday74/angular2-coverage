const TASK = 'test-npm-start';
const core = require('../gulp-core');

core.gulp.task(TASK, (done) => {
  core.mainHeading(TASK, 'Starting test run');
  core.runSequence(
    'coverage-clean',
    'karma-watch', // brief output
    'coverage-main',
    'coverage-summary-short', // brief summary
    'coverage-open',
    'coverage-enforcer-soft',
    done);
});

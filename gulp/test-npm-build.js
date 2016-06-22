const TASK = 'test-npm-build';
const core = require('../core-gulp-modules');

core.gulp.task(TASK, done => {
  core.mainHeading(TASK, 'Starting test run');
  core.runSequence(
    'coverage-clean',
    'karma-build',
    'coverage-main',
    'coverage-summary-long',
    'coverage-open',
    'coverage-enforcer-hard', // coverage enforced
    done);
});

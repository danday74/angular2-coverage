const TASK = 'coverage-summary-short';
const core = require('../../core-gulp-modules');
const intercept = require('gulp-intercept');

core.gulp.task(TASK, () => {
  core.subHeading(TASK, '...');
  return core.gulp.src(['coverage/text-summary.txt'])
    .pipe(intercept(file => {
      console.log(file.contents.toString());
    }));
});
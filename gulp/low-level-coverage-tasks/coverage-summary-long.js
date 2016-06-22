const TASK = 'coverage-summary-long';
const core = require('../../gulp-core');
const intercept = require('gulp-intercept');

core.gulp.task(TASK, () => {
  core.subHeading(TASK, '...');
  return core.gulp.src(['coverage/text.txt', 'coverage/text-summary.txt'])
    .pipe(intercept(file => {
      console.log(file.contents.toString());
    }));
});

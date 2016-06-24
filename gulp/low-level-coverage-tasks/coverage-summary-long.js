const TASK = 'coverage-summary-long';
const core = require('../../gulp-core');

core.gulp.task(TASK, () => {
  core.subHeading(TASK, '...');
  return core.gulp.src(['coverage/coverage-ts.txt', 'coverage/coverage-ts-summary.txt'])
    .pipe(core.intercept((file) => {
      console.log(file.contents.toString());
    }));
});

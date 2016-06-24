const TASK = 'coverage-summary-short';
const core = require('../../gulp-core');

core.gulp.task(TASK, () => {
  core.subHeading(TASK, '...');
  return core.gulp.src(['coverage/coverage-ts-summary.txt'])
    .pipe(core.intercept((file) => {
      console.log(file.contents.toString());
    }));
});

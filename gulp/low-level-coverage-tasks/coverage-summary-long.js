const TASK = 'coverage-summary-long';
const core = require('../../gulp-core');

core.gulp.task(TASK, () => {
  core.subHeading(TASK, '...');
  return core.gulp
    .src([core.config.coverageReports['text'], core.config.coverageReports['text-summary']])
    .pipe(core.intercept((file) => {
      console.log(file.contents.toString());
    }));
});

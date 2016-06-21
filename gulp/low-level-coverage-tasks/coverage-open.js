const TASK = 'coverage-open';
const core = require('../../core-gulp-modules');
const intercept = require('gulp-intercept');

core.gulp.task(TASK, () => {
  return core.gulp.src('coverage/html/index.html')
    .pipe(intercept(file => {
      core.subHeading(TASK, `CTRL CLICK to open file:///${file.path}`);
    }));
});
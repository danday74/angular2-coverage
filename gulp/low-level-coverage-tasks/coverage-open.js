const TASK = 'coverage-open';
const core = require('../../gulp-core');
const intercept = require('gulp-intercept');

core.gulp.task(TASK, () => {
  return core.gulp.src('coverage/html/index.html')
    .pipe(intercept((file) => {
      let link = core.link(`file:///${file.path.replace(/\\/g, '/')}`);
      core.subHeading(TASK, `CTRL CLICK to open ${link}`);
    }));
});

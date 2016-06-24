const TASK = 'coverage-open';
const core = require('../../gulp-core');

core.gulp.task(TASK, () => {
  return core.gulp
    .src(core.config.coverageReports['html'] + '/index.html')
    .pipe(core.intercept((file) => {
      let link = core.link(`file:///${file.path.replace(/\\/g, '/')}`);
      core.subHeading(TASK, `CTRL CLICK to open ${link}`);
    }));
});

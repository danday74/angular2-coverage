const TASK = 'coverage-main';
const core = require('../../gulp-core');
const remapIstanbul = require('remap-istanbul/lib/gulpRemapIstanbul');

core.gulp.task(TASK, () => {
  core.subHeading(TASK, 'Generating remapped coverage reports');
  return core.gulp
    .src(core.config.coverageOutput)
    .pipe(remapIstanbul({
      reports: core.config.coverageReports
    }));
});

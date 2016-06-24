const TASK = 'coverage-clean';
const core = require('../../gulp-core');
const del = require('del');

core.gulp.task(TASK, () => {
  core.subHeading(TASK, 'Deleting coverage folder');
  return del(['coverage']);
});

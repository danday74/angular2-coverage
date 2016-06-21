const TASK = 'coverage-clean';
const core = require('../../core-gulp-modules');
const del = require('del');

core.gulp.task('coverage-clean', () => {
  core.subHeading(TASK, 'Deleting coverage folder');
  return del(['coverage']);
});

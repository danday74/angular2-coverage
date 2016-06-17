const gulp = require('gulp');
const del = require('del');

gulp.task('build-clean', () => {
  return del(['build']);
});

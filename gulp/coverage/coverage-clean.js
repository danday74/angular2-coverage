const gulp = require('gulp');
const del = require('del');

gulp.task('coverage-clean', () => {
  return del(['coverage']);
});

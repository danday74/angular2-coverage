const gulp = require('gulp');
const config = require('../gulp.config');

gulp.task('copy', () => {
  return gulp
    .src(config.files.copy)
    .pipe(gulp.dest('build'));
});

const gulp = require('gulp');
const config = require('../gulp.config');
const stylus = require('gulp-stylus');

gulp.task('styl-2-css', () => {
  return gulp
    .src(config.files.styl)
    .pipe(stylus({
      'include css': true
    }))
    .pipe(gulp.dest('build'));
});

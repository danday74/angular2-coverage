const gulp = require('gulp');
const config = require('../gulp.config');
const stylus = require('gulp-stylus');

gulp.task('styl-2-css-stream', () => {
  return gulp
    .src(config.files.stylStream)
    .pipe(stylus({
      'include css': true
    }))
    .pipe(gulp.dest('build'))
    .pipe(config.browserSync.stream());
});

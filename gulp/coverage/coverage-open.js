const gulp = require('gulp');
const open = require('gulp-open');

gulp.task('coverage-open', () => {
  return gulp.src('coverage/html/index.html')
    .pipe(open());
});

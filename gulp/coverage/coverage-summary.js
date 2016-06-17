const gulp = require('gulp');
const intercept = require('gulp-intercept');

gulp.task('coverage-summary', () => {
  return gulp.src(['coverage/text.txt', 'coverage/text-summary.txt'])
    .pipe(intercept(file => {
      console.log(file.contents.toString());
    }));
});

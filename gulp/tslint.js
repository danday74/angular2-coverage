const gulp = require('gulp');
const config = require('../gulp.config');
const tslint = require('gulp-tslint');

gulp.task('tslint', () => {
  return gulp.src(config.files.ts)
    .pipe(tslint())
    .pipe(tslint.report('verbose'));
});

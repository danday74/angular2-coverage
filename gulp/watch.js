const gulp = require('gulp');
const config = require('../gulp.config');

gulp.task('watch', () => {
  // gulp.task('es6-2-es5-watch', ['es6-2-es5', 'eslint'], () => config.browserSync.reload());
  // gulp.task('copy-watch', ['copy'], () => config.browserSync.reload());
  // gulp.watch(config.files.es6, ['es6-2-es5-watch']);
  // gulp.watch(config.files.copy, ['copy-watch']);
  // gulp.watch(config.files.styl, ['styl-2-css']);
  gulp.task('ts-2-js-watch', ['ts-2-js', 'tslint'], () => config.browserSync.reload());
  gulp.task('copy-watch', ['copy'], () => config.browserSync.reload());
  gulp.task('styl-2-css-watch', ['styl-2-css'], () => config.browserSync.reload());
  gulp.watch(config.files.ts, ['ts-2-js-watch']);
  gulp.watch(config.files.copy, ['copy-watch']);
  gulp.watch(config.files.styl, ['styl-2-css-watch']);
  
  gulp.watch(config.files.stylStream, ['styl-2-css-stream']);
});

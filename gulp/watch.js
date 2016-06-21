const TASK = 'watch';
const core = require('../core-gulp-modules');

core.gulp.task(TASK, () => {
  core.mainHeading(TASK, 'Watching files');
  core.gulp.task('ts-2-js-watch', (done) => {
    core.runSequence(
      ['ts-2-js', 'tslint'],
      'test-watch',
      () => {
        core.config.browserSync.reload();
        done();
      });
  });

  core.gulp.task('copy-watch', ['copy'], () => core.config.browserSync.reload());
  core.gulp.watch(core.config.files.ts, ['ts-2-js-watch']);
  core.gulp.watch(core.config.files.copy, ['copy-watch']);
  core.gulp.watch(core.config.files.styl, ['styl-2-css-watch']);
  core.gulp.watch(core.config.files.stylStream, ['styl-2-css-stream']);
});

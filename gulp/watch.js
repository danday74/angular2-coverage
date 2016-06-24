const TASK = 'watch';
const core = require('../gulp-core');

core.gulp.task(TASK, () => {
  core.mainHeading(TASK, 'Watching files');

  core.gulp.task('reload', (done) => {
    // Should reload be here or inside timeout?
    core.browserSync.reload();
    setTimeout(() => {
      done();
    }, 1000);
  });

  core.gulp.task('xxwatchxx-copy', (done) => {
    core.runSequence(
      'copy',
      'reload',
      'test-npm-start',
      done);
  });

  core.gulp.task('xxwatchxx-ts-2-js', (done) => {
    core.runSequence(
      'tslint-soft',
      'ts-2-js-soft',
      'reload',
      'test-npm-start',
      done);
  });

  core.gulp.task('xxwatchxx-styl-2-css', (done) => {
    core.runSequence(
      'styl-2-css-soft',
      'reload',
      'test-npm-start',
      done);
  });

  core.gulp.watch(core.config.files.copy, ['xxwatchxx-copy']);
  core.gulp.watch(core.config.files.ts, ['xxwatchxx-ts-2-js']);
  core.gulp.watch(core.config.files.styl, ['xxwatchxx-styl-2-css']);
  core.gulp.watch(core.config.files.stylStream, ['styl-2-css-stream-soft']);
});

const TASK = 'watch';
const core = require('../gulp-core');

core.gulp.task(TASK, () => {
  core.mainHeading(TASK, 'Watching files');

  core.gulp.task('reload', (done) => {
    // TODO: Should reload be here or inside timeout?
    core.browserSync.reload();
    setTimeout(() => {
      done();
    }, 1000);
  });

  core.gulp.task('xxwatchxx-copy', (done) => {
    console.log(core.watch('WATCH: copy'));
    core.runSequence(
      'copy',
      'reload',
      'test-npm-start',
      done);
  });

  core.gulp.task('xxwatchxx-ts-2-js', (done) => {
    console.log(core.watch('WATCH: ts-2-js'));
    core.runSequence(
      'tslint-soft',
      'ts-2-js-soft',
      'reload',
      'test-npm-start',
      done);
  });

  core.gulp.task('xxwatchxx-styl-2-css', (done) => {
    console.log(core.watch('WATCH: styl-2-css'));
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

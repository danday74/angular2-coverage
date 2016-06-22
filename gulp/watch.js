const TASK = 'watch';
const core = require('../gulp-core');

core.gulp.task(TASK, () => {
  core.mainHeading(TASK, 'Watching files');

  core.gulp.task('reload', (done => {
    core.config.browserSync.reload();
    setTimeout(() => {
      done();
    }, 1000);
  }));

  core.gulp.task('ts-2-js-watch', done => {
    core.runSequence(
      ['ts-2-js', 'tslint-soft'],
      'reload',
      'test-npm-start',
      done);
  });

  core.gulp.task('copy-watch', done => {
    core.runSequence(
      'copy',
      'reload',
      'test-npm-start',
      done);
  });

  core.gulp.task('styl-2-css-watch', done => {
    core.runSequence(
      'styl-2-css',
      'reload',
      'test-npm-start',
      done);
  });

  core.gulp.watch(core.config.files.ts, ['ts-2-js-watch']);
  core.gulp.watch(core.config.files.copy, ['copy-watch']);
  core.gulp.watch(core.config.files.styl, ['styl-2-css-watch']);
  core.gulp.watch(core.config.files.stylStream, ['styl-2-css-stream']);
});

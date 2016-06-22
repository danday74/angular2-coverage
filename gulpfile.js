const core = require('./gulp-core');
const requireDir = require('require-dir');
requireDir('gulp', {recurse: true});

core.gulp.task('build', done => {
  core.runSequence(
    'build-hard',
    'test-npm-build',
    done);
});

core.gulp.task('start', done => {
  core.runSequence(
    'build-soft',
    'test-npm-start',
    ['serve', 'watch'],
    done);
});

core.gulp.task('test', done => {
  core.runSequence(
    'build-soft',
    'test-npm-test',
    done);
});

core.gulp.task('default', done => {
  core.runSequence(
    'start',
    done);
});

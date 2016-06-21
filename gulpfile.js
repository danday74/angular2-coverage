const core = require('./core-gulp-modules');
const requireDir = require('require-dir');
requireDir('gulp', {recurse: true});

core.gulp.task('build', done => {
  core.mainHeading('build', 'Starting build');
  core.runSequence(
    'eslint',
    'build-clean',
    ['copy', 'styl-2-css', 'styl-2-css-stream', 'tslint', 'ts-2-js'],
    done);
});

core.gulp.task('start', done => {
  core.runSequence(
    'build',
    'test-watch',
    ['serve', 'watch'],
    done);
});

core.gulp.task('default', done => {
  core.runSequence(
    'start',
    done);
});

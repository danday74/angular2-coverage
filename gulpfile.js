const gulp = require('gulp');
const runSequence = require('run-sequence');
const requireDir = require('require-dir');
requireDir('gulp', {recurse: true});

gulp.task('build', done => {
  runSequence(
    'build-clean',
    ['copy', 'styl-2-css', 'styl-2-css-stream', 'tslint', 'ts-2-js'],
    done);
});

gulp.task('test-simple', done => {
  runSequence(
    'coverage-clean',
    'karma',
    'coverage-main',
    'coverage-summary',
    done);
});

// NOTE: npm test runs build first
gulp.task('test', done => {
  runSequence(
    'test-simple',
    'coverage-enforcer',
    'coverage-open',
    done);
});

gulp.task('start', done => {
  runSequence(
    'build',
    'test-simple',
    ['serve', 'watch'],
    done);
});

gulp.task('default', ['start']);

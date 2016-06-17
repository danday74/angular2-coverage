const gulp = require('gulp');
const config = require('../gulp.config');
const typescript = require('gulp-typescript');
const tscConfig = require('../tsconfig.json');
const sourcemaps = require('gulp-sourcemaps');

gulp.task('ts-2-js', () => {
  return gulp
    .src(config.files.ts.concat(config.files.tsd))
    .pipe(sourcemaps.init())
    .pipe(typescript(tscConfig.compilerOptions))
    .pipe(sourcemaps.write('.', {includeContent: false, sourceRoot: '../app'}))
    .pipe(gulp.dest('build'));
});

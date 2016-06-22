const TASK = 'styl-2-css-stream';
const core = require('../../gulp-core');
const stylus = require('gulp-stylus');
const sourcemaps = require('gulp-sourcemaps');
const nib = require('nib');

core.gulp.task(TASK, () => {
  core.subHeading(TASK, 'Transpiling Stylus to CSS (streaming)');
  return core.gulp
    .src(core.config.files.stylStream)
    .pipe(sourcemaps.init())
    .pipe(stylus({
      'include css': true,
      compress: true,
      use: nib()
    }))
    .pipe(sourcemaps.write('.', {includeContent: false, sourceRoot: '../app'}))
    .pipe(core.gulp.dest('build'))
    .pipe(core.config.browserSync.stream());
});

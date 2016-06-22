const TASK = 'styl-2-css-stream';
const core = require('../../gulp-core');
const stylus = require('gulp-stylus');

core.gulp.task(TASK, () => {
  core.subHeading(TASK, 'Transpiling Stylus to CSS (streaming)');
  return core.gulp
    .src(core.config.files.stylStream)
    .pipe(stylus({
      'include css': true
    }))
    .pipe(core.gulp.dest('build'))
    .pipe(core.config.browserSync.stream());
});

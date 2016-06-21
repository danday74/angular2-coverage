const TASK = 'styl-2-css';
const core = require('../core-gulp-modules');
const stylus = require('gulp-stylus');

core.gulp.task(TASK, () => {
  core.subHeading(TASK, 'Transpiling Stylus to CSS');
  return core.gulp
    .src(core.config.files.styl)
    .pipe(stylus({
      'include css': true
    }))
    .pipe(core.gulp.dest('build'));
});

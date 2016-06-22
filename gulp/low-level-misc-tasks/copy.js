const TASK = 'copy';
const core = require('../../gulp-core');

core.gulp.task(TASK, () => {
  core.subHeading(TASK, 'Copying from \'app\' to \'build\'');
  return core.gulp
    .src(core.config.files.copy)
    .pipe(core.gulp.dest('build'));
});

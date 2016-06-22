const TASK = 'build-clean';
const core = require('../../gulp-core');
const del = require('del');

core.gulp.task(TASK, () => {
  core.subHeading(TASK, 'Deleting build folder');
  return del(['build']);
});

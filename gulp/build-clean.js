const TASK = 'build-clean';
const core = require('../core-gulp-modules');
const del = require('del');

core.gulp.task(TASK, () => {
  core.subHeading(TASK, 'Deleting build folder');
  return del(['build']);
});

const TASK = 'tslint';
const core = require('../core-gulp-modules');
const tslint = require('gulp-tslint');

core.gulp.task(TASK, () => {
  core.subHeading(TASK, 'Linting TypeScript');
  return core.gulp.src(core.config.files.ts)
    .pipe(tslint())
    .pipe(tslint.report('verbose'));
});

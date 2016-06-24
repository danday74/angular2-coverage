const TASK = 'eslint-hard';
const core = require('../../gulp-core');
const eslint = require('gulp-eslint');

core.gulp.task(TASK, () => {
  core.subHeading(TASK, 'Linting JavaScript');
  //noinspection JSCheckFunctionSignatures
  return core.gulp
    .src(core.config.files.js)
    .pipe(eslint())
    .pipe(eslint.format('stylish', process.stdout))
    .pipe(eslint.failAfterError())
    .on('error', () => {
      process.exit(1);
    });
});

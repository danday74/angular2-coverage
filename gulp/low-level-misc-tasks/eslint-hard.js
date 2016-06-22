const TASK = 'eslint-hard';
const core = require('../../gulp-core');
const eslint = require('gulp-eslint');

core.gulp.task(TASK, function () {
  core.subHeading(TASK, 'Linting JavaScript');
  return core.gulp.src(core.config.files.js)
    .pipe(eslint())
    .pipe(eslint.format('stylish', process.stdout))
    .pipe(eslint.failAfterError())
    .on('error', function () {
      process.exit(1);
    });
});

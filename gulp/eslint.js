const TASK = 'eslint';
const core = require('../core-gulp-modules');
const eslint = require('gulp-eslint');

core.gulp.task(TASK, function () {
  core.subHeading(TASK, 'Linting JavaScript');
  return core.gulp.src(core.config.files.js)
    .pipe(eslint('.eslintrc.json'))
    .pipe(eslint.format())
    .pipe(eslint.failOnError());
});

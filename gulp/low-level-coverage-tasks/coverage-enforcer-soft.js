const TASK = 'coverage-enforcer-soft';
const core = require('../../gulp-core');
const intercept = require('gulp-intercept');
const enforcer = require('./enforcer-function');

core.gulp.task(TASK, () => {
  return core.gulp.src(['coverage/json-summary.json'])
    .pipe(intercept((file) => {
      let result = enforcer(file);
      core.subHeading(TASK, result.message);
    }));
});

const TASK = 'coverage-enforcer-hard';
const core = require('../../gulp-core');
const enforcer = require('./enforcer-function');

core.gulp.task(TASK, () => {
  return core.gulp.src(['coverage/coverage-ts-summary.json'])
    .pipe(core.intercept((file) => {
      let result = enforcer(file);
      core.subHeading(TASK, result.message);
      if (result.success === false) {
        process.exit(1);
      }
    }));
});

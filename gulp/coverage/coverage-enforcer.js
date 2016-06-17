'use strict';

const gulp = require('gulp');
const intercept = require('gulp-intercept');

gulp.task('coverage-enforcer', () => {
  const GLOBAL_THRESHOLD = 50;
  let thresholds = {
    statements: GLOBAL_THRESHOLD,
    branches: GLOBAL_THRESHOLD,
    lines: GLOBAL_THRESHOLD,
    functions: GLOBAL_THRESHOLD
  };

  return gulp.src(['coverage/json-summary.json'])
    .pipe(intercept(file => {
      let failedThresholds = [];
      let total = JSON.parse(file.contents.toString()).total;
      let actuals = {
        statements: total.statements.pct,
        branches: total.branches.pct,
        lines: total.lines.pct,
        functions: total.functions.pct
      };

      for (let key of Object.keys(actuals)) {
        if (actuals[key] < thresholds[key]) failedThresholds.push(key);
      }

      console.log('Coverage thresholds', thresholds);

      if (failedThresholds.length > 0) {
        console.log('FAILED thresholds', failedThresholds);
        process.exit(1);
      } else {
        console.log('PASSED thresholds');
      }
    }));
});

const TASK = 'tslint-hard';
const core = require('../../gulp-core');
const tslint = require('gulp-tslint');
const reporter = require('./tslint-reporter-function');

core.gulp.task(TASK, () => {
  core.subHeading(TASK, 'Linting TypeScript');
  return core.gulp
    .src(core.config.files.ts)
    .pipe(tslint())
    .pipe(tslint.report(reporter, {
      emitError: true,
      summarizeFailureOutput: true
    }))
    .on('error', (err) => {
      console.log(err.message);
      process.exit(1);
    });
});

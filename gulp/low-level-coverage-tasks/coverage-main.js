const TASK = 'coverage-main';
const core = require('../../gulp-core');
const remapIstanbul = require('remap-istanbul/lib/gulpRemapIstanbul');

core.gulp.task(TASK, () => {
  core.subHeading(TASK, 'Generating remapped coverage reports');
  return core.gulp.src('coverage/coverage-js.json')
    .pipe(remapIstanbul({
      reports: {
        'html': 'coverage/html',
        'json-summary': 'coverage/coverage-ts-summary.json',
        'json': 'coverage/coverage-ts.json',
        'text-summary': 'coverage/coverage-ts-summary.txt',
        'text': 'coverage/coverage-ts.txt'
      }
    }));
});

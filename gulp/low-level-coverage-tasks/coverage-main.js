const TASK = 'coverage-main';
const core = require('../../core-gulp-modules');
const remapIstanbul = require('remap-istanbul/lib/gulpRemapIstanbul');

core.gulp.task('coverage-main', () => {
  core.subHeading(TASK, 'Generating remapped coverage reports');
  return core.gulp.src('coverage/coverage-final.json')
    .pipe(remapIstanbul({
      reports: {
        'html': 'coverage/html',
        'text-summary': 'coverage/text-summary.txt',
        'text': 'coverage/text.txt',
        'json-summary': 'coverage/json-summary.json'
      }
    }));
});

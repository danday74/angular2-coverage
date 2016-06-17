// const gulp = require('gulp');
// const shell = require('gulp-shell');
// gulp.task('coverage', shell.task([
//   'npm run gulptask-coverage'
// ]));

const gulp = require('gulp');
const remapIstanbul = require('remap-istanbul/lib/gulpRemapIstanbul');

gulp.task('coverage-main', () => {
  return gulp.src('coverage/coverage-final.json')
    .pipe(remapIstanbul({
      reports: {
        'html': 'coverage/html',
        'text-summary': 'coverage/text-summary.txt',
        'text': 'coverage/text.txt',
        'json-summary': 'coverage/json-summary.json'
      }
    }));
});

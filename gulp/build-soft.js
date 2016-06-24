const TASK = 'build-soft';
const core = require('../gulp-core');

core.gulp.task(TASK, (done) => {
  core.mainHeading(TASK, 'Starting build');
  core.runSequence(
    'eslint-hard',
    'build-clean',
    'tslint-soft',
    'ts-2-js-soft',
    'styl-2-css-soft',
    'styl-2-css-stream-soft',
    'copy',
    done);
});

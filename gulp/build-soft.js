const TASK = 'build-soft';
const core = require('../gulp-core');

core.gulp.task(TASK, done => {
  core.mainHeading(TASK, 'Starting build');
  core.runSequence(
    'eslint-hard',
    'build-clean',
    'tslint-soft',
    ['copy', 'styl-2-css', 'styl-2-css-stream', 'ts-2-js'],
    done);
});

const core = require('../../gulp-core');
const stylus = require('gulp-stylus');
const sourcemaps = require('gulp-sourcemaps');
const nib = require('nib');
const BASEMSG = 'Transpiling Stylus to CSS';

const taskFunc = (TASK) => {
  let isStream = TASK.includes('stream');
  let msg = isStream ? `${BASEMSG} (streaming)` : BASEMSG;
  let srcFiles = isStream ? core.config.files.stylStream : core.config.files.styl;
  let isSoft = TASK.includes('soft');

  core.subHeading(TASK, msg);
  let myStylus = stylus({
    'include css': true,
    compress: true,
    use: nib()
  });

  return core.gulp
    .src(srcFiles)
    .pipe(sourcemaps.init())
    .pipe(myStylus)
    .on('error', err => {
      console.log();
      console.log(err.message);
      if (isSoft) {
        if (!isStream) {
          let serious1 = core.serious('Errors in a component\'s external stylesheets may cause unit test \'Failed to load CSS\' failures for that component');
          console.log(serious1);
          let serious2 = core.serious('This is because errors prevent CSS file writing                                                                  ');
          console.log(serious2);
          console.log();
        }
        myStylus.emit('end');
      } else {
        process.exit(1);
      }
    })
    .pipe(sourcemaps.write('.', {includeContent: false, sourceRoot: '../app'}))
    .pipe(core.gulp.dest('build'))
    .pipe(core.gulpif(isStream, core.config.browserSync.stream()));
};

let TASK1 = 'styl-2-css-soft';
let TASK2 = 'styl-2-css-stream-soft';
let TASK3 = 'styl-2-css-hard';
let TASK4 = 'styl-2-css-stream-hard';

core.gulp.task(TASK1, () => {
  return taskFunc(TASK1);
});

core.gulp.task(TASK2, () => {
  return taskFunc(TASK2);
});

core.gulp.task(TASK3, () => {
  return taskFunc(TASK3);
});

core.gulp.task(TASK4, () => {
  return taskFunc(TASK4);
});

const core = require('../../gulp-core');
const stylus = require('gulp-stylus');
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
    // 'resolve url' : true,
    compress: true,
    use: nib(),
    include: 'app'
  });

  return core.gulp
    .src(srcFiles)
    // TODO: Enforce sourcemaps for dev env only
    .pipe(core.gulpif(true, core.sourcemaps.init()))
    .pipe(myStylus)
    .on('error', (err) => {
      console.log();
      console.log(err.message);
      if (isSoft) {
        if (isStream) {
          console.log(core.chalk.red(`Error whilst ${msg}`));
          console.log();
        } else {
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
    // TODO: Enforce sourcemaps for dev env only
    .pipe(core.gulpif(true, core.sourcemaps.write(
      core.config.sourcemaps.dir,
      core.config.sourcemaps.options)))
    .pipe(core.gulp.dest('build'))
    // Passing the match CSS object to browserSync.stream supports CSS injection and sourcemaps
    // However, the sourcemaps do not update on change without a manual refresh
    // Not passing the match CSS object to browserSync.stream fixes this but causes CSS injection failure
    .pipe(core.gulpif(isStream, core.browserSync.stream({match: '**/*.css'})));
};

const TASK1 = 'styl-2-css-soft';
const TASK2 = 'styl-2-css-stream-soft';
const TASK3 = 'styl-2-css-hard';
const TASK4 = 'styl-2-css-stream-hard';

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

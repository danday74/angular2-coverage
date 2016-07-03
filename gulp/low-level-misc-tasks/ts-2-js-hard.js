const TASK = 'ts-2-js-hard';
const core = require('../../gulp-core');
const typescript = require('gulp-typescript');
let tscConfig = require('../../tsconfig.json');
delete tscConfig.compilerOptions.outDir;

core.gulp.task(TASK, () => {
  core.subHeading(TASK, 'Transpiling TypeScript to JavaScript');
  return core.gulp
    .src(core.config.files.ts.concat(core.config.files.tsd))
    // TODO: Enforce sourcemaps for dev env only
    .pipe(core.gulpif(true, core.sourcemaps.init()))
    .pipe(typescript(tscConfig.compilerOptions))
    .on('error', () => {
      process.exit(1);
    })
    // TODO: Enforce sourcemaps for dev env only
    .pipe(core.gulpif(true, core.sourcemaps.write(
      core.config.sourcemaps.dir,
      core.config.sourcemaps.options)))
    .pipe(core.gulp.dest('build'));
});

const TASK = 'ts-2-js-soft';
const core = require('../../gulp-core');
const typescript = require('gulp-typescript');
const tscConfig = require('../../tsconfig.json');

core.gulp.task(TASK, () => {
  core.subHeading(TASK, 'Transpiling TypeScript to JavaScript');
  return core.gulp
    .src(core.config.files.ts.concat(core.config.files.tsd))
    // TODO: Enforce sourcemaps for dev env only
    .pipe(core.gulpif(true, core.sourcemaps.init()))
    .pipe(typescript(tscConfig.compilerOptions))
    // TODO: Enforce sourcemaps for dev env only
    .pipe(core.gulpif(true, core.sourcemaps.write('.', {
      includeContent: false,
      sourceRoot: '../app'
    })))
    .pipe(core.gulp.dest('build'));
});

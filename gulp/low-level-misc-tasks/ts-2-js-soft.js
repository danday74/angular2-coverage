const TASK = 'ts-2-js-soft';
const core = require('../../gulp-core');
const typescript = require('gulp-typescript');
const tscConfig = require('../../tsconfig.json');

core.gulp.task(TASK, () => {
  core.subHeading(TASK, 'Transpiling TypeScript to JavaScript');
  return core.gulp
    .src(core.config.files.ts.concat(core.config.files.tsd))
    .pipe(core.gulpif(core.getMode() === 'start', core.sourcemaps.init()))
    .pipe(typescript(tscConfig.compilerOptions))
    .pipe(core.gulpif(core.getMode() === 'start', core.sourcemaps.write('.', {
      includeContent: false,
      sourceRoot: '../app'
    })))
    .pipe(core.gulp.dest('build'));
});

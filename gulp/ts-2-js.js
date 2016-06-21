const TASK = 'ts-2-js';
const core = require('../core-gulp-modules');
const typescript = require('gulp-typescript');
const tscConfig = require('../tsconfig.json');
const sourcemaps = require('gulp-sourcemaps');

core.gulp.task(TASK, () => {
  core.subHeading(TASK, 'Transpiling TypeScript to JavaScript');
  return core.gulp
    .src(core.config.files.ts.concat(core.config.files.tsd))
    .pipe(sourcemaps.init())
    .pipe(typescript(tscConfig.compilerOptions))
    .pipe(sourcemaps.write('.', {includeContent: false, sourceRoot: '../app'}))
    .pipe(core.gulp.dest('build'));
});

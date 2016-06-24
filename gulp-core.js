const gulp = require('gulp');
const gulpif = require('gulp-if');
const intercept = require('gulp-intercept');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();
const chalk = require('chalk');
const config = require('./gulp.config');
const path = require('path');
const runSequence = require('run-sequence');
const VALID_MODES = ['build', 'start', 'test'];
const DEFAULT_MODE = VALID_MODES[1];
let modeCache;

const getMode = () => {
  if (modeCache != null) return modeCache;
  modeCache = (process.argv.length > 2) ? process.argv[2] : DEFAULT_MODE;
  if (!VALID_MODES.includes(modeCache)) {
    modeCache = DEFAULT_MODE;
  }
  return modeCache;
};

const mainHeading = (taskName, msg) => {
  console.log(chalk.bgWhite.black(`${taskName}: ${msg}`));
};

const subHeading = (taskName, msg) => {
  taskName = chalk.cyan(taskName);
  console.log(`${taskName}: ${msg}`);
};

const link = (url) => {
  return chalk.bgCyan.black(url);
};

const serious = (msg) => {
  return chalk.bgRed.white(msg);
};

const watch = (msg) => {
  return chalk.bgBlue.white(msg);
};

module.exports = {
  gulp,
  gulpif,
  intercept,
  sourcemaps,
  browserSync,
  chalk,
  config,
  path,
  runSequence,
  getMode,
  mainHeading,
  subHeading,
  link,
  serious,
  watch
};

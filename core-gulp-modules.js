const gulp = require('gulp');
const chalk = require('chalk');
const config = require('./gulp.config');
const runSequence = require('run-sequence');
const path = require('path');

const mainHeading = (taskName, msg) => {
  console.log(chalk.bgWhite.black(`${taskName}: ${msg}`));
};

const subHeading = (taskName, msg) => {
  taskName = chalk.cyan(taskName);
  console.log(`${taskName}: ${msg}`);
};

module.exports = {
  gulp, chalk, config, runSequence, path, mainHeading, subHeading
};

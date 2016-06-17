const gulp = require('gulp');
const Server = require('karma').Server;
const path = require('path');

gulp.task('karma', done => {
  new Server({
    configFile: path.join(__dirname, '../karma.conf.js'),
    singleRun: true
  }, () => { done() }).start();
});

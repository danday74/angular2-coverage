const gulp = require('gulp');
const config = require('../gulp.config');
const chalk = require('chalk');
const path = require('path');
const rewrite = require('connect-modrewrite');

gulp.task('serve', () => {
  let taskName = path.basename(__filename, path.extname(__filename));

  config.browserSync.init({
    server: {
      port: config.browserSyncPort,
      baseDir: ['build', '.'],
      middleware: [
        rewrite([
          '^/api/(.*)$ ' + config.apiPhp + '/$1 [P]',
          '^/vm/(.*)$ ' + config.vmPhp + '/$1 [P]',
          '^[^\\.]*$ /index.html [L]'
        ])
      ]
    },
    open: false
  });
  config.browserSync.emitter.on('init', function () {
    setTimeout(() => {
      console.log(chalk.bgWhite.black(`${taskName}: CTRL CLICK to open http://localhost:${config.browserSyncPort}`));
    }, 1000);
  });
});

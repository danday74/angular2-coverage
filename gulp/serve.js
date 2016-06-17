const gulp = require('gulp');
const config = require('../gulp.config');
const rewrite = require('connect-modrewrite');

gulp.task('serve', () => {
  config.browserSync.init({
    server: {
      baseDir: ['build', '.'],
      middleware: [
        rewrite([
          '^/api/(.*)$ ' + config.apiPhp + '/$1 [P]',
          '^/vm/(.*)$ ' + config.vmPhp + '/$1 [P]',
          '^[^\\.]*$ /index.html [L]'
        ])
      ]
    }
  });
});

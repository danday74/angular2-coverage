const TASK = 'serve';
const core = require('../../gulp-core');
const rewrite = require('connect-modrewrite');

core.gulp.task(TASK, () => {
  core.config.browserSync.init({
    server: {
      port: core.config.browserSyncPort,
      baseDir: ['build', '.'],
      middleware: [
        rewrite([
          '^/api/(.*)$ ' + core.config.apiPhp + '/$1 [P]',
          '^/vm/(.*)$ ' + core.config.vmPhp + '/$1 [P]',
          '^[^\\.]*$ /index.html [L]'
        ])
      ]
    },
    open: false
  });
  core.config.browserSync.emitter.on('init', function () {
    setTimeout(() => {
      core.mainHeading(TASK, `CTRL CLICK to open http://localhost:${core.config.browserSyncPort}`);
    }, 1000);
  });
});

const TASK = 'serve';
const core = require('../../gulp-core');
const rewrite = require('connect-modrewrite');

core.gulp.task(TASK, () => {
  core.browserSync.init({
    server: {
      port: core.browserSyncPort,
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
  core.browserSync.emitter.on('init', function () {
    setTimeout(() => {
      let link = core.link(`http://localhost:${core.config.browserSyncPort}`);
      core.mainHeading(TASK, `CTRL CLICK to open ${link}`);
      core.browserSync.reload();
    }, 1000);
  });
});

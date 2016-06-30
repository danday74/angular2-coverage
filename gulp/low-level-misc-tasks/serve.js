const TASK = 'serve';
const core = require('../../gulp-core');
const rewrite = require('connect-modrewrite');

core.gulp.task(TASK, () => {
  core.browserSync.init({
    port: core.config.browserSyncPort,
    server: {
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
  core.browserSync.emitter.on('init', () => {
    // TODO: Should reload be here or inside timeout?
    core.browserSync.reload();
    setTimeout(() => {
      let link = core.link(`http://localhost:${core.config.browserSyncPort}`);
      core.mainHeading(TASK, `CTRL CLICK to open ${link}`);
    }, 1000);
  });
});

const core = require('../../gulp-core');
const DIR = 'app';

module.exports = (errors, file) => {
  let temp = file.path.split(`${core.path.sep}${DIR}${core.path.sep}`)[1];
  let filePath = `${DIR}/${temp}`;
  console.log(filePath);
  for (let err of errors) {
    let line = err.startPosition.line + 1;
    let char = err.startPosition.character + 1;
    line = (`  ${line}`).slice(-3);
    char = (`  ${char}`).slice(-3);
    let strPos = `${line}:${char}`;
    let strChalk = core.chalk.red('error');
    let strErr = `${err.failure}  (${err.ruleName})`;
    console.log(`  ${strPos}  ${strChalk}  ${strErr}`);
  }
};

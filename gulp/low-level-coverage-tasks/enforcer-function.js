const core = require('../../gulp-core');

module.exports = (file) => {

  let thresholds = core.config.coverageThresholds;
  let failedThresholds = [];
  let total = JSON.parse(file.contents.toString()).total;
  let actuals = {
    statements: total.statements.pct,
    branches: total.branches.pct,
    functions: total.functions.pct,
    lines: total.lines.pct
  };

  for (let key of Object.keys(actuals)) {
    if (actuals[key] < thresholds[key]) failedThresholds.push(key);
  }

  let strThresholds = ` of ${JSON.stringify(thresholds)}`;
  if (failedThresholds.length > 0) {
    return {
      message: core.chalk.red('FAILED thresholds') + strThresholds,
      success: false
    };
  } else {
    return {
      message: core.chalk.green('PASSED thresholds') + strThresholds,
      success: true
    };
  }
};

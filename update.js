const fs = require('fs');
const cmd = require('node-cmd');

fs.readFile('./package.json', 'utf8', (err, data) => {
  let pkg = JSON.parse(data);
  for (let dep in pkg.dependencies) {
    console.log(`Updating dev package ${dep}`);
    cmd.run(`npm i -S ${dep}@latest`); // You may need sudo here
  }
  for (let devDep in pkg.devDependencies) {
    console.log(`Updating devDep package ${devDep}`);
    cmd.run(`npm i -SD ${devDep}@latest`); // You may need sudo here
  }
  console.log('Please wait, updates in progress');
});

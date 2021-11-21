const { spawnSync } = require('child_process');


function doubleInputCase() {
  const testForInp = spawnSync(
    'node',
    ['main.js', '-c', 'C1-C1', '-c', '-i', './input.txt', '-o', './output.txt'],
    {
      cwd: process.cwd(),
      env: process.env,
      stdio: 'pipe',
      encoding: 'utf-8',
    },
  );
  savedOutput = testForInp.stderr;

  return savedOutput;
}

module.exports = doubleInputCase;

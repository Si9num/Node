const { spawnSync } = require('child_process');

function correctArg() {
  const testForInp = spawnSync(
    'node',
    ['main.js', '-c', 'C1-C1', '-i', './input.txt'],
    {
      cwd: process.cwd(),
      env: process.env,
      stdio: 'pipe',
      encoding: 'utf-8',
    },
  );
  savedOutput = testForInp.stdout;

  return savedOutput;
}

module.exports = correctArg;

const { spawnSync } = require('child_process');
function outpDoesntExistCase() {
  const testForInp = spawnSync(
    'node',
    ['main.js', '-c', 'C1-C1', '-i', './input.txt', '-o'],
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

module.exports = outpDoesntExistCase;

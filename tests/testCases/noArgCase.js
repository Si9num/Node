const { spawnSync } = require('child_process');
function noArgCase() {
  const testForInp = spawnSync(
    'node',
    ['main.js', '-i', './input.txt', '-o', './output.txt'],
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

module.exports = noArgCase;

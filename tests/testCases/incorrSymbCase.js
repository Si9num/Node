const { spawnSync } = require('child_process');
function incorrSymbCase() {
  const testForInp = spawnSync(
    'node',
    ['main.js', '-c', 'C6-C1-A7', '-i', './input.txt', '-o', './output.txt'],
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

module.exports = incorrSymbCase;

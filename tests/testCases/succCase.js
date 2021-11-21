const { spawnSync } = require('child_process');

function succCase() {
  let arrCase = [
    'C1-C1-R0-A',
    'C1-C0-A-R1-R0-A-R0-R0-C1-A',
    'A-A-A-R1-R0-R0-R0-C1-C1-A',
    'C1-R1-C0-C0-A-R0-R1-R1-A-C1',
  ];
  let savedOutput;
  let arrForRes = [];
  for (let i = 0; i < arrCase.length; i += 1) {
    const testForInp = spawnSync(
      'node',
      ['main.js', '-c', arrCase[i], '-i', './input.txt'],
      {
        cwd: process.cwd(),
        env: process.env,
        stdio: 'pipe',
        encoding: 'utf-8',
      },
    );
    savedOutput = testForInp.stdout;
    arrForRes.push(savedOutput);
  }

  return arrForRes;
}

module.exports = succCase;

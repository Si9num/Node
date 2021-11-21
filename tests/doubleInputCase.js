const { spawn, spawnSync } = require('child_process');
const { error } = require('console');
const { stderr } = require('process');
const fs = require('fs');

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

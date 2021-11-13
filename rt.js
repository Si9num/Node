const fs = require('fs');
const caesar = require('./caesar');
const test = require('./write.js');
const Caesar = require('./trans');

const flagIndexI = process.argv.indexOf('-i');
const flagIndexO = process.argv.indexOf('-o');

function cons() {
  const stat = fs.statSync('./input.txt');
  if (flagIndexI !== -1 && stat.size && flagIndexO === -1) {
    const path = process.argv[flagIndexI + 1];
    const cifr = new Caesar(`${fs.readFileSync(path)}`);
    fs.createReadStream('./input.txt').pipe(cifr).pipe(process.stdout);
  } else if (flagIndexO !== -1) {
    const path = process.argv[flagIndexO + 1];
    const cifr = new Caesar(`${fs.readFileSync(path)}`);
    fs.createReadStream('./input.txt')
      .pipe(cifr)
      .pipe(fs.createWriteStream(path));
  } else {
    const cifr = new Caesar();
    process.stdin.pipe(cifr).pipe(process.stdout);
  }
}
cons();

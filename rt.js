const fs = require('fs');
const caesar = require('./caesar');
const test = require('./write.js');
const Caesar = require('./trans');

const flagIndexI = process.argv.indexOf('-i');
const flagIndexO = process.argv.indexOf('-o');
const flagIndexC = process.argv.indexOf('-c');

function cons() {
  const stat = fs.statSync('./input.txt');
  const cifr = new Caesar();
  if (flagIndexI !== -1 && stat.size && flagIndexO === -1) {
    const path = process.argv[flagIndexI + 1];

    fs.createReadStream(path).pipe(cifr).pipe(process.stdout);
  } else if (flagIndexO !== -1) {
    const path = process.argv[flagIndexO + 1];
    const pathI = process.argv[flagIndexI + 1];

    fs.createReadStream(pathI)
      .pipe(cifr)
      .pipe(fs.createWriteStream(path, { flags: 'a' }));
  } else {
    process.stdin.pipe(cifr).pipe(process.stdout);
  }
  if (
    [...new Set(process.argv.slice(2))].length !== process.argv.slice(2).length
  ) {
    process.stderr.write('Error: option is duplicated');
    process.exit(1);
  } else if (
    !fs.existsSync(
      process.argv[flagIndexI + 1] ||
        !fs.existsSync(process.argv[flagIndexO + 1]),
    )
  ) {
    process.stderr.write("Error: the file is doesn't exist");
    process.exit(1);
  }
}
cons();

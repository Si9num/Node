const { Transform } = require('stream');
const caesar = require('./caesar');
const atbash = require('./atbash');
const fs = require('fs');
const test = require('./write.js');

const flagIndexC = process.argv.indexOf('-c');
class Caesar extends Transform {
  constructor(par) {
    super();
    this.par = process.argv[flagIndexC + 1].split('');
  }

  _transform(chunk, encoding, callback) {
    for (let i = 0; i < this.par.length; i += 1) {
      const res = caesar(chunk.toString(), +this.par[i]);
      fs.createReadStream('./output.txt').pipe(
        fs.createWriteStream('./output.txt'),
      );
      this.push(res);
    }

    callback();
  }
}

module.exports = Caesar;

const { Transform } = require('stream');
const caesar = require('./caesar');
const atbash = require('./atbash');
const rot = require('./rot');
const fs = require('fs');
const test = require('./write.js');

const flagIndexC = process.argv.indexOf('-c');

class Caesar extends Transform {
  constructor(par) {
    super();
    this.par = process.argv[flagIndexC + 1].split('-');
  }

  _transform(chunk, encoding, callback) {
    let f = chunk.toString();
    let d = [];
    for (let i = 0; i < this.par.length; i += 1) {
      if (this.par[i][0] === 'C') {
        const res = caesar(f.toString(), +this.par[i][1]);
        f = res;
        d.push(f);
      } else if (this.par[i][0] === 'A') {
        const res = atbash(f.toString());
        f = res;
        d.push(f);
      } else if (this.par[i][0] === 'R') {
        const res = rot(f.toString(), +this.par[i][1]);
        f = res;
        d.push(f);
      }
    }
    console.log(d);
    this.push(d[d.length - 1]);
    callback();
  }
}

module.exports = Caesar;

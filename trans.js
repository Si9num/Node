const { Transform } = require('stream');
const caesar = require('./caesar');
const fs = require('fs');
const test = require('./write.js');

class Caesar extends Transform {
  constructor() {
    super();
  }
  _transform(chunk, encoding, callback) {
    const res = caesar(chunk.toString());
    this.push(res);
    callback();
  }
}

module.exports = Caesar;

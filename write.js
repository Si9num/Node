const fs = require('fs');
function test(a) {
  const output = fs.writeFileSync('output.txt', `${a}`);
  return output;
}
module.exports = test;

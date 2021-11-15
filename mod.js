function mod(x, y) {
  return x - y * Math.floor(x / y);
}
module.exports = mod;

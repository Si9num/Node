const flagIndex = process.argv.indexOf('-m');
if (flagIndex !== -1) {
  const message = process.argv[flagIndex + 1];
  console.log(message);
} else {
  console.log('err');
}

const doubleInputCase = require('./testCases/doubleInputCase');
const incorrSymbCase = require('./testCases/incorrSymbCase');
const inpDoesntExistCase = require('./testCases/inpDoesntExistCase');
const noArgCase = require('./testCases/noArgCase');
const outpDoesntExistCase = require('./testCases/outpDoesntExistCase');
const correctArg = require('./testCases/correctArg');
const succCase = require('./testCases/succCase');
test('should return error if arguments are duplicated', () => {
  expect(doubleInputCase()).toBe('Error: option is duplicated');
});
test('should return error if User doesnt pass -c or --config argument', () => {
  expect(noArgCase()).toBe('Error: config is invalid');
});
test('should return error if User passes -i argument with path that doesnt exist or with no read access', () => {
  expect(inpDoesntExistCase()).toBe(`Error: the file is doesn't exist`);
});
test('should return error if  User passes -o argument with path to directory that doesnt exist or with no read access', () => {
  expect(outpDoesntExistCase()).toBe(`Error: the file is doesn't exist`);
});
test('should return error if  User passes incorrent symbols in argument for --config', () => {
  expect(incorrSymbCase()).toBe('Error: config is invalid');
});
test('User passes correct sequence of symbols as argument for --config that matches regular expression', () => {
  expect(correctArg()).toBe('Vjku ku ugetgv. Oguucig cdqwv "_" uaodqn!    ');
});
test('Take cipher usage scenarios from first task description', () => {
  expect(succCase()).toStrictEqual([
    'Myxn xn nbdobm. Tbnnfzb ferlm "_" nhteru!        ',
    'Vhgw gw wkmxkv. Ckwwoik onauv "_" wqcnad!                    ',
    'Hvwg wg gsqfsh. Asggous opcih "_" gmapcz!                    ',
    'This is secret. Message about "_" symbol!                    ',
  ]);
});

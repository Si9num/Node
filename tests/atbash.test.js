const atbash = require('../atbash');

test('test for ABCDEFGHIJKLMNOPQRSTUVWXYZ@a for encoding', () => {
  expect(atbash('ABCDEFGHIJKLMNOPQRSTUVWXYZ@a')).toBe(
    `${
      'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').reverse().join('') + '@z' + '  '
    }`,
  );
});

test('test for  non English alphabet or any symbols', () => {
  expect(atbash('ABCDEFGHIJKLMNOPQRSTUVWXYZ$#%^&)([]}{*ячипоть@', 0)).toBe(
    `${
      'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').reverse().join('') +
      '$#%^&)([]}{*ячипоть@' +
      '  '
    }`,
  );
});

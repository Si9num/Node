const caesar = require('../caesar');

test('test for ABCDEFGHIJKLMNOPQRSTUVWXYZ@a for encoding', () => {
  expect(caesar('ABCDEFGHIJKLMNOPQRSTUVWXYZ@a', 1)).toBe(
    'BCDEFGHIJKLMNOPQRSTUVWXYZA@b  ',
  );
});
test('test for BCDEFGHIJKLMNOPQRSTUVWXYZA for decoding', () => {
  expect(caesar('BCDEFGHIJKLMNOPQRSTUVWXYZA', 0)).toBe(
    'ABCDEFGHIJKLMNOPQRSTUVWXYZ  ',
  );
});
test('test for  non English alphabet or any symbols', () => {
  expect(caesar('BCDEFGHIJKLMNOPQRSTUVWXYZA$#%^&)([]}{*ячипоть@1', 0)).toBe(
    'ABCDEFGHIJKLMNOPQRSTUVWXYZ$#%^&)([]}{*ячипоть@1  ',
  );
});

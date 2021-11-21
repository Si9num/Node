const rot = require('../rot');

test('test for ABCDEFGHIJKLMNOPQRSTUVWXYZ@az for encoding', () => {
  expect(rot('ABCDEFGHIJKLMNOPQRSTUVWXYZ@az', 1)).toBe(
    'IJKLMNOPQRSTUVWXYZABCDEFGH@ih  ',
  );
});
test('test for IJKLMNOPQRSTUVWXYZABCDEFGH for decoding', () => {
  expect(rot('IJKLMNOPQRSTUVWXYZABCDEFGH', 0)).toBe(
    'ABCDEFGHIJKLMNOPQRSTUVWXYZ  ',
  );
});
test('test for  non English alphabet or any symbols', () => {
  expect(rot('IJKLMNOPQRSTUVWXYZABCDEFGH$#%^&)([]}{*ячипоть@', 0)).toBe(
    'ABCDEFGHIJKLMNOPQRSTUVWXYZ$#%^&)([]}{*ячипоть@  ',
  );
});

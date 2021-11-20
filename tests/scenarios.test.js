const { spawn, spawnSync } = require('child_process');
const doubleInputCase = require('./doubleInputCase');
jest.spyOn(console, 'log');
test('test for double -c', () => {
  expect(doubleInputCase()).toBe('Hello World');
});

const test = require('node:test');
const assert = require('node:assert');

function somar(a, b) {
  return a + b;
}

test('deve somar dois números corretamente', () => {
  assert.strictEqual(somar(2, 3), 5);
});
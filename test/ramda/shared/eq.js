const ActiveRules = require('../../../src/ActiveRules.js')
const AR = new ActiveRules()
const R = AR.R;
const assert = require('assert');

module.exports = function(actual, expected) {
  assert.strictEqual(arguments.length, 2);
  assert.strictEqual(R.toString(actual), R.toString(expected));
};

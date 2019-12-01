/* global describe, it */
var assert = require('assert');
var Ensure = require('../Ensure');

describe('TestEnsure', function () {
  it('ensureTypeOfWorks', function () {
    // ARRANGE
    var number = 1;
    // ACT, ASSERT
    assert.doesNotThrow(function () { Ensure.typeOf(0, number); });
  });

  it('ensureTypeOf_wrongType_Works', function () {
    // ARRANGE
    var letter = 'a';
    // ACT, ASSERT
    assert.throws(function () { Ensure.typeOf(0, letter); });
  });

  it('ensureNotNullWorks', function () {
    // ARRANGE
    var obj = {};
    // ACT, ASSERT
    assert.doesNotThrow(function () { Ensure.notNull(obj); });
  });

  it('ensureNotNull_null_Works', function () {
    // ARRANGE
    var obj;

    // ACT, ASSERT
    assert.throws(function () { Ensure.notNull(obj); });
  });
});

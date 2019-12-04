/* global describe, it */
var assert = require('assert');
var Ensure = require('../Ensure');

describe('TestEnsure', function () {
  describe('ensureTypeOf', function () {
    it('should not throw when correct type', function () {
      // ARRANGE
      var number = 1;
      // ACT, ASSERT
      assert.doesNotThrow(function () { Ensure.typeOf(0, number); });
    });

    it('should throw when wrong type', function () {
      // ARRANGE
      var letter = 'a';
      // ACT, ASSERT
      assert.throws(function () { Ensure.typeOf(0, letter); });
    });
  });

  describe('ensureNotNull', function () {
    it('should not throw when not null', function () {
      // ARRANGE
      var obj = {};
      // ACT, ASSERT
      assert.doesNotThrow(function () { Ensure.notNull(obj); });
    });

    it('should not throw when 0', function () {
      // ARRANGE
      var number = 0;
      // ACT, ASSERT
      assert.doesNotThrow(function () { Ensure.notNull(number); });
    });

    it('should not throw when bool', function () {
      // ARRANGE
      var bool = false;
      // ACT, ASSERT
      assert.doesNotThrow(function () { Ensure.notNull(bool); });
    });

    it('should throw when undefined', function () {
      // ARRANGE
      var obj;
      // ACT, ASSERT
      assert.throws(function () { Ensure.notNull(obj); });
    });

    it('should throw when null', function () {
      // ARRANGE
      var obj = null;
      // ACT, ASSERT
      assert.throws(function () { Ensure.notNull(obj); });
    });
  });
});

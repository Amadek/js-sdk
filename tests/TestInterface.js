/* global describe, it */
var assert = require('assert');
var Interface = require('../Interface');

describe('TestInterface', function () {
  it('literalWorks', function () {
    // ARRANGE
    var IFoo = new Interface('IFoo', ['fooMethod', 'barMethod'], ['fooProperty', 'barProperty']);
    var foo = {
      fooProperty: 1,
      fooMethod: function () { }
    };

    // ACT, ASSERT
    // Not all methods and properties:
    assert.throws(function () { IFoo.ensureImplemented(foo); });

    foo.barProperty = 2;
    assert.throws(function () { IFoo.ensureImplemented(foo); });

    // All required methods and properties:
    foo.barMethod = function () { };
    assert.doesNotThrow(function () { IFoo.ensureImplemented(foo); });
  });

  it('prototypeWorks', function () {
    // ARRANGE
    var IFoo = new Interface('IFoo', ['fooMethod']);
    var Foo = function () {
      function Foo () { }

      Foo.prototype.fooMethod = function () { };

      return Foo;
    };

    var foo = new Foo();
    // ACT, ASSERT
    assert.throws(function () { IFoo.ensureImplemented(foo); });
  });
});

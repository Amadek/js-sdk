
var Ensure = (function () {
  function Ensure () {}

  Ensure.prototype.notNull = function (obj) {
    if (obj === null || obj === undefined) {
      throw new Error('Variable cannot be null or undefined.');
    }
  };

  Ensure.prototype.typeOf = function (exampleObj, obj) {
    if (typeof obj !== typeof exampleObj) {
      throw new Error('Variable is not ' + typeof exampleObj + '.');
    }
  };

  return Ensure;
}());

module.exports = new Ensure();
